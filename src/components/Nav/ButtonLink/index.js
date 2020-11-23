import Link from "next/link";
import * as S from "./styles";
const ButtonLink = ({ children, href, onClick }) => {
  return (
    <Link href={href} passHref>
      <S.ButtonLink onClick={onClick}>{children}</S.ButtonLink>
    </Link>
  );
};

export default ButtonLink;
