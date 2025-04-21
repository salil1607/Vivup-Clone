import React from "react";
import { FaUser } from "react-icons/fa";

interface Props {
  source: string;
  alt: string;
  imgStyle?: React.CSSProperties | undefined;
  text: string;
  containerStyle?: React.CSSProperties | undefined;
  textStyle?: React.CSSProperties | undefined;
}
const TextIcon = ({
  text,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <div className="container" style={containerStyle}>
      <FaUser  size={20} color="black"/>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default TextIcon;
