import React from "react";
import styled from "styled-components";

const Botao = styled.button`
  width: 348px;
  height: 46px;
  left: 14px;
  top: 907px;
  background: #ff2351;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  text-align: center;
  cursor: pointer;
  color: #ffffff;
`;


function Button({etiqueta}) {
  return <Botao type="submit">{etiqueta}</Botao>;
}

export default Button;