import Head from "next/head";
import Script from "next/script";
import ReactGA from "react-ga4";
import { usePathname, useSearchParams } from "next/navigation";
import ReactPixel from "react-facebook-pixel";
import { pageView } from "./pageView";
import { useEffect } from "react";
import { sendEventToConversionApi } from "@/utils/sendEventToConversionApi";
import { useSelector } from "react-redux";
import { searchParams as searchParamsSelector } from "@/store/searchParamsSlice";
import { postData } from "@/utils/postData";
import { getCookieByKey } from "@/utils/getCookieByKey";
import Image from "next/image";

const options = {
  autoConfig: true,
  debug: false,
};

const HeadScripts = ({ GA_MEASUREMENT_ID }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useSelector(searchParamsSelector);
  const allQuery = useSearchParams();
  const routerQuery = queryParams || allQuery;

  const queryLength = Object.keys(routerQuery).length;
  const query =
    queryLength > 0
      ? {
          utm_campaign: routerQuery.utm_campaign || "",
          utm_medium: routerQuery.utm_medium || "referral",
          utm_source: routerQuery.utm_source || "google",
          utm_term: routerQuery.utm_term || "",
        }
      : {
          utm_source: "google",
          utm_medium: "referral",
        };

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageView(GA_MEASUREMENT_ID, url);

    if (typeof window !== "undefined") {
      window.ReactPixel = ReactPixel;
      window.sendEventToConversionApi = sendEventToConversionApi;
      window.postData = postData;
      window.ReactGA = ReactGA;
      window.getCookieByKey = getCookieByKey;
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Head>
        <title>LASERTAG.NET – Laser tag equipment for business</title>
        <meta name="theme-color" content="#000" />
        <meta
          name="description"
          content="WORLD LEADER IN MOBILE LASER TAG SOLUTIONS"
        />
        <noscript>
          <iframe
            loading="lazy"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNVBX97"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1815249061859086&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
      </Head>
      {/* Google Analytics */}
      <Script id="Google Analytics" strategy="afterInteractive">
        {ReactGA.initialize(GA_MEASUREMENT_ID)}
      </Script>

      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
					window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied'
                    });
                    
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
					`,
        }}
      />
      {/* End Google Analytics */}

      {/* FACEBOOK PIXEL */}
      <Script id="pixel" strategy="afterInteractive">
        {ReactPixel.init("1815249061859086", {}, options)}
      </Script>
      <Script
        id="pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1815249061859086');
                fbq('track', 'PageView');
            `,
        }}
      />
      {/* END FACEBOOK PIXEL */}

      {/* Google Tag Manager */}
      <Script
        id="Google Tag Manager"
        dangerouslySetInnerHTML={{
          __html: `
                    (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TCNQJR9');`,
        }}
      />
      {/* End Google Tag Manager */}
      {/* <!--Start of Tawk.to Script--> */}
      <Script
        id="tawk-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/664f1e379a809f19fb340a47/1huikqsf8';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();

          Tawk_API.onLoad = function() {
            Tawk_API.addTags(["Website: " + window.location.hostname]);

            ${
              query.utm_campaign
                ? `Tawk_API.addTags(["utm_campaign: " + "${query.utm_campaign}"]);`
                : ""
            }
            ${
              query.utm_medium
                ? `Tawk_API.addTags(["utm_medium: " + "${query.utm_medium}"]);`
                : ""
            }
            ${
              query.utm_source
                ? `Tawk_API.addTags(["utm_source: " + "${query.utm_source}"]);`
                : ""
            }
            ${
              query.utm_term
                ? `Tawk_API.addTags(["utm_term: " + "${query.utm_term}"]);`
                : ""
            }
          };

       let chatId = null;

          window.Tawk_API.onPrechatSubmit = function(data) {
 const values = {};

    const keyMap = {
        'name': 'name',
        'email': 'email',
        'phone': 'phone'
    };

    data.forEach(item => {
        const key = item.label.toLowerCase();
        
        if (keyMap[key]) {
            values[keyMap[key]] = item.answer;
        }
    });

    if (values.phone) {
    values.chatPhone = values.phone; 
    delete values.phone;
}

        const routerQuery = ${JSON.stringify(routerQuery)
          .replace(/</g, "\\u003c")
          .replace(/>/g, "\\u003e")
          .replace(/&/g, "\\u0026")
          .replace(/'/g, "\\u0027")};
      
  document.addEventListener('chatIdReady', () => {
    values.chatId = chatId;

    postData(
      values,
      "https://back.netronic.net/forms",
      "Tawk.to | LT NET USA",
      window.location.href,
      window.location.hostname,
      routerQuery,
      "Чат на сайті"
    )
    .then(async () => {
        const abTestValue = getCookieByKey("ab_test");

      await fetch("https://back.netronic.net/track-form-version", {
        method: "POST",
        body: JSON.stringify({ version: abTestValue }),
        headers: {
        "Content-Type": "application/json",
          },
        });
        
      ReactGA.event("generate_lead", {
        category: "form",
        action: "submit",
      });
      ReactPixel.track("Lead");
      sendEventToConversionApi(window.location.href, "Lead");
    });
  });
};

window.Tawk_API.onChatStarted = function(data) {
  if (data && data.chatId) {
    chatId = data.chatId;
    
    const event = new Event('chatIdReady');
    document.dispatchEvent(event);
  }
};

          Tawk_API.onOfflineSubmit = function(data) {
            ReactPixel.track("Lead");
            sendEventToConversionApi(window.location.href, "Lead");
          };`,
        }}
      />
      {/* <!--End of Tawk.to Script--> */}
    </>
  );
};

export default HeadScripts;
