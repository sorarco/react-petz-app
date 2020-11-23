import styled from "styled-components";

const Title = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

function HomePage({ data }) {
  return (
    <div>
      <img src="/assets/images/logo.png" alt="my image" width="100" />
      <p>Welcome to Next.js!</p>
    </div>
  );
}

export async function getServerSideProps() {
  const data = [];

  return { props: { data } };
}

export default HomePage;
