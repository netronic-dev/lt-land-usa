"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useModals } from "../../context/ModalsProvider";
import { getLocationData } from "../../utils/postData";
import { sendEventToConversionApi } from "../../utils/sendEventToConversionApi";
import { addSearchParamsData } from "../../store/searchParamsSlice";
import { ModalForm } from "../ModalForm";
import { getCookieByKey } from "@/utils/getCookieByKey";

const HeadScripts = dynamic(
  () => import("../../components/HeadScripts/HeadScripts"),
  {
    ssr: false,
  }
);
const CookieBanner = dynamic(
  () => import("../../components/CookieBanner/CookieBanner"),
  {
    ssr: false,
  }
);

const PageLayout = (props: any) => {
  const modals = useModals();
  const dispatch = useDispatch();

  const orderText = modals.textToOrder ? modals.textToOrder : "";

  const createCorrectURL = (url: string) => {
    const [hostAndPathName, queryTail] = url.split("#");

    if (queryTail && queryTail.includes("utm_source=")) {
      const [anchor, utmsTail] = queryTail.split("?");
      return utmsTail;
    }
    return url.split("?")[1];
  };

  const setSearchParamsToStore = (paramsStr: string) => {
    const params = new URLSearchParams(paramsStr);

    if (params.size > 0) {
      const query = {
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_term: params.get("utm_term"),
      };
      dispatch(addSearchParamsData(query));
    }
  };

  useEffect(() => {
    sendEventToConversionApi(window.location.href, "PageView");

    const abTestValue = getCookieByKey("ab_test");

    // if (abTestValue) {
    //   axios.post("https://back.netronic.net/track-visit", {
    //     version: abTestValue,
    //   });
    // }

    if (!abTestValue) {
      const version = Math.random() < 0.5 ? "A" : "B";
      document.cookie = `ab_test=${version}; path=/;`;
      window.location.href = `https://us.lasertag.net/?version=${version}`;
      window.location.reload();
    } else {
      axios.post("https://back.netronic.net/track-visit", {
        version: abTestValue,
      });
    }
  }, []);

  useEffect(() => {
    const searchParams = createCorrectURL(window.location.href);
    setSearchParamsToStore(searchParams);
    getLocationData().then((data) => {
      modals.setRegionName(data.region);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{props.title || "Lasertag"}</title>
        <meta name="description" content={props.description || ""} />
        <meta name="theme-color" content="#D22E2E" />
        <meta
          name="facebook-domain-verification"
          content="5j4ebucrmv3bncug3ykdklezuiu2db"
        />
        {props.title && <meta property="og:title" content={props.title} />}
        {props.description && (
          <meta property="og:description" content={props.description} />
        )}
        <meta property="og:type" content={props.ogType} />
        {props.ogUrl && <meta property="og:url" content={props.ogUrl} />}
        {props.ogImage && <meta property="og:image" content={props.ogImage} />}
      </Head>
      {modals.catalogFormVisibility ? (
        <ModalForm
          isOpen={modals.catalogFormVisibility}
          closeModal={modals.formCatalogChangeVisibility}
          titleForm="Fill out the form and get the"
          titleSpanForm="catalog by email"
          textForm="After sending the catalog, our manager will contact you using the information provided in the form"
          orderOldName="Catalog order | LT NET USA (versionB)"
          destinationURL="https://back.netronic.net/forms"
          letterId={3421156}
          fromName="Lasertag"
          thank_you_page="/thanks/catalog"
          textBtn="Get catalog"
          submittingText="Sending..."
          namePlaceholder="Name*"
          emailPlaceholder="Email*"
          budgetPlaceholder="Budget*"
          agreementText="I agree with conditions of the processing and use"
          agreementLinkSpanText="of my personal data"
        />
      ) : (
        ""
      )}
      {modals.demoFormVisibility ? (
        <ModalForm
          isOpen={modals.demoFormVisibility}
          closeModal={modals.formDemoChangeVisibility}
          titleForm="Request a personal demo!"
          textForm="Our manager will demonstrate you all features of the equipment,
            as well our as unique maps"
          orderOldName="Demo order | LT NET USA (versionB)"
          destinationURL="https://back.netronic.net/forms"
          letterId={3421154}
          fromName="Lasertag"
          thank_you_page="/thanks/demo"
          textBtn="Get demo"
          submittingText="Sending..."
          namePlaceholder="Name*"
          emailPlaceholder="Email*"
          budgetPlaceholder="Budget*"
          agreementText="I agree with conditions of the processing and use"
          agreementLinkSpanText="of my personal data"
        />
      ) : (
        ""
      )}
      {modals.consultationFormVisibility ? (
        <ModalForm
          isOpen={modals.consultationFormVisibility}
          closeModal={modals.formConsultationChangeVisibility}
          titleForm="Make a successful business with LASERTAG.NET"
          textForm="Fill out the form below to contact our manager"
          orderOldName="Consultation order | LT NET USA (versionB)"
          destinationURL="https://back.netronic.net/forms"
          letterId={3421159}
          fromName="Lasertag"
          thank_you_page="/thanks/call"
          textBtn="Get consultation"
          submittingText="Sending..."
          namePlaceholder="Name*"
          emailPlaceholder="Email*"
          budgetPlaceholder="Budget*"
          agreementText="I agree with conditions of the processing and use"
          agreementLinkSpanText="of my personal data"
        />
      ) : (
        ""
      )}
      {modals.testDriveFormVisibility ? (
        <ModalForm
          isOpen={modals.testDriveFormVisibility}
          closeModal={modals.formTestDriveChangeVisibility}
          titleForm="Would you like to book a test drive? "
          textForm="Fill out the form below to express your interest."
          orderOldName={`Test-drive order ${orderText} | LT NET USA (versionB)`}
          destinationURL="https://back.netronic.net/forms"
          letterId={3433769}
          fromName="Lasertag"
          thank_you_page="/thanks/test-drive"
          textBtn="Get Test Drive"
          submittingText="Sending..."
          namePlaceholder="Name*"
          emailPlaceholder="Email*"
          budgetPlaceholder="Budget*"
          agreementText="I agree with conditions of the processing and use"
          agreementLinkSpanText="of my personal data"
        />
      ) : (
        ""
      )}
      {modals.partnershipFormVisibility ? (
        <ModalForm
          isOpen={modals.partnershipFormVisibility}
          closeModal={modals.formPartnershipChangeVisibility}
          titleForm="Interested in becoming"
          titleSpanForm="a partner?"
          textForm="Fill out the form below to express your interest, and let's explore the possibilities together!"
          orderOldName={`Partnership | LT NET USA (versionB)`}
          destinationURL="https://back.netronic.net/forms"
          letterId={3433743}
          fromName="Lasertag"
          thank_you_page="/thanks/call"
          textBtn="Fill in the form"
          submittingText="Sending..."
          namePlaceholder="Name*"
          emailPlaceholder="Email*"
          agreementText="I confirm that I have read and agree to the terms"
          agreementLinkSpanText="of the privacy policy"
        />
      ) : (
        ""
      )}
      {/* {activeBanner ? (
                    <Banner
                        // dateName='Date'
                        // date='14.11 - 17.11'
                        // placeName='Place'
                        title={<>
                            <span>Christmas&nbsp;Offers!</span><br />
                            Start the New Year
                            with a new VR business
                        </>}
                        buttonText='Receive a gift'
                        // sub_title="It's the perfect time to start a profitable VR business with VION VR"
                        text="Unveil the magic of VR business with Christmas offers with gifts.  Limited Time Only!"
                        toggleActivity={toggleActivity}
                    />
                ) : (
                    ''
                )} */}
      <HeadScripts GA_MEASUREMENT_ID="G-8D4JT4409V" />
      <CookieBanner
        title={
          <>
            We use <Link href="/privacy">cookies</Link> on our site
          </>
        }
        text="On our website, cookies are used to collect information about traffic on the site and to analyze the usage of our site by visitors."
        decline_btn_text="Decline"
        allow_btn_text="Allow Cookie"
      />
      <main>{props.children}</main>
    </>
  );
};

export default PageLayout;
