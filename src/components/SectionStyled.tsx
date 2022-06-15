import styled from "styled-components";

interface SectionStyledPros {
  useBackgroud?: boolean;
}

const SectionStyled = styled.div<SectionStyledPros>`
  flex: 1;
  height: 400px;
  background-color: ${({ useBackgroud }) =>
    useBackgroud ? "#e0dada" : "#fff"};
  padding: 20px;
`;

export default SectionStyled;
