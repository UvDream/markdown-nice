import React from "react";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    width="18"
    height="18"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 12H12M16 12H12M12 12V8M12 12V16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
