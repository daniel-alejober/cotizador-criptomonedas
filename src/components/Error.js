import React from "react";
import styled from "@emotion/styled";

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 0.5rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 1px;
`;

const Error = ({ msg }) => {
  return <MensajeError>{msg}</MensajeError>;
};

export default Error;
