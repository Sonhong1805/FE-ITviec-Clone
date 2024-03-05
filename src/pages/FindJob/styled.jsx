import styled from "styled-components";

export const FindWrapper = styled.div`
  padding-top: calc(8.5rem + 6.9rem);
  max-width: 134rem;
  margin: auto;

  h1 {
    display: block;
    font-size: 2.4rem;
    border-bottom: 1px solid #dedede;
    padding-bottom: 1.6rem;
    margin-top: 2.1rem;
  }

  ul {
    list-style: none;
    font-size: 1.4rem;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 3.2rem 0 1.4rem;
    grid-column-gap: 1rem;

    li {
      padding: 0.5rem 0;
      color: #121212;

      a {
        font-size: 1.6rem;
        font-weight: 400;
      }
    }
  }
`;
