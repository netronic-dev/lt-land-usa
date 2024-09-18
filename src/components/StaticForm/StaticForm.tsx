"use client";

import { useIsDesktop } from "@/hooks";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  linkWithCredential,
} from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReactGA from "react-ga4";
import axios from "axios";
import { isValidPhoneNumber } from "react-phone-number-input";
import Image from "next/image";
import { debounce } from "lodash";
import { authentication } from "../../../firebase-config";

import googleLogo from "../../assets/images/google_logo.webp";
import { schema } from "@/constants/validate";
import { postData } from "@/utils/postData";
import { sendEventToConversionApi } from "@/utils/sendEventToConversionApi";
import { ErrorResponse, IFormInputs } from "@/models";
import { selectBudgetOptions } from "@/constants/globalConstants";
import { searchParams } from "../../store/searchParamsSlice";
import { PrimaryButton } from "../PrimaryButton";
import { Input } from "../Input";
import { ChangeBudgetOptions } from "../ChangeBudgetOptions";
import { Agreement } from "../Agreement";
import { useModals } from "@/context/ModalsProvider";
import { Icon } from "../Icon";
import { getCookieByKey } from "@/utils/getCookieByKey";

interface IStaticFormProps {
  titleForm?: string;
  titleSpanForm?: string;
  textForm?: string;
  orderOldName: string;
  destinationURL: string;
  textBtn: string;
  letterId: number;
  fromName: string;
  thank_you_page?: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  budgetPlaceholder?: string;
  googleAuthBtnText?: string;
  googleAuthBtnSpan?: string;
  googleAuthClearBtnText?: string;
  googleAuthChangeBtnText?: string;
  agreementText: string;
  agreementLinkSpanText?: string;
  agreementLink?: string;
  submittingText?: string;
  facebookAuthBtnText?: string;
}

