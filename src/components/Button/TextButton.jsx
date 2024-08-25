import React from "react";

export default function TextButton({
  bgColor,
  text,
  textColor = "black",
  textSize = "text-lg",
  type = "button",
  width = "w-[300px]",
  onClick = () => alert("onClick"),
  onChange = () => alert("No onChange"),
  disabled = false,
}) {
  return (
    <button
      className={`${bgColor} ${textSize}  ${textColor} ${width} shadow appearance-none  rounded-sm w-full py-2 px-3 `}
      type={type}
      disabled={disabled}
      autoComplete="off"
      onChange={onChange}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
