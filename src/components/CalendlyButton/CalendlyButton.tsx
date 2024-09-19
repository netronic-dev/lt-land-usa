"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useCalendlyEventListener } from "react-calendly";
import ReactGA from "react-ga4";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../store/UserDataSlice";
import { searchParams } from "../../store/searchParamsSlice";
import { postData } from "@/utils/postData";
import { PrimaryButton } from "../PrimaryButton";
import dynamic from "next/dynamic";

const PopupModal = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  {
    ssr: false,
  }
);

type EventData = {
  event: {
    uri: string;
  };
  invitee: {
    uri: string;
  };
};

const CalendlyButton = (props: any) => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [rootElement, setRootElement] = useState<any>(null);
  const router = useRouter();
  const query = useSearchParams();
  const dispatch = useDispatch();
  const queryParams = useSelector(searchParams);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next"));
    }
  }, []);

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      e.data.payload ? setEventData(e.data.payload) : null;
    },
  });

  const openCallModal = (section: any) => {
    ReactGA.event("Call request popup opened", {
      category: "buttons",
      action: "click",
      label: `Open PopUp Form ${section}`,
    });
    setIsOpen(true);
  };

  const ClientID = "CggGW-NVNybjZRwnaEPRVjYccPYZ1XPu2i4Xcgwgerc";
  const ClientSecret = "GyWlPMZ1bTh1UwCVY5F_Zoqqxbd19AbwyFUuuv9rNCk";

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.track("Lead");
      });
  }, []);

  useEffect(() => {
    const obj = {
      ClientID,
      ClientSecret,
      ...eventData,
    };

    if (eventData) {
      fetch("https://back.netronic.net/calendly", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(async (data) => {
          dispatch(addUserData({ name: data.name }));

          try {
            await postData(
              data,
              "https://back.netronic.net/forms",
              `Call order (Calendly) | LT NET USA (Call ${data.time}) (versionB)`,
              window.location.href,
              window.location.hostname,
              queryParams || query
            );

            ReactGA.event("generate_lead", {
              event_category: "button",
              event_label: "generate_lead",
            });

            router.push("/thanks/call");
          } catch (error) {
            await axios.post(
              "https://back.netronic.net/telegram/send-error-message",
              {
                message: `frontend error: calendly ❌ ${window.location.hostname}: ${error}`,
              }
            );
          }
        })
        .catch(async (error) => {
          await axios.post(
            "https://back.netronic.net/telegram/send-error-message",
            {
              message: `frontend error: calendly ❌ ${window.location.hostname}: ${error}`,
            }
          );
        });
    }
  }, [eventData, dispatch, props.lang, queryParams, query, router]);

  return (
    <div>
      <PrimaryButton size="small" onClick={() => openCallModal("Call Request")}>
        {props.btnText}
      </PrimaryButton>
      <PopupModal
        url={props.url}
        pageSettings={props.pageSettings}
        utm={props.utm}
        prefill={props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        // rootElement={document.getElementById("__next")}
        rootElement={rootElement}
      />
    </div>
  );
};

export default CalendlyButton;
