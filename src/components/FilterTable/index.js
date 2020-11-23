import React, { useState, useMemo, useContext } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { ThemeContext } from "styled-components";
import { Column, Grid, Row } from "components/Table";
import { SearchBar } from "components/Search";
import { NavLink, ButtonLink } from "components/Nav";
import { Button } from "components/Form";
import { POST_DESTROY_MESSAGE } from "messages/posts";
const FilterTable = ({ data, filterBy }) => {
  const themeContext = useContext(ThemeContext);
  const [openSnackbar] = useSnackbar({
    position: "top-center",
    style: themeContext.snackOpt,
  });
  const [dataLocal, setdDataLocal] = useState(data);
  const [filterText, setFilterText] = useState("");
  const [id, setId] = useState(-1);
  const [cursor, setCursor] = useState(1);
  const [limit, setLimit] = useState(10);

  const filter = () => {
    return useMemo(
      () =>
        dataLocal.filter((item) =>
          item[filterBy].toLowerCase().includes(filterText)
        ),
      [filterText, id]
    );
  };

  const next = (e) => {
    e.preventDefault();
    let cursorNext = cursor + 1;
    setCursor(cursorNext);
  };

  const previous = (e) => {
    e.preventDefault();
    let cursorNext = cursor - 1;
    setCursor(cursorNext);
  };

  const destroy = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      const index = dataLocal
        .map(function (post) {
          return post.id;
        })
        .indexOf(id);

      const _dl = dataLocal.splice(index, 1);
      console.log("_dl ", _dl.length);
      console.log("dataLocal ", dataLocal.length);
      setdDataLocal(dataLocal);
      setId(id);
      openSnackbar(POST_DESTROY_MESSAGE);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const renderFilter = () => {
    let filtered = filter();
    let total = filtered.length;
    let pageNumber = cursor * limit;
    let skip = cursor > 1 ? pageNumber - limit : 0;
    filtered = filterText ? filtered : filtered.slice(skip, pageNumber);
    let pageNumberPaging = filterText ? total : pageNumber;
    return (
      <>
        {filtered.map((item, key) => (
          <Row key={key} border={true}>
            <Column size={3}>{item.title}</Column>
            <Column size={5}>{item.body}</Column>
            <Column size={0.5}>
              <NavLink href={`/post/${item.id}`}>editar</NavLink>
            </Column>
            <Column size={0.5}>
              <ButtonLink href="#" onClick={() => destroy(item.id)}>
                remover
              </ButtonLink>
            </Column>
          </Row>
        ))}
        <Row footer>
          <Column size={1}>
            <Button onClick={previous} disabled={cursor === 1}>
              anterior
            </Button>
            <Button onClick={next} disabled={cursor * limit === total}>
              próximo
            </Button>
          </Column>
          <Column size={1} align="end">
            {pageNumberPaging} registro do total de {total} registros
          </Column>
        </Row>
      </>
    );
  };

  return (
    <Grid>
      <Row>
        <Column size={1}>
          <SearchBar handlerFilterText={setFilterText} />
        </Column>
        <Column size={1} align="end">
          <NavLink href="/post/new-post">novo post</NavLink>
        </Column>
      </Row>
      <Row head>
        <Column size={3}>Título</Column>
        <Column size={5}>Descrição</Column>
        <Column size={0.5}> </Column>
        <Column size={0.5}> </Column>
      </Row>
      {renderFilter()}
    </Grid>
  );
};

export default FilterTable;
