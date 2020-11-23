import styled from "styled-components";
export const Col = styled.div`
  color: ${({ theme }) => theme.text.light};
  padding: 10px;
  flex: ${(props) => props.size};
  display: flex;
  align-items: center;
  ${(props) =>
    props.align &&
    props.align === "end" &&
    `
    justify-content: flex-end;
    `}
`;
