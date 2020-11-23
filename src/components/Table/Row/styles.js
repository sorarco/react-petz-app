import styled from "styled-components";
export const Row = styled.div`
  display: flex;
  ${(props) =>
    props.footer &&
    `
      background:#eee;
      color: black;
    `}
  ${(props) =>
    props.head &&
    `
      background:#ddd;
      color: black;
    `}
    ${(props) =>
    props.border &&
    `
      border-bottom: 1px solid #eee;
      `}
`;
