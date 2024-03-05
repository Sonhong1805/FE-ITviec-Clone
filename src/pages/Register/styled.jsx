import styled from "styled-components";

export const RegisterWrapper = styled.div`
  padding-top: 9.5rem;
  padding-inline: 3rem;
`;

export const UserRegister = styled.div`
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

export const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(40%, 400px) 1fr;
  grid-column-gap: 10%;
`;

export const RegisterMain = styled.main`
  h1 {
    font-size: 2.8rem;
    color: var(--black);
    line-height: 4.2rem;
  }

  .register-google {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    color: var(--menu-link);
    border: 1px solid var(--menu-link);
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
    background: var(--white);

    &.active {
      color: var(--red);
      border: 1px solid var(--red);
    }

    img {
      width: 3rem;
      height: 3rem;
    }

    &.active:hover {
      background: var(--white-red);
    }
  }

  .register-separator {
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

export const RegisterAgreement = styled.label`
  font-size: 1.6rem;
  color: var(--rich-grey);
  padding-block: 1.6rem;
  z-index: 0;
  position: relative;
  display: inline-block;
  cursor: pointer;

  input {
    width: 4.8rem;
    height: 4.8rem;
    z-index: -1;
    position: absolute;
    left: -1.2rem;
    top: -1.2rem;
    display: block;
    margin: 0;
    border-radius: 50%;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s;
  }

  &:hover input {
    top: 0.4rem;
    background-color: var(--dark-grey);
    opacity: 0.2;
  }

  &:hover input:checked {
    background-color: var(--red);
    opacity: 0.1;
  }

  input:checked + span::before {
    background-color: var(--red);
    border: 2px solid var(--red);
  }

  & > span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 0px 0.8rem 0px 0px;
    border: 2px solid #a6a6a6;
    border-radius: 4px;
    width: 2.4rem;
    height: 2.4rem;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  & > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 1.8rem;
    left: 0.3rem;
    width: 1.2rem;
    height: 0.6rem;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  input:checked + span::after {
    border-color: var(--white);
  }

  &:hover > span::before {
    border-color: var(--rich-grey);
  }

  .register-rules {
    color: var(--hyperlink);
  }
`;

export const RegisterGroup = styled.div`
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

export const RegisterPasswordInput = styled.div`
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

export const RegisterButton = styled.button`
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
  background: var(--menu-link);
  margin-bottom: 1.6rem;

  &.active {
    background: var(--red);
  }

  &.active:hover {
    background: var(--dark-red);
  }
`;

export const AlreadyAccount = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;

  a {
    color: var(--hyperlink);
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

export const RegisterAside = styled.aside`
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
