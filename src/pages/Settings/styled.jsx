import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2.4rem 3.2rem 2.4rem",
    border: "none",
    borderRadius: ".7rem",
    maxWidth: "60rem",
    width: "100%",
  },
};

export const SettingsWrapper = styled.div`
  padding-top: 9.5rem;
  padding-inline: 3rem;
  background: var(--light-grey);
`;

export const SettingsContainer = styled.div`
  max-width: 88.4rem;
  margin: 0 auto;
  padding-top: 2.4rem;
  padding-bottom: 4.8rem;
`;

export const SettingsContent = styled.div`
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 0.8rem;
  background: var(--white);

  h2 {
    font-size: 2.2rem;
    line-height: 3.3rem;
  }

  hr {
    height: 2px;
    margin-block: 1.6rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }

  .row {
    display: flex;
    margin-block: 2.4rem;
    align-items: baseline;
  }
`;

export const GeneralInfomation = styled.div`
  .title,
  .info {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    color: var(--black);
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;

    &.info-circle {
      color: rgb(163, 163, 163);
    }
    &.info-edit {
      color: var(--red);
      cursor: pointer;
    }
  }

  input {
    font-size: 1.6rem;
    height: 4.4rem;
    width: 100%;
    font-weight: 400;
    color: var(--black);
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid var(--silver-grey);
    padding: 1.6rem;
    border-radius: 0.4rem;
    appearance: none;
  }

  .button-group {
    text-align: end;
    margin-top: 1.6rem;

    button {
      font-size: 1.5rem;
      line-height: 1.8rem;
      padding: 0.8rem 2.5rem;
      margin-left: 2rem;
      min-width: 8.5rem;
      border: 0;
      border-radius: 0.4rem;
      border: 1px solid transparent;

      &.save {
        background-color: var(--red);
        border: 1px solid var(--red);
        color: var(--white);
      }

      &.cancel {
        background-color: var(--white);
        border: 1px solid #4e4c4d;
        color: #4e4c4d;
      }
    }
  }

  .tooltip {
    position: relative;

    .tooltip-inner {
      position: absolute;
      font-size: 14px;
      color: #fff;
      padding: 8px 12px !important;
      background-color: #000;
      text-align: center;
      border-radius: 0.4rem;
      max-width: 20rem;
      width: max-content;
      top: -60px;
      left: -93px;
      display: block;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s;

      &::after {
        position: absolute;
        content: "";
        border-color: transparent;
        border-style: solid;
        border-width: 0.64rem 0.64rem 0;
        border-top-color: #000;
        width: 0px;
        height: 0px;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:hover .tooltip-inner {
      opacity: 1;
      visibility: visible;
      display: block;
    }
  }
`;

export const ChangePassword = styled.div`
  .form-group {
    margin-bottom: 1.6rem;

    input {
      font-size: 1.6rem;
      height: 5.6rem;
      width: 100%;
      font-weight: 400;
      color: var(--black);
      background-color: var(--white);
      background-clip: padding-box;
      border: 1px solid var(--silver-grey);
      padding: 1.6rem;
      border-radius: 0.4rem;
      appearance: none;

      &.error {
        border: 1px solid var(--error-color);
        box-shadow: 0 0 0 0.25rem rgba(246, 13, 0, 0.25);
      }
    }

    .error {
      color: var(--error-color);
      font-size: 1.4rem;
      margin-top: 0.4rem;
    }
  }

  .button-group {
    text-align: center;

    button {
      font-size: 1.6rem;
      font-weight: 600;
      padding: 1.1rem 2.4rem;
      min-width: 18rem;
      border-radius: 0.4rem;
      color: var(--white);
      background-color: var(--red);
      border-color: var(--red);
    }
  }
`;

export const SettingsDelete = styled.div`
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 0.8rem;
  background: var(--white);
  margin-top: 2.4rem;

  h2 {
    font-size: 2.2rem;
    line-height: 3.3rem;
  }

  hr {
    height: 2px;
    margin-block: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    padding-top: 0.8rem;
  }

  button {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    color: var(--red);
    background-color: var(--white);
    border: 1px solid var(--red);
    margin-top: 2.4rem;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--rich-grey);

  h2 {
    font-size: 2.2rem;
  }

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--menu-link);
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3rem;
    color: var(--border-tag);
    padding-block: 1.2rem;
  }

  h4 {
    color: var(--error-color);
    font-size: 1.6rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  padding-top: 3.2rem;
  justify-content: end;
  gap: 1.6rem;

  button {
    font-size: 1.6rem;

    padding: 1.1rem 2.4rem;
    border-radius: 0.4rem;
    background-color: var(--white);

    &.cancel {
      color: var(--black);
      font-weight: 500;

      &:hover {
        background-color: var(--light-grey);
      }
    }

    &.delete {
      font-weight: 600;
      color: var(--white);
      background-color: var(--red);
      &:hover {
        background-color: var(--dark-red);
      }
    }
  }
`;
