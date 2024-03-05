import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2.8rem;
  display: flex;
  gap: 1.6rem;
`;

export const SuggestTags = styled.div`
  font-size: 1.6rem;
  color: var(--footer-head);
`;

export const SuggestList = styled.ul`
  flex: 1;
  display: flex;
  gap: 1.2rem;

  li {
    a {
      font-size: 1.6rem;
      color: var(--footer-head);
      padding: 0.6rem 1.2rem;
      border: 1px solid var(--border-tag);
      background-color: var(--black);
      border-radius: 2rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--border-tag);
      }
    }
  }
`;
