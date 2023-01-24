import styled from "styled-components";
import Header from "./Header";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Section>
        <h5>
          <a href="w"> Hiring in a hurry? -</a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep Business moving
        </p>
      </Section>

      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 53px;
  max-width: 100%;
`;

const Section = styled.div`
  min-width: 56px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  text-decoration: underline;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 4fr) minmax(0, 7fr) minmax(300px, 5fr);
  column-gap: 25px;
  row-gap: 25px;
  ${"" /* grid-template-row: auto; */}
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
