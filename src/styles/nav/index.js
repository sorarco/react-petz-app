import styled from "styled-components";
export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 8px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 980px;

    margin: auto;
  }
`;

export const Nav = styled.nav`
  ul {
    dipsplay: flex;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 2.4rem;
    transition: all 250ms linear 0s;
  }
  ul li a:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
