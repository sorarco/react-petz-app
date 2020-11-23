import React from "react";
import * as S from "./styles";
import { Column, Grid, Row } from "components/Table";
const FormGroup = ({ children }) => {
  const [Label, Input] = children;
  return (
    <S.Form>
      <S.Div>{Label}</S.Div>
      <S.Div>{Input}</S.Div>
    </S.Form>
  );
};

export default FormGroup;
