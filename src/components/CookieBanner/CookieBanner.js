"use client";

import { useState, useEffect } from "react";
import style from "./style.module.scss";
import { getLocalStorage, setLocalStorage } from "./storageHelper";

const CookieBanner = (props) => {
  const [cookieConsent, setCookieConsent] = useState(() =>
    getLocalStorage("cookie_consent", null)
  );

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
        ad_storage: newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent);
    }
  }, [cookieConsent]);

  const handleAllow = () => {
    setCookieConsent(true);
    window.location.reload();
  };

  const handleDecline = () => {
    setCookieConsent(false);
  };

  return cookieConsent === null ? (
    <div className={style.banner}>
      <div className={style.container}>
        <div className={style.content}>
          <h3 className={style.banner_title}>{props.title}</h3>
          <p className={style.banner_text}>{props.text}</p>
        </div>
        <div className={style.buttons_block}>
          <button className={style.allow_button} onClick={handleAllow}>
            {props.allow_btn_text}
          </button>
          <button className={style.decline_button} onClick={handleDecline}>
            {props.decline_btn_text}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieBanner;
