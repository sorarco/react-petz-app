import React from "react";
import Link from "next/link";
import * as S from "./styles";
const NavLink = ({ children, href, theme }) => {
  return (
    <Link href={href} passHref>
      <S.NavLink theme={theme}>{children}</S.NavLink>
    </Link>
  );
};

export default NavLink;
