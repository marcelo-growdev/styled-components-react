import React from "react";
import styled from "styled-components";

interface AppBarPros {
  dark: boolean;
}

const AppBar = styled.div<AppBarPros>`
  height: 80px;
  background-color: ${({ dark }) => (dark ? "black" : "#0084ff")};
  color: ${({ dark }) => (dark ? "white" : "white")};
`;

interface HeaderPros {
  menu: Array<string>;
}

const Hedaer: React.FC<HeaderPros> = ({ menu }) => {
  return <AppBar dark={false}>{menu[0]}</AppBar>;
};

export default Hedaer;
