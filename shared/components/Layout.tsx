import styled from "@emotion/styled";

import Header from "./Header/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainWrap>
        <Header />
        {children}
      </MainWrap>
    </>
  );
}

const MainWrap = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0 2.4rem;
  width: min(768px, 100%);
  min-height: 100vh;
`;

export default Layout;
