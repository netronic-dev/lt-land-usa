import React, { FC } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player/youtube";

interface IYouTubeModal {
  isOpen: boolean;
  onRequestClose: () => void;
  videoUrl: string;
}

const YouTubeModal: FC<IYouTubeModal> = ({
  isOpen,
  onRequestClose,
  videoUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="YouTube Video"
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={true}
    >
      <div className="video-container">
        <ReactPlayer
          width="100%"
          height="100%"
          url={videoUrl}
          controls={true}
          playing={isOpen}
        />
      </div>
    </Modal>
  );
};

export default YouTubeModal;
