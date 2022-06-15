import React from "react";
import FooterStyled from "./FooterStyled";

interface FooterPros {
  text: string;
}

const Footer: React.FC<FooterPros> = ({ text }) => {
  return <FooterStyled>{text}</FooterStyled>;
};

export default Footer;
