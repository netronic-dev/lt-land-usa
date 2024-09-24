import { Modal } from "@mui/material";
import { FC } from "react";
import dynamic from "next/dynamic";
import { Icon } from "../Icon";
import { useModals } from "@/context/ModalsProvider";

const StaticForm = dynamic(() => import("../StaticForm/StaticForm"), {
  ssr: false,
});

interface IModalForm {
  isOpen: boolean;
  closeModal: () => void;
  titleForm: string;
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
  agreementText: string;
  agreementLinkSpanText?: string;
  agreementLink?: string;
  submittingText?: string;
}

const ModalForm: FC<IModalForm> = ({
  isOpen,
  closeModal,
  titleForm,
  titleSpanForm,
  textForm,
  letterId,
  submittingText,
  orderOldName,
  destinationURL,
  textBtn,
  fromName,
  namePlaceholder,
  emailPlaceholder,
  budgetPlaceholder,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
  thank_you_page,
}) => {
  const modal = useModals();

  return (
    <Modal
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={isOpen}
      onClose={closeModal}
    >
      <div className="relative w-full md:w-[606px] lg:w-[694px] xl:w-[1164px] rounded-[25px] flex justify-center bg-[#181E30] pt-[67px] pb-[94px] max-h-[90vh] overflow-y-auto border-[transparent]">
        <div
          onClick={closeModal}
          className="absolute top-[21px] right-[28px] w-[27px] h-[27px] rounded-full bg-[#000] hover:bg-[#fff] cursor-pointer flex items-center justify-center group transition-all"
        >
          <Icon
            className="text-[#fff] group-hover:text-[#000]"
            name="icon-cross"
            width={15}
            height={15}
          />
        </div>
        <div className="w-full md:w-[680px] px-[18px]">
          <StaticForm
            titleForm={titleForm}
            titleSpanForm={titleSpanForm}
            textForm={textForm}
            orderOldName={orderOldName}
            destinationURL={destinationURL}
            textBtn={textBtn}
            fromName={fromName}
            namePlaceholder={namePlaceholder}
            emailPlaceholder={emailPlaceholder}
            budgetPlaceholder={budgetPlaceholder}
            agreementText={agreementText}
            agreementLinkSpanText={agreementLinkSpanText}
            agreementLink={agreementLink}
            submittingText={submittingText}
            thank_you_page={thank_you_page}
            letterId={letterId}
          />
        </div>
      </div>
    </Modal>
  );
};
export default ModalForm;
