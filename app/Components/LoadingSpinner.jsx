import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingSpinner = () => (
  <div id="loading-spinner-container">
    <ScaleLoader sizeUnit={"px"} size={50} color={"#4fbcff"} loading={true} />{" "}
  </div>
);

export default LoadingSpinner;
