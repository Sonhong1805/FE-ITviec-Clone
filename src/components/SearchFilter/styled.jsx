import styled from "styled-components";

export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 4.2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    gap: 0.8rem;
    color: var(--red);
    background-color: var(--white);
    border-color: var(--red);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0.7rem 2rem;
    min-width: 14rem;
    border-radius: 4px;
    position: relative;

    &:hover {
      background-color: var(--white-red);
    }

    .count {
      position: absolute;
      right: -1rem;
      top: -1rem;
      background: var(--warning-color);
      color: var(--white);
      border-radius: 100rem;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
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
  },
};

export const ModalForm = styled.form`
  max-width: 80rem;
`;

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
`;

export const ModalContainer = styled.div`
  padding-top: 3.2rem;

  h4 {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  .modal-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  input {
    display: none;
  }

  label {
    display: inline-flex;
    align-items: center;
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    gap: 0.8rem;
    border-radius: 2rem;
    border: 1px solid var(--silver-grey);
    margin-block: 0.8rem;
    margin-right: 0.8rem;
    cursor: pointer;

    svg {
      color: var(--menu-link);
    }
  }

  input:checked + label {
    border: 1px solid var(--red);
    background-color: var(--white-red);
    color: var(--red);

    svg {
      color: var(--red);
    }
  }

  span {
    font-size: 1.6rem;
    color: var(--rich-grey);
    padding-right: 1.2rem;
    min-width: 18.3rem;
  }

  .range {
    flex: 1;
    border: 1px solid var(--silver-grey);
    background-color: #fff;
    border-radius: 3rem;
    padding: 1.2rem 2rem;
    max-width: 55rem;
  }
`;

export const ModalFoot = styled.div`
  padding: 1.6rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #dee2e6;

  div {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--hyperlink);
    margin: 0.4rem;
    cursor: pointer;
  }

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
