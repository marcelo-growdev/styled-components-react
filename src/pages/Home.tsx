import React from "react";
import Footer from "../components/Footer";
import Hedaer from "../components/Header";
import SectionContent from "../components/SectionContent";
import Wrapper from "../components/WrapperStyled";

const Home: React.FC = () => {
  const content = `
    Aqui vai o meu contúdo da minha DIV do meu componente.
  `;

  return (
    <>
      <Hedaer menu={["Home", "Contato", "Sobre"]} />
      <Wrapper>
        <SectionContent
          title="Meu título"
          content={content}
          colocaBackgroud={true}
        />
        <SectionContent title="Segundo título" content={content} />
      </Wrapper>
      <Wrapper>
        <SectionContent title="Meu título" content={content} />
        <SectionContent
          colocaBackgroud={true}
          title="Segundo título"
          content={content}
        />
      </Wrapper>
      <Footer text="Desenvolvido por Laura e Gessner" />
    </>
  );
};

export default Home;
