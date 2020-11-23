import React from "react";
import * as S from "./styles";
const Row = ({ size, children, head, footer, border }) => {
  return (
    <S.Row size={size} head={head} footer={footer} border={border}>
      {children}
    </S.Row>
  );
};

export default Row;
