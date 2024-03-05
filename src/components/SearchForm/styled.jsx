import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  min-height: 5.6rem;
`;

export const Select = styled.div`
  background-color: var(--white);
  border-radius: 4px;
  padding: 0.6rem 1.6rem;
  display: flex;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--silver-grey);

  &.select-active {
    box-shadow: 0px 0px 2px 2px #ffdfdf;
    z-index: 1001;
  }
`;

export const SelectPane = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    min-width: 15rem;
    font-size: 1.8rem;
    color: var(--black);
  }

  svg {
    color: var(--menu-link);
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  background-color: var(--white);
  left: 0;
  right: 0;
  top: 6.3rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  padding-block: 5px;
  border-radius: 4px;
  z-index: 1001;
`;

export const OptionTitle = styled.div`
  font-size: 1.2rem;
  color: #777;
  padding-left: 0.8rem;
  padding-top: 0.5rem;
`;

export const OptionItem = styled.li`
  display: block;
  font-size: 1.6rem;
  padding: 0.3rem 1.2rem;
  line-height: 2.4rem;
  cursor: pointer;

  &:hover {
    background-color: #fff5f5;
  }
`;

export const SearchBox = styled.div`
  flex: 1;
  display: flex;
`;

export const SearchKeyword = styled.div`
  flex: 1;
  margin-inline: 1.2rem;
  position: relative;
  border-radius: 4px;

  &.focus {
    z-index: 1001;
  }

  &.unfocus {
    z-index: 998;
  }

  .search-wrapper {
    position: relative;
    height: 100%;
  }

  input {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    padding: 1.1rem 4rem 1.1rem 1.6rem;
    font-size: 1.8rem;
    border: 1px solid var(--silver-grey);

    &:focus {
      box-shadow: 0px 0px 2px 2px #ffdfdf;
    }
  }

  svg {
    display: none;
    position: absolute;
    top: 1.8rem;
    right: 1rem;
    color: var(--menu-link);
    cursor: pointer;

    &.show {
      display: block;
    }
  }
`;

export const SearchButton = styled.button`
  width: 24rem;
  background-color: var(--red);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: var(--white);
  font-size: 1.8rem;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--button-active);
  }
`;

export const Overlay = styled.div`
  &.select-active {
    height: 100vh;
    width: 100vw;
    position: fixed;
    inset: 0;
    opacity: 0.6;
    background-color: var(--black);
    transform: translate3d(0, 0, 0);
    z-index: 1000;
  }
`;
