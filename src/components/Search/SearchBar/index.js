import { Input } from "components/Form";
import * as S from "./styles";
const SearchBar = ({ handlerFilterText }) => {
  return (
    <S.SearchBar>
      <Input
        type="type"
        name="filter"
        id="inputFilter"
        onChange={(e) => handlerFilterText(e.target.value)}
        placeholder="Pesquisar..."
      />
    </S.SearchBar>
  );
};

export default SearchBar;
