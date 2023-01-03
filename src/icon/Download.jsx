import React from "react";

const Download = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={props.style ? props.style : "w-6 h-6"}
    >
      <polyline
         points="22 14 22 22 2 22 2 14"
         id="polyline2" />
      <polyline
         points="17 12 12 17 7 12"
         id="polyline4" />
      <line
         x1="12"
         y1="17"
         x2="12"
         y2="3"
         id="line6" />
    </svg>
  );
};

export default Download;
