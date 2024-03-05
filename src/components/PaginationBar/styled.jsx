import styled from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3.6rem;
  padding-bottom: 6.4rem;
`;

export const PageItem = styled.li`
  font-size: 1.6rem;
  color: var(--black);
  min-width: 3.6rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 0.4rem;
  border: 1px solid var(--silver-grey);
  padding: 0 0.4rem;
  cursor: pointer;

  &.active {
    color: var(--white);
    background-color: var(--red);
  }

  &.dot {
    border: none;
    user-select: none;
    cursor: text;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
