import styled from "styled-components";

export const EmployerWrapper = styled.div`
  padding-top: 9.5rem;
  padding-inline: 3rem;
`;

export const EmployerWelcome = styled.div`
  max-width: 134rem;
  margin: 0 auto 10rem;

  h3 {
    margin-block: 2.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      font-size: 2rem;
      color: var(--rich-grey);
    }

    img {
      width: 8rem;
      height: 3rem;
    }
  }
`;

export const EmployerContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(40%, 400px) 1fr;
  grid-column-gap: 10%;
`;

export const EmployerMain = styled.main`
  h1 {
    font-size: 2.8rem;
    color: var(--black);
    line-height: 4.2rem;
  }

  .employer-message {
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
    color: var(--rich-grey);
    margin-bottom: 2.4rem;
    margin-top: 1.6rem;
  }

  .employer-rules {
    color: var(--cyan);
  }
`;

export const EmployerGroup = styled.div`
  font-size: 1.4rem;
  color: var(--black);
  margin-bottom: 1.6rem;

  label {
    display: block;
    margin-bottom: 0.4rem;
    line-height: 2.1rem;
  }

  abbr {
    color: rgb(var(--i-danger-rgb));
    padding-inline: 0.4rem;
  }

  input {
    border: 1px solid var(--silver-grey);
    width: 100%;
    padding: 1.1rem 1.6rem;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    font-weight: 400;

    &.active {
      border: 1px solid var(--red);
      background: var(--input-control);
      box-shadow: 0 0 0 0.25rem rgba(246, 13, 0, 0.25);
    }
  }
`;

export const EmployerPasswordLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: var(--black);
  margin-bottom: 0.4rem;

  label {
    display: block;
    margin-bottom: 0.4rem;
    line-height: 2.1rem;
  }

  abbr {
    color: rgb(var(--i-danger-rgb));
    padding-inline: 0.4rem;
  }

  a {
    color: var(--cyan);
    font-size: 1.6rem;
  }
`;

export const EmployerPasswordInput = styled.div`
  margin-bottom: 1.6rem;

  .password-group {
    position: relative;
  }

  input {
    border: 1px solid var(--silver-grey);
    width: 100%;
    padding: 1.1rem 1.6rem;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    font-weight: 400;

    &.active {
      border: 1px solid var(--red);
      background: var(--input-control);
      box-shadow: 0 0 0 0.25rem rgba(246, 13, 0, 0.25);
    }
  }

  svg {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const EmployerRemember = styled.div`
  font-size: 1.4rem;
  color: var(--black);
  margin-bottom: 1.6rem;
  display: flex;
  gap: 0.8rem;

  input {
    width: 2rem;
    height: 2rem;
  }
`;

export const EmployerButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.1rem 2.4rem;
  min-width: 18rem;
  border-radius: 0.4rem;
  color: var(--white);
  border: 1px solid var(--red);
  width: 100%;
  justify-content: center;
  gap: 0.8rem;
  background: var(--red);
  margin-bottom: 1.6rem;

  &:hover {
    background: var(--dark-red);
  }
`;

export const NoteAccount = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 4.8rem;

  div {
    display: flex;
    margin-bottom: 0.6rem;
  }

  p {
    padding-inline: 0.4rem;
    opacity: 0.5;
  }
`;

export const EmployerAside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32rem;
    height: 31rem;
  }
`;

export const AuthenticationError = styled.div`
  font-size: 1.4rem;
  margin-top: 0.4rem;
  color: var(--error-color);
`;
