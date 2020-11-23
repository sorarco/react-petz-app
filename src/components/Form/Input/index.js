import * as S from "./styles";
const Input = ({ type, placeholder, name, id, onChange }) => {
  return (
    <S.Input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    ></S.Input>
  );
};

export default Input;
