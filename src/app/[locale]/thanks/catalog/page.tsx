"use client";

import { useState } from "react";
import videoImage from "../../../../assets/images/video.jpg";
import videoResponsiveImage from "../../../../assets/images/video-responsive.jpg";
import imageOne from "../../../../assets/images/thankYouImgOne.png";
import imageTwo from "../../../../assets/images/thankYouImgTwo.png";
import { useModals } from "@/context/ModalsProvider";
import { VideoPopUp } from "@/components/VideoPopUp";
import { Text } from "@/components/ThankYouPart/Text";
import { Video } from "@/components/ThankYouPart/Video";
import { Banner } from "@/components/ThankYouPart/Banner";

export default function ThankYouPage() {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  function onVideoModalChange(link: any) {
    setShowVideo(link);
    document.body.className = "popUp";
    if (link === null) {
      document.body.className = "";
    }
  }

  const modals = useModals();

  return (
    <section>
      {showVideo && (
        <VideoPopUp
          withoutPreview
          theme="lp"
          onClick={() => onVideoModalChange(null)}
          link={showVideo}
        />
      )}
      <Text
        title={
          <>
            Thank you, <span>{modals.userName}</span>
            <br />
            we have received your request!
          </>
        }
        text="A catalog will be sent to your email within 2 minutes. If you do not receive the catalog, please check all mail and contact us via phone or Facebook messenger."
        // link="https://lasertag.net/black-friday-2022/usd"
        // image="/thank-you/banner.png"
        // objectFit="cover"
        // objectPosition="10% 50%"
        // imageResponsive="/thank-you/banner-mobile.png"
        // objectFitResponsive="cover"
        // objectPositionResponsive="45% 50%"
      />
      <Video
        title={
          <>
            <span>Watch our video</span>
            <br />
            What is mobile laser tag business?
          </>
        }
        videoImage={videoImage}
        videoImageResponsive={videoResponsiveImage}
        text="Watch our other videos on:"
        onPreviewClick={() => onVideoModalChange("spVxrSihtNI")}
        socialMediaData={[
          {
            link: "https://www.linkedin.com/company/lasertagnet/",
            icon: "linkedin",
          },
          {
            link: "https://www.facebook.com/lasertagnet",
            icon: "facebook",
          },
          {
            link: "https://www.instagram.com/lasertag_net/",
            icon: "instagram",
          },
          {
            link: "https://www.youtube.com/c/LasertagNet",
            icon: "youtube",
          },
          {
            link: "https://www.tiktok.com/@lasertag_usa",
            icon: "tikTok",
          },
        ]}
      />
      <Banner
        title={
          <>
            Check our inflatables
            <br />
            for <span>laser tag,</span> paintball
            <br />
            and archery tag on
          </>
        }
        image_1={imageOne}
        image_2={imageTwo}
        buttonText="AIR-BUNKER.COM"
        buttonLink="https://air-bunker.com"
      />
    </section>
  );
}
