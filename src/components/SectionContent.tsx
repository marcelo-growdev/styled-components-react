import React from "react";
import SectionStyled from "./SectionStyled";

interface SectionContentPros {
  title: string;
  content: string;
  colocaBackgroud?: boolean;
}

const SectionContent: React.FC<SectionContentPros> = ({
  title,
  content,
  colocaBackgroud,
}) => {
  return (
    <SectionStyled useBackgroud={colocaBackgroud}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <p>{content}</p>
    </SectionStyled>
  );
};

export default SectionContent;
