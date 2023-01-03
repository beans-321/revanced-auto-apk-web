import React from "react";

const Download = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.style ? props.style : "w-6 h-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 7 2 L 7 9.2929688 L 4.3535156 6.6464844 L 3.6464844 7.3535156 L 7.5 11.207031 L 11.353516 7.3535156 L 10.646484 6.6464844 L 8 9.2929688 L 8 2 L 7 2 z M 3 13 L 3 14 L 3.5 14 L 11.5 14 L 12 14 L 12 13 L 11.5 13 L 3.5 13 L 3 13 z"
      />
    </svg>
  );
};

export default Download;
