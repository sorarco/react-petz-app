import styled from "styled-components";
export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  &:hover {
    font-weight: 900;
  }
`;
