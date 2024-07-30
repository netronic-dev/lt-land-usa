"use client";

import Head from "next/head";
import Script from "next/script";
import ReactGA from "react-ga4";
import { usePathname, useSearchParams } from "next/navigation";
import { pageView } from "./pageView";
import { useEffect } from "react";

const options = {
  autoConfig: true,
  debug: false,
};

const HeadScripts = ({ GA_MEASUREMENT_ID }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (typeof window !== "undefined") {
      pageView(GA_MEASUREMENT_ID, url);
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ReactPixel = require("react-facebook-pixel").default;
      ReactPixel.init("1815249061859086", {}, options);
      ReactPixel.pageView();
    }
  }, []);

  return (
    <>
      <Head>
        <title>LASERTAG.NET – Laser tag equipment for business</title>
        <meta name="theme-color" content="#000" />
        <link rel="icon" type="image/png" href="/forpost-favicon.png" />
        <meta
          name="description"
          content="WORLD LEADER IN MOBILE LASER TAG SOLUTIONS"
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNVBX97"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1815249061859086&ev=PageView&noscript=1"
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
})();`,
        }}
      />
      {/* <!--End of Tawk.to Script--> */}
    </>
  );
};

export default HeadScripts;
