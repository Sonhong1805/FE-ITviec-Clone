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
    padding: "0",
    border: "none",
    borderRadius: ".7rem",
    maxWidth: "60rem",
  },
};

export const CVPage = styled.div`
  background: var(--light-grey);
  position: relative;
  color: var(--black);
  height: 100vh;

  .bg-shape {
    clip-path: ellipse(85% 48% at 39% 23%);
    background: linear-gradient(
      269.85deg,
      var(--brown) 0%,
      var(--black) 54.89%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 51rem;
  }
`;
export const CVWrapper = styled.main`
  position: relative;
  max-width: 88.4rem;
  margin: auto;
`;

export const CVHeading = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;
  position: relative;

  .back {
    display: flex;
    color: var(--white);
    font-size: 1.6rem;
  }

  img {
    width: 8.1rem;
    height: 3.2rem;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CVContainer = styled.div`
  background: var(--white);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 0.8rem;
  padding: 3.2rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }
`;

export const CVForm = styled.form`
  .form-group {
    display: flex;
    position: relative;
    margin-bottom: 2.4rem;

    input {
      flex: 1;
      padding: 2.6rem 1.6rem 1rem;
      border: 1px solid var(--silver-grey);
      font-size: 1.6rem;
      font-weight: 400;
      border-radius: 0.8rem;
    }

    label {
      position: absolute;
      top: 0.5rem;
      left: 1.6rem;
      font-size: 1.4rem;
      color: var(--menu-link);
    }
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }
`;

export const CVFile = styled.div`
  background-color: var(--white);
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  padding: 1.6rem;
  display: flex;
  gap: 0.8rem;
  margin-top: 1.6rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--silver-grey);
    cursor: pointer;
  }

  &.active {
    background-color: var(--white-red);
    border: 1px solid var(--red);

    svg {
      color: var(--red);
    }
  }

  .upload-cv {
    font-size: 1.6rem;
    flex: 1;

    input {
      font-size: inherit;
      margin-top: 1.2rem;
    }

    .current-project {
      color: var(--hyperlink);
    }

    .file-error {
      color: var(--error-color);
    }

    p {
      font-size: 1.4rem;
      color: var(--dark-grey);
      margin-top: 0.4rem;
    }
  }
`;

export const CVLetter = styled.div`
  margin-block: 2.4rem;

  span,
  .characters {
    color: var(--dark-grey);
    font-size: 1.6rem;
    font-weight: 400;
  }

  .advantages {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  textarea {
    width: 100%;
    height: 12rem;
    border: 1px solid var(--silver-grey);
    border-radius: 0.4rem;
    background: var(--white);
    resize: none;
    padding: 1.1rem 1.6rem;
    font-size: 1.6rem;

    &::placeholder {
      color: var(--dark-grey);
    }
  }
`;

export const CVSubmit = styled.button`
  width: 100%;
  background: var(--red);
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.45rem 2.4rem;
  min-width: 18rem;
  border-radius: 0.4rem;
`;

export const ModalForm = styled.div`
  .form-group {
    display: flex;

    h2 {
      flex: 1;
      padding: 3.2rem 1.6rem 0 3.2rem;
      font-size: 2.2rem;
      color: var(--black);
    }

    svg {
      width: 4.4rem;
      height: 4.4rem;
      color: var(--dark-grey);
      margin-top: 2rem;
      margin-right: 2rem;
      cursor: pointer;
      padding: 0.4rem;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.2rem 3.2rem 3.2rem;
    color: var(--rich-grey);
    line-height: 2.8rem;
  }

  .button-group {
    padding: 0 3.2rem 2.4rem;
    display: flex;
    justify-content: end;
    gap: 1.6rem;

    button {
      font-size: 1.6rem;
      font-weight: 400;
      padding: 1.2rem 2.4rem;
      border-radius: 0.4rem;
      color: var(--rich-grey);
      background-color: var(--white);
      border: none;
      min-width: auto;

      &:nth-child(1) {
        &:hover {
          color: var(--rich-grey);
          background-color: var(--light-grey);
          border-color: var(--light-grey);
        }
      }

      &:nth-child(2) {
        font-weight: 600;
        padding: 1.1rem 2.4rem;
        min-width: 18rem;
        border-radius: 0.4rem;
        color: var(--white);
        background-color: var(--red);
        border-color: var(--red);

        &:hover {
          color: var(--white);
          background-color: var(--dark-red);
          border-color: var(--button-active);
        }
      }
    }
  }
`;
