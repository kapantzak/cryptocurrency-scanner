import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>Logo</div>
      <nan>Menu</nan>
    </HeaderWrapper>
  );
};

export default Header;
