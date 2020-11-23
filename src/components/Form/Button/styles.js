import styled from "styled-components";
export const Button = styled.button`
  ${(props) =>
    props.type && props.type === "primary"
      ? `
      background-color: ${props.theme.colors.primary};
      border: 1px solid ${props.theme.colors.primary};
      display: inline-block;
      cursor: pointer;
      color: #FFF;
      font-family: Arial;
      font-size: 13px;
      font-weight: bold;
      padding: 6px 12px;
      text-decoration: none;
      margin: 0 5px;`
      : `box-shadow: inset 0px 1px 0px 0px #ffffff;
        background-color: #ffffff;
        border: 1px solid #dcdcdc;
        display: inline-block;
        cursor: pointer;
        color: #666666;
        font-family: Arial;
        font-size: 13px;
        font-weight: bold;
        padding: 6px 12px;
        text-decoration: none;
        margin: 0 5px;
        &:hover {
          background-color: #f6f6f6;
        }`}

  ${(props) =>
    props.disabled &&
    `
    color: #ccc;
    cursor: not-allowed;
    pointer-events: none;
    `}
`;
