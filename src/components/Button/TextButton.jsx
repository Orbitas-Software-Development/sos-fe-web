import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  icon,
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
      <FontAwesomeIcon icon={icon} className="ml-2" size="lg" />
    </button>
  );
}
