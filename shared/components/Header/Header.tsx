import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>CHIMHA</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 4rem;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-weight: 900;
  font-size: 1.8rem; ;
`;
