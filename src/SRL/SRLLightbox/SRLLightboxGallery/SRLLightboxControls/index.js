import React from "react";
import PropTypes from "prop-types";
import {
  SRRLLightboxCloseIcon,
  SRLLightboxNextIcon,
  SRLLightboxPrevIcon
} from "../styles";

const SRLLightboxControls = ({
  handleCloseLightbox,
  handleNextImage,
  handlePrevImage,
  currentImageId,
  buttonsBackgroundColor,
  buttonsIconColor
}) => {
  const test = buttonsIconColor.replace(/[\d\.]+\)$/g, "1)");
  console.log(test);
  return (
    <React.Fragment>
      <SRRLLightboxCloseIcon
        buttonsBackgroundColor={buttonsBackgroundColor}
        buttonsIconColor={buttonsIconColor}
        title="Close"
        className="SRLCloseButton"
        onClick={() => handleCloseLightbox(currentImageId)}
      >
        <div className="SRLCloseButton">
          <svg
            className="SRLCloseButton"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              className="SRLPrevButton"
              d="M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"
            />
          </svg>
        </div>
      </SRRLLightboxCloseIcon>
      <SRLLightboxNextIcon
        buttonsBackgroundColor={buttonsBackgroundColor}
        buttonsIconColor={buttonsIconColor}
        title="Next"
        className="SRLNextButton"
        onClick={e => handleNextImage(currentImageId, e)}
      >
        <div className="SRLNextButton">
          <svg
            className="SRLNextButton"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              className="SRLPrevButton"
              d="M24.53 11.36l-.44.44c-.29.29-.29.76 0 1.05l11.09 11.09H11.83c-.41 0-.75.33-.75.75v.62c0 .41.33.75.75.75h23.35L24.09 37.14c-.29.29-.29.76 0 1.05l.44.44c.29.29.76.29 1.05 0l13.11-13.11c.29-.29.29-.76 0-1.05l-13.1-13.11a.754.754 0 0 0-1.06 0z"
            />
          </svg>
        </div>
      </SRLLightboxNextIcon>
      <SRLLightboxPrevIcon
        buttonsBackgroundColor={buttonsBackgroundColor}
        buttonsIconColor={buttonsIconColor}
        title="Previous"
        className="SRLPrevButton"
        onClick={() => handlePrevImage(currentImageId)}
      >
        <div className="SRLPrevButton">
          <svg
            className="SRLPrevButton"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path
              className="SRLPrevButton"
              d="M25.47 38.64l.44-.44c.29-.29.29-.76 0-1.05L14.82 26.06h23.35c.41 0 .75-.33.75-.75v-.62c0-.41-.33-.75-.75-.75H14.82l11.09-11.09c.29-.29.29-.76 0-1.05l-.44-.44a.742.742 0 0 0-1.05 0L11.31 24.47c-.29.29-.29.76 0 1.05l13.11 13.11c.29.3.76.3 1.05.01z"
            />
          </svg>
        </div>
      </SRLLightboxPrevIcon>
    </React.Fragment>
  );
};

export default SRLLightboxControls;

SRLLightboxControls.propTypes = {
  handleCloseLightbox: PropTypes.func,
  handleNextImage: PropTypes.func,
  handlePrevImage: PropTypes.func,
  currentImageId: PropTypes.string,
  buttonsBackgroundColor: PropTypes.string,
  buttonsIconColor: PropTypes.string
};
