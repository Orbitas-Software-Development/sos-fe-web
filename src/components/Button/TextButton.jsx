import React from "react";

export default function TextButton({
  bgColor = "bg-black",
  hoverBgColor = "hover:bg-gray-900",
  text,
  textColor = "text-white",
  hoverTextColor = "hover:text-[#C2AE4A]",
  textSize = "text-lg",
  type = "button",
  width = "w-[300px]",
  otherProperties = "",
  onClick = () => alert("onClick"),
  onChange = () => alert("No onChange"),
  disabled = false,
}) {
  return (
    <button
      className={`${otherProperties} ${bgColor} ${hoverBgColor}  ${textSize}  ${textColor} ${hoverTextColor} ${width} shadow-md  rounded-sm w-full py-2 px-3  `}
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
