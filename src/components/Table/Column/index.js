import React from "react";
import * as S from "./styles";
const Column = ({ size, children, align }) => {
  return (
    <S.Col size={size} align={align}>
      {children}
    </S.Col>
  );
};

export default Column;
