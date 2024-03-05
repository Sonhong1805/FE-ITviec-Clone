import styled from "styled-components";

export const AuthenticationWrapper = styled.div`
  padding-top: 9.5rem;
  padding-inline: 3rem;
`;

export const UserAuthentication = styled.div`
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

export const AuthenticationContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(40%, 400px) 1fr;
  grid-column-gap: 10%;
`;

export const AuthenticationMain = styled.main`
  .authentication-message {
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
    color: var(--rich-grey);

    .authentication-rules {
      color: var(--hyperlink);
    }
  }

  .authentication-google {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    color: var(--red);
    border: 1px solid var(--red);
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
    background: var(--white);

    img {
      width: 3rem;
      height: 3rem;
    }

    &:hover {
      background: var(--white-red);
    }
  }

  .authentication-separator {
    padding-block: 1.6rem;
    text-align: center;
    position: relative;

    span {
      font-size: 1.4rem;
      padding-inline: 0.8rem;
      background: var(--white);
      position: relative;
    }

    &::before {
      content: "";
      position: absolute;
      border-top: 1px solid var(--silver-grey);
      width: 100%;
      left: 0;
      top: 50%;
    }
  }
`;

export const AuthenticationEmailGroup = styled.div`
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

export const AuthenticationPasswordGroup = styled.div``;

export const AuthenticationPasswordLabel = styled.div`
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
    color: var(--hyperlink);
    font-size: 1.6rem;
  }
`;

export const AuthenticationPasswordInput = styled.div`
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

export const AuthenticationLogin = styled.button`
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

export const AuthenticationRegister = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;

  a {
    color: var(--hyperlink);
  }
`;

export const AuthenticationFeature = styled.aside`
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.6rem;
    color: var(--black);
  }
`;

export const AuthenticationFeatureList = styled.ul`
  margin-bottom: 1.6rem;
`;

export const AuthenticationFeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  gap: 0.4rem;
  padding-bottom: 1.6rem;

  svg {
    color: var(--success-color);
  }
`;

export const AuthenticationError = styled.div`
  font-size: 1.4rem;
  margin-top: 0.4rem;
  color: var(--error-color);
`;
