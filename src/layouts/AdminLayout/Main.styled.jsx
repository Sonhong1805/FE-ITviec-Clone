import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Navbar = styled.nav`
  background: #212529;
  color: var(--white);
  transition: all 0.5s;

  .close-menu {
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    gap: 1.2rem;
    padding-left: 1rem;
    justify-content: space-between;
    margin-top: 1.2rem;
    padding-right: 1rem;
    margin-bottom: 2.4rem;
  }

  ul {
    position: sticky;
    top: 1.2rem;

    a,
    & .log-out {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      gap: 1.2rem;
      padding: 1.2rem 1rem;
      color: var(--menu-link);
      position: relative;

      &.active {
        background-color: rgb(255 255 255 / 15%);
        color: var(--white);
      }

      &:hover {
        background-color: rgb(255 255 255 / 15%);
        color: var(--white);
        cursor: pointer;
      }

      span {
        transition: opacity 0.3s ease, visibility 0.3s ease, width 0.3s ease,
          display 0.3s ease;
      }
    }

    svg {
      width: 3.2rem;
      height: 3.2rem;
      cursor: pointer;
    }
  }

  &.show {
    min-width: auto;
  }

  &.off {
    min-width: 0rem;

    span {
      opacity: 0;
      visibility: hidden;
      width: 0;
      display: none;
    }
  }
`;

export const MainContent = styled.main`
  background-color: var(--light-grey);
  min-height: 100vh;
  flex: 1;
`;
