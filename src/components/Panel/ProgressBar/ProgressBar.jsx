import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css";

const ProgressBar = ({ progress, title, disableTitle, width, background }) => {
  // Validaciones
  if (disableTitle == null) disableTitle = false;
  if (width == null) width = "100%";
  if (background == null)
    background =
      "-webkit-linear-gradient(left, rgba(147, 195, 240, 1) 0%, rgba(9, 79, 153, 1) 100%)";

  // Referencias a elementos
  const progressRef = useRef();
  const containerRef = useRef();
  useEffect(() => {
    progressRef.current.style.width = progress;
    progressRef.current.style.background = background;
    containerRef.current.style.width = width;
    // eslint-disable-next-line
  }, [progress]);

  return (
    <>
      {disableTitle ? null : <p className="text-percent">{title}</p>}
      <div ref={containerRef} className="container-progress">
        <div className="container-progress-2">
          <div ref={progressRef} className="progress-bar"></div>
        </div>
      </div>
    </>
  );
};

// Validación de types...
ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
  title: PropTypes.string,
  disableTitle: PropTypes.number,
  width: PropTypes.string,
  background: PropTypes.string,
};

export default ProgressBar;