const StaticForm: FC<IStaticFormProps> = ({
  textForm,
  orderOldName,
  destinationURL,
  textBtn,
  fromName,
  letterId,
  titleForm,
  titleSpanForm,
  namePlaceholder,
  emailPlaceholder,
  budgetPlaceholder,
  thank_you_page,
  googleAuthBtnText,
  googleAuthBtnSpan,
  googleAuthClearBtnText,
  googleAuthChangeBtnText,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
  submittingText,
  facebookAuthBtnText,
}) => {
  const [regionCode, setRegionCode] = useState<string>("");
  const [loggedViaSocials, setLoggedSocials] = useState<string>("");
  const isDesktop = useIsDesktop();

  const modals = useModals();

  const router = useRouter();
  const queryParams = useSelector(searchParams);
  const query = useSearchParams();

  const debouncedSubmit = debounce(async (type: string, siteName: string) => {
    try {
      await axios.post("https://back.netronic.net/forms/trackSubmit", {
        type: type,
        siteName: siteName,
      });
    } catch (error) {
      console.error("Error tracking submit:", error);
    }
  }, 300);

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
    setError,
    getValues,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      agreement: true,
    },
  });

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.track("Lead");
      });
  }, []);

  const handleServerErrors = (error: { [key: string]: string }) => {
    Object.entries(error).forEach(([key, message]) => {
      if (["name", "email", "phoneNumber"].includes(key)) {
        setError(key as "name" | "email" | "phoneNumber", {
          type: "server",
          message,
        });
      }
    });
  };

  const googleAuth = async () => {
    await signOut(authentication);

    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(authentication, provider);
    setLoggedSocials("Google");
    reset({
      email: user.email || undefined,
      name: user.displayName || undefined,
    });
  };

  const clearAuth = async () => {
    await signOut(authentication);
    setLoggedSocials("");
    reset({
      email: "",
      name: "",
    });
  };

  const facebookAuth = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const { user } = await signInWithPopup(authentication, provider);

      setLoggedSocials("Facebook");
      reset({
        email: user.email
          ? user.email
          : (user as any).reloadUserInfo.providerUserInfo[0].email,
        name: user.displayName ? user.displayName : "",
      });
    } catch (error: any) {
      await axios.post(
        "https://back.netronic.net/telegram/send-error-message",
        {
          message: `frontend error: facebookAuth ❌ ${
            window.location.hostname
          }: ${error.code ? error.code : error}`,
        }
      );
      if (error.code === "auth/popup-blocked") {
        alert("Please allow pop-ups for this site.");
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        const pendingCred = FacebookAuthProvider.credentialFromError(error);

        if (pendingCred) {
          const googleProvider = new GoogleAuthProvider();
          const googleUser = await signInWithPopup(
            authentication,
            googleProvider
          );
          const linkedUser = await linkWithCredential(
            googleUser.user,
            pendingCred
          );
          reset({
            email: (linkedUser as any)._tokenResponse.email,
            name: (linkedUser as any)._tokenResponse.displayName,
          });
          setLoggedSocials("Facebook");
        } else {
          alert("Failed to retrieve Facebook credentials.");
        }
      } else {
        alert("Try again, please!");
        await axios.post(
          "https://back.netronic.net/telegram/send-error-message",
          {
            message: `frontend error: facebookAuth ❌ ${window.location.hostname}: Try again, please!`,
          }
        );
      }
    }
  };

  const handleAgreementChange = () => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

  const orderName = loggedViaSocials
    ? `(${loggedViaSocials}) ${orderOldName}`
    : `(Noauthorization) ${orderOldName}`;

  const onSubmit = async (values: IFormInputs) => {
    modals?.setUserName(values.name);

    const abTestValue = getCookieByKey("ab_test");
    console.log(abTestValue, "abTestValue");

    const data = {
      ...values,
      phoneNumber: `+${values.phoneNumber}`,
      budget: values?.budget?.value || "",
    };

    const options = {
      method: "POST",
      url: `https://back.netronic.net/send-email`,
      headers: {
        "content-type": "application/json",
      },
      data: {
        email: values.email,
        fromName: fromName,
        letterId: letterId,
      },
    };
    try {
      debouncedSubmit("attempt", window.location.hostname);

      const sendEmailResponse = await axios.request(options);
      const postToCRMResponse = await postData(
        data,
        destinationURL,
        orderName,
        window.location.href,
        window.location.hostname,
        queryParams || query
      );

      const trackVersionResponse = await axios.post(
        "https://back.netronic.net/track-form-version",
        {
          version: abTestValue,
        }
      );

      await Promise.all([
        sendEmailResponse,
        postToCRMResponse,
        trackVersionResponse,
      ]);

      reset();
      ReactGA.event("generate_lead", {
        category: "form",
        action: "submit",
      });
      const ReactPixel = (await import("react-facebook-pixel")).default;
      ReactPixel.track("Lead");
      sendEventToConversionApi(window.location.href, "Lead");

      modals.closeModal();
      router.push(thank_you_page || "/thanks/call");
    } catch (error) {
      const serverError = error as ErrorResponse;
      if (serverError) {
        handleServerErrors(serverError.response.data);
      }
    }
  };

  useEffect(() => {
    modals?.region
      ? setRegionCode(modals?.region.toLowerCase())
      : setRegionCode("us");
  }, [modals.region]);

  return (
    <div>
      {titleForm && (
        <h3 className="text-[var(--primary-text-color)] font-manrope text-[23px] md:text-[36px] md:leading-[43px] font-extrabold text-center mb-[26px]">
          {titleForm} {titleSpanForm && <br />}
          {titleSpanForm && (
            <span className="text-[var(--accent-color)]">{titleSpanForm}</span>
          )}
        </h3>
      )}
      {textForm && (
        <p className="font-manrope text-[var(--primary-text-color)] text-[16px] font-extrabold text-center mb-[55px] lg:max-w-[762px]">
          {textForm}
        </p>
      )}
      {isDesktop ? (
        <div className="flex flex-col gap-[15px] w-full">
          <div className="flex flex-col md:flex-row gap-[9px] justify-center items-center md:gap-[32px] w-full">
            {loggedViaSocials ? (
              <>
                <button
                  className="auth_clear_button cursor-pointer rounded-[8px] border-solid border-[1px] border-[#000] bg-[#fff] h-[56px] w-full text-[#000] font-manrope text-[16px] font-extrabold leading-[143.75%]"
                  onClick={clearAuth}
                >
                  Clear
                </button>
                <button
                  className="auth_change_button cursor-pointer rounded-[8px] border-solid border-[1px] border-[#000] bg-[#000] h-[56px] w-full text-[#fff] font-manrope text-[16px] font-extrabold leading-[143.75%]"
                  onClick={
                    loggedViaSocials === "Google" ? googleAuth : facebookAuth
                  }
                >
                  Change account
                </button>
              </>
            ) : (
              <>
                <button
                  className="auth_google_button flex w-full items-center justify-center gap-[5px] cursor-pointer rounded-[8px] bg-[#e0e0e0] py-[16.5px] text-[#000] font-manrope text-[16px] font-extrabold leading-[23px] transition-all md:w-[418px]"
                  onClick={googleAuth}
                >
                  <Image
                    src={googleLogo}
                    alt="google logo"
                    height={15}
                    width={15}
                  />{" "}
                  {googleAuthBtnText
                    ? googleAuthBtnText
                    : "Authorization via Google"}
                </button>
                <button
                  className="auth_facebook_button flex w-full items-center justify-center gap-[5px] cursor-pointer rounded-[8px] bg-[#395498] py-[16.5px] text-[#fff] border-solid border-[1px] border-[#395498] font-manrope text-[16px] font-extrabold leading-[23px] transition-all md:w-[418px]"
                  onClick={facebookAuth}
                >
                  <Icon
                    name="icon-facebook_logo"
                    className="facebook_icon"
                    width={15}
                    height={15}
                  />{" "}
                  {facebookAuthBtnText
                    ? facebookAuthBtnText
                    : "Authorization via Meta (Facebook)"}
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-[25px] w-full">
            <span className="w-full h-[1px] bg-[#fff] "></span>
            <span className="text-[#fff] text-center font-manrope text-[16px] font-extrabold leading-[120%] md:leading-[268.75%]">
              {googleAuthBtnSpan ? googleAuthBtnSpan : "or"}
            </span>
            <span className="w-full h-[1px] bg-[#fff]"></span>
          </div>
        </div>
      ) : null}
      <form
        className="flex flex-col gap-[15px] w-full mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          control={control}
          name="name"
          placeholder={namePlaceholder}
          error={errors.name?.message}
          rules={{ required: "Name is required" }}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative w-full">
              <PhoneInput
                inputStyle={{
                  height: "55px",
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: "8px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: errors.phoneNumber
                    ? "#d22e2e"
                    : "rgb(118, 118, 118)",
                  color: "#000",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  outline: "0",
                  fontFamily: "Manrope",
                }}
                buttonStyle={{
                  borderColor: errors.phoneNumber
                    ? "#d22e2e"
                    : "rgb(118, 118, 118)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  fontFamily: "Manrope",
                  height: "55px",
                }}
                country={regionCode}
                enableSearch
                excludeCountries={["ru"]}
                value={value}
                onChange={onChange}
              />
              {errors.phoneNumber && (
                <p className="absolute text-[var(--error-color)] left-0 bottom-[-18px] text-[12px] font-manrope">
                  {errors.phoneNumber?.message}
                </p>
              )}
              {!errors.phoneNumber &&
                value &&
                !isValidPhoneNumber(`+${value}`) && (
                  <p className="absolute text-[var(--error-color)] left-0 bottom-[-18px] text-[12px] font-manrope">
                    Invalid phone number
                  </p>
                )}
            </div>
          )}
        />
        <Input
          control={control}
          name="email"
          placeholder={emailPlaceholder}
          error={errors.email?.message}
          rules={{ required: "Email is required" }}
        />
        {budgetPlaceholder && (
          <ChangeBudgetOptions
            options={selectBudgetOptions}
            control={control}
            name="budget"
            error={errors.budget?.message}
            placeholder={budgetPlaceholder}
          />
        )}
        <Agreement
          agreementText={agreementText}
          agreementLinkSpanText={agreementLinkSpanText}
          agreementLink={agreementLink}
          error={errors.agreement?.message}
          control={control}
          onClick={handleAgreementChange}
          name="agreement"
        />
        <PrimaryButton
          type="submit"
          disabled={!isValid || isSubmitting}
          size="mediumThinner"
        >
          {isSubmitting ? submittingText || "Submitting..." : textBtn}
        </PrimaryButton>
      </form>
    </div>
  );
};

export default StaticForm;
