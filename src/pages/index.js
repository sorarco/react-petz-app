import Head from "next/head";
import FilterTable from "components/FilterTable";
import * as SNav from "styles/nav";
import * as SHome from "styles/pages/Home";
function HomePage({ posts }) {
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
                <a href="https://github.com/sorarco/react-petz-app">GitHub</a>
              </li>
            </ul>
          </SNav.Nav>
        </div>
      </SNav.Header>
      <SHome.Main>
        <FilterTable data={posts} filterBy="title" />
      </SHome.Main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return { props: { posts } };
}

export default HomePage;
