import React, { useContext, useState } from "react";

const ModalsContext = React.createContext();

export const useModals = () => {
  return useContext(ModalsContext);
};

export default function ModalsProvider(props) {
  const [demoFormVisibility, setDemoFormVisibility] = useState(false);
  const [catalogFormVisibility, setCatalogFormVisibility] = useState(false);
  const [consultationFormVisibility, setConsultationFormVisibility] =
    useState(false);
  const [testDriveFormVisibility, setTestDriveFormVisibility] = useState(false);
  const [partnershipFormVisibility, setPartnershipFormVisibility] =
    useState(false);
  const [textToOrder, setTextToOrder] = useState("");
  const [region, setRegion] = useState(false);
  const [imagesSliderModal, setImagesToSliderModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isStandardOpen, setIsStandardOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isRoyalOpen, setIsRoyalOpen] = useState(false);
  const [userName, setUsername] = useState(null);

  function turnOnScroll() {
    document.body.className = "";
  }

  function turnOffScroll() {
    document.body.className = "modal_opened";
  }

  function formConsultationChangeVisibility() {
    setConsultationFormVisibility(!consultationFormVisibility);
    if (consultationFormVisibility) {
      turnOnScroll();
    } else {
      turnOffScroll();
    }
  }

  function formPartnershipChangeVisibility() {
    setPartnershipFormVisibility(!partnershipFormVisibility);
    if (partnershipFormVisibility) {
      turnOnScroll();
    } else {
      turnOffScroll();
    }
  }

  const setUserName = (name) => {
    setUsername(name);
  };

  function setOrderText(text) {
    setTextToOrder(text);
  }

  function formDemoChangeVisibility() {
    setDemoFormVisibility(!demoFormVisibility);
    if (demoFormVisibility) {
      turnOnScroll();
    } else {
      turnOffScroll();
    }
  }

  function formCatalogChangeVisibility() {
    setCatalogFormVisibility(!catalogFormVisibility);
    if (catalogFormVisibility) {
      turnOnScroll();
    } else {
      turnOffScroll();
    }
  }

  function formTestDriveChangeVisibility() {
    setTestDriveFormVisibility(!testDriveFormVisibility);
    if (testDriveFormVisibility) {
      turnOnScroll();
    } else {
      turnOffScroll();
    }
  }

  const imagesModal = {
    start: (imagesData, index) => imagesSliderModalChange(imagesData, index),
    index: imageIndex,
    close: () => imagesSliderModalChange(false),
  };

  function imagesSliderModalChange(imagesData, index) {
    if (imagesData) {
      setImagesToSliderModal(imagesData);
      if (index) {
        setImageIndex(index);
      }
      turnOffScroll();
    } else {
      setImagesToSliderModal(false);
      turnOnScroll();
    }
  }

  const setRegionName = (name) => {
    setRegion(name);
  };

  const openStandardModal = () => {
    turnOffScroll();
    setIsStandardOpen(true);
  };

  const openPersonalModal = () => {
    turnOffScroll();
    setIsPersonalOpen(true);
  };

  const openRoyalModal = () => {
    turnOffScroll();
    setIsRoyalOpen(true);
  };

  const closeModal = () => {
    setIsStandardOpen(false);
    setIsPersonalOpen(false);
    setIsRoyalOpen(false);
    turnOnScroll();
  };

  return (
    <ModalsContext.Provider
      value={{
        demoFormVisibility,
        formDemoChangeVisibility,

        catalogFormVisibility,
        formCatalogChangeVisibility,

        consultationFormVisibility,
        formConsultationChangeVisibility,

        testDriveFormVisibility,
        formTestDriveChangeVisibility,

        partnershipFormVisibility,
        formPartnershipChangeVisibility,

        imagesModal,

        textToOrder,
        setOrderText,

        setRegionName,
        region,

        isStandardOpen,
        isPersonalOpen,
        isRoyalOpen,
        openStandardModal,
        openPersonalModal,
        openRoyalModal,
        closeModal,

        setUserName,
        userName,
      }}
    >
      {props.children}
    </ModalsContext.Provider>
  );
}
