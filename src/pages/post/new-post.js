import { useEffect, useState, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "react-simple-snackbar";
import { ThemeContext } from "styled-components";
import Head from "next/head";
import * as SNav from "styles/nav";
import * as SNewPost from "styles/pages/NewPost";
import { ButtonLink } from "components/Nav";
import { Column, Grid, Row } from "components/Table";
import { FormGroup, Input, Button } from "components/Form";
import { Label } from "components/Form/Label/styles";
import { POST_CREATE_MESSAGE } from "messages/posts";
function NewPost(props) {
  const themeContext = useContext(ThemeContext);
  const [openSnackbar] = useSnackbar({
    position: "top-center",
    style: themeContext.snackOpt,
  });
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("title");
  const [body, setBody] = useState("body");
  const router = useRouter();
  const create = async () => {
    try {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setLoading(false);
      openSnackbar(POST_CREATE_MESSAGE);
      router.back();
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <Head>
        <title>React Petz App</title>
      </Head>

      <SNav.Header>
        <div>
          <img src="/assets/images/logo.png" alt="my image" width="100" />
          <SNav.Nav>
            <ul>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </SNav.Nav>
        </div>
      </SNav.Header>
      <SNewPost.Main>
        <Grid>
          <Row>
            <Column size={10}>
              <FormGroup>
                <Label>Título</Label>
                <Input
                  type="text"
                  name="filter"
                  id="inputFilter"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="título"
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column size={10}>
              <FormGroup>
                <Label>Descrição</Label>
                <Input
                  type="text"
                  name="filter"
                  id="inputFilter"
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="descrição"
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column size={1} align="end">
              <ButtonLink href="/">cancelar</ButtonLink>
              <Button
                onClick={false}
                disabled={loading}
                type="primary"
                onClick={create}
              >
                criar
              </Button>
            </Column>
          </Row>
        </Grid>
      </SNewPost.Main>
    </div>
  );
}

export default NewPost;
