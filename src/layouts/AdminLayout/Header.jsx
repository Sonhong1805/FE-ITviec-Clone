import styled from "styled-components";
import admin_logo from "/assets/svg/admin-logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={admin_logo} alt="admin-logo" />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: rgba(33, 37, 41, 1);
  padding: 1rem;
  border-bottom: 1px solid #ffffff1a;

  img {
    width: 12rem;
    height: 3rem;
    object-fit: contain;
  }
`;
