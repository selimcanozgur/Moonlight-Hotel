import Header from "./Header";
import Siderbar from "./Siderbar";
import styled from "styled-components";

import { Outlet } from "react-router-dom";

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppLayout = () => {
  return (
    <GridTemplate>
      <Header />
      <Siderbar />
      <Main className="bg-slate-100">
        <Container>
          <Outlet />
        </Container>
      </Main>
    </GridTemplate>
  );
};

export default AppLayout;
