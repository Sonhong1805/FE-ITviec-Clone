import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background: linear-gradient(269.85deg, var(--brown) 0%, var(--black) 54.89%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`;

export const HeaderContainer = styled.div`
  max-width: 186rem;
  margin: auto;
  padding-inline: 3rem;
  display: flex;
  align-items: center;
  height: 8.8rem;
  border-bottom: 1px solid #ffffff1a;
`;

export const HeaderNavbar = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  margin-right: 3.2rem;

  img {
    width: 10.8rem;
    height: 4rem;
  }
`;

export const MenuLink = styled(Link)`
  color: var(--menu-link);
  display: flex;
  align-items: center;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

export const HeaderListItem = styled.li`
  color: var(--white);
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-block: 2.8rem;
  position: relative;

  a {
    padding-inline: 0.8rem;
    font-size: 1.6rem;
    transition: all 0.2s;
  }

  &:hover a {
    color: var(--white);
  }

  &:hover .submenu {
    display: block;
  }

  .arrow {
    color: var(--dark-grey);
  }

  &:hover .arrow {
    color: var(--white);
  }
`;

export const HeaderLanguage = styled.li`
  display: flex;
  align-items: center;

  .reparate {
    background: var(--white);
    margin-inline: 0.8rem;
    width: 1px;
    height: 1.6rem;
  }

  label {
    color: var(--dark-grey);
    cursor: pointer;
    font-size: 1.6rem;
    transition: all 0.2s;
  }
  input[name="language"] {
    display: none;

    &:checked + label {
      color: var(--white);
    }
  }
`;

export const HeaderAccount = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  .avatar {
    width: 3.2rem;
    height: 3.2rem;
  }

  span {
    margin-left: 1.2rem;
  }
`;

export const HeaderSubmenu = styled.ul`
  position: absolute;
  top: 100%;
  background: var(--black);
  display: none;

  &.active-0 {
    height: auto;
  }
  &.active-1 {
    height: 41.3rem;
  }

  &.active-2 {
    height: 36.64rem;
  }

  &.active-3 {
    height: 36.56rem;
  }

  &.active-5 {
    height: 22.9rem;
  }

  li {
    display: block;
    font-size: 1.4rem;
    line-height: 4.5rem;
    width: 25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1019607843);
    color: var(--menu-link);
    display: flex;
    align-items: center;
    padding-inline: 1.6rem;
    gap: 0.8rem;

    &.submenu-item {
      justify-content: space-between;

      &:hover ul.submenu-child {
        display: grid;
        border-left: 1px solid rgba(255, 255, 255, 0.1019607843);
      }

      &.active {
        background: var(--rich-grey);
        color: var(--white);

        ul.submenu-child {
          display: grid;

          &.skills {
            grid-template-columns: repeat(4, 1fr);

            li {
              width: 15.68rem;

              &:last-child {
                grid-column-start: 1;
                grid-column-end: 5;
                justify-content: center;
                width: 100%;
                border-top: 1px solid rgba(255, 255, 255, 0.1019607843);
              }
            }
          }

          &.companies {
            li:last-child {
              grid-column-start: 1;
              grid-column-end: 4;
              justify-content: center;
              width: 100%;
              border-top: 1px solid rgba(255, 255, 255, 0.1019607843);
            }
          }

          &.ranks,
          &.companies {
            grid-template-columns: repeat(3, 1fr);

            li {
              width: 21.04rem;
            }
          }

          &.cities {
            grid-template-columns: 1fr;

            li {
              width: 63.92rem;
            }
          }
        }

        &:hover ul.submenu-child {
          display: grid;
        }
      }
    }

    ul.submenu-child {
      position: absolute;
      top: 0;
      left: 100%;
      display: none;
      background: var(--black);

      li {
        border-bottom: 1px solid transparent;
        padding-right: 0;
        padding-left: 1.2rem;
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      background: var(--rich-grey);
      color: var(--white);
    }
  }
`;
