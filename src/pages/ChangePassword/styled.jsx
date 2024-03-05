import styled from "styled-components";

export const PasswordContainer = styled.div`
  padding: 2.4rem;
`;

export const PasswordHeading = styled.div`
  background: var(--white);
  display: flex;
  padding: 1.2rem 1.6rem;
  gap: 1.2rem;
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  margin-bottom: 1rem;
`;

export const PasswordContent = styled.div`
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  overflow: hidden;
  background: var(--white);
  padding: 2.4rem;

  form {
    width: 50%;

    button {
      width: 50%;
    }
  }
`;

export const ResetPasswordInput = styled.div`
  position: relative;
  margin-bottom: 1.6rem;

  .password-group {
    position: relative;
  }

  label {
    display: block;
    margin-bottom: 0.4rem;
    line-height: 2.1rem;
    font-size: 1.6rem;
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

export const AuthenticationError = styled.div`
  font-size: 1.4rem;
  margin-top: 0.4rem;
  color: var(--error-color);
`;
