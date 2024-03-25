import React from "react";
import styled, { keyframes } from "styled-components";
import { lighten, darken } from "polished";

const primary = "DeepPink";
const secondary = "Lightgreen";
const third = "Orange";

const TopBar = ({ children }) => (
  <Div>
    <h1>{children}</h1>
    <Button>Click Me</Button>
    <Btn bg={secondary}>Click Me</Btn>
    <Button bg={primary}>Click Me</Button>
    <Btn bg={third}>Click Me</Btn>
    <img className="logo" src="icons/logo.svg" alt="logo" />
  </Div>
);
export default TopBar;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    color: papayawhip;
  }

  img.logo {
    height: 5rem;
    animation: ${spin} 2s linear infinite;
  }
`;

const Button = styled.button`
  outline-style: none;
  border-style: none;
  /* background: ${(props) => (props.bg ? props.bg : "skyblue")}; */
  /* background: ${(props) => props.bg || "skyblue"}; */
  background: ${({ bg }) => bg || "skyblue"};
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;

  &:hover {
    background: ${({ bg }) => lighten(0.1, bg || "skyblue")};
  }
  &:active {
    background: ${({ bg }) => darken(0.1, bg || "skyblue")};
  }
`;

const Btn = styled(Button)`
  border-radius: 0;
  border: white 1px solid;
`;
