import styled from "styled-components";

export const CVContainer = styled.div`
  padding: 2.4rem;
`;

export const CVHeader = styled.div`
  background: var(--white);
  display: flex;
  padding: 1.2rem 1.6rem;
  gap: 1.2rem;
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  margin-bottom: 1rem;
`;

export const CVTable = styled.div`
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  overflow: hidden;

  .readed {
    background: var(--light-success-color);
    border: 1px solid var(--success-color);
    border-radius: 0.4rem;
    display: inline-block;
    padding: 0.4rem 1.2rem;
    white-space: nowrap;
  }

  .unread {
    background: var(--light-red);
    border: 1px solid var(--dark-red);
    border-radius: 0.4rem;
    display: inline-block;
    padding: 0.4rem 1.2rem;
    white-space: nowrap;
  }

  .btn-group {
    display: flex;
    gap: 0.4rem;

    svg {
      color: var(--white);
    }

    .view {
      background: var(--green);
      padding: 0.4rem;
      border-radius: 0.4rem;
      display: flex;
    }

    .delete {
      background: var(--red);
      padding: 0.4rem;
      border-radius: 0.4rem;
      display: flex;
    }
  }
`;

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
    minWidth: "80rem",
  },
};

export const ModalHead = styled.div`
  padding: 1.6rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--rich-grey);
  border-bottom: 1px solid #dee2e6;

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
  padding: 0 3.2rem 1.6rem;

  .modal-group {
    padding-top: 3.2rem;
  }

  h3 {
    display: block;
    margin-bottom: 0.4rem;
    line-height: 2.1rem;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: var(--rich-grey);
  }

  input {
    border: 1px solid var(--silver-grey);
    width: 100%;
    padding: 1.1rem 1.6rem;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    font-weight: 400;
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

export const ModalFoot = styled.div`
  padding: 1.6rem 3.2rem;
  border-top: 1px solid #dee2e6;

  button {
    color: var(--white);
    padding: 1.4rem 2.4rem;
    background: var(--red);
    font-size: 1.6rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    font-weight: 600;
    margin: 0.4rem;
  }
`;
