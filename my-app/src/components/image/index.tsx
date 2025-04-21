import React from "react";
interface Props {
  source: string;
  alt: string;
  className?: string;
}
const Image = ({ source, alt, className }: Props) => {
  return <img src={source} alt={alt} className={className} />;
};

export default Image;
