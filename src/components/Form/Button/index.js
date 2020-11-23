import React from "react";
import * as S from "./styles";
const Button = ({ children, onClick, disabled, type }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} type={type}>
      {children}
    </S.Button>
  );
};

export default Button;
