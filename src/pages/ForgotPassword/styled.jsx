import styled from "styled-components";

export const ResetWrapper = styled.div`
  padding-top: 9.5rem;
  padding-inline: 3rem;
`;

export const UserReset = styled.div`
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

export const ResetContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(40%, 400px) 1fr;
  grid-column-gap: 10%;
`;

export const ResetMain = styled.main`
  h1 {
    font-size: 2.8rem;
    color: var(--black);
    line-height: 4.2rem;
    margin-bottom: 2.4rem;
  }
`;

export const ResetGroup = styled.div`
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

export const ResetPasswordInput = styled.div`
  position: relative;
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

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.1rem 2.4rem;
  min-width: 18rem;
  border-radius: 0.4rem;
  color: var(--white);
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
  display: flex;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 4.8rem;

  p {
    padding-inline: 0.4rem;
  }
`;

export const ResetAside = styled.aside`
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
