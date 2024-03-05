import styled from "styled-components";

export const JobContainer = styled.div`
  padding: 2.4rem;
`;

export const JobHeading = styled.div`
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  gap: 1.2rem;
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  .all-job {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .create {
    background: var(--yellow);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    color: var(--toastify-color-light);
    border-radius: 0.4rem;
    font-weight: 600;
    border: 1px solid var(--orange);
  }
`;

export const JobContent = styled.div`
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  overflow: hidden;

  .tag {
    display: inline-block;
    border: 1px solid var(--info-color);
    border-radius: 100rem;
    padding: 0.2rem 0.4rem;
    background: var(--input-control);
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .status-on {
    background: var(--light-success-color);
    border: 1px solid var(--success-color);
    border-radius: 0.4rem;
    display: inline-block;
    padding: 0.4rem 1.2rem;
    white-space: nowrap;
  }

  .status-off {
    background: var(--silver-grey);
    border: 1px solid var(--dark-grey);
    border-radius: 0.4rem;
    display: inline-block;
    padding: 0.4rem 1.2rem;
    white-space: nowrap;
  }

  .btn-group {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .edit,
  .delete {
    padding: 0.4rem;
    border-radius: 0.4rem;
    display: flex;

    svg {
      color: var(--white);
    }
  }

  .edit {
    background: var(--cyan);
  }
  .delete {
    background: var(--red);
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
    maxWidth: "88rem",
    width: "100%",
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
  max-height: 53rem;
  overflow: auto;
`;

export const ModalForm = styled.form`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  .form-group {
    display: flex;
    position: relative;
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;

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

  .select-group {
    margin-bottom: 1.2rem;
  }
`;

export const ModalTextGroup = styled.div`
  .text-input {
    display: flex;
    gap: 1.2rem;
  }

  input {
    flex: 1;
    padding: 0 1.6rem;
    border: 1px solid var(--silver-grey);
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 0.8rem;
    height: 4.2rem;
    text-overflow: ellipsis;
  }

  .create {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    color: var(--white);
    border: 1px solid var(--red);
    justify-content: center;
    gap: 0.8rem;
    background: var(--yellow);
    margin-bottom: 1.6rem;
  }

  ul {
    font-size: 1.6rem;
    font-weight: 400;
    margin-block: 0.8rem;
    padding-left: 1.8rem;

    .text-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2.4rem;

      span {
        flex: 1;
      }

      .delete {
        padding: 0.4rem;
        border-radius: 0.4rem;
        display: flex;
        background: var(--red);

        svg {
          color: var(--white);
        }
      }
    }

    li {
      list-style-type: disc;
      padding-block: 0.4rem;

      &::marker {
        color: var(--red);
      }
    }
  }
`;

export const ModalStatus = styled.div`
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 8rem;
    height: 4rem;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 3rem;
    height: 3rem;
    background: var(--white);
    border-radius: 100rem;
    transition: 0.3s;
  }

  input:checked + label {
    background: var(--teal);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

export const ModalFoot = styled.div`
  padding: 1.6rem 0;
  border-top: 1px solid #dee2e6;
  margin-top: 2.4rem;

  button {
    color: var(--white);
    padding: 1.4rem 2.4rem;
    font-size: 1.6rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    font-weight: 600;
    margin: 0.4rem;

    &.create-job {
      background: var(--orange);
    }

    &.reset-job {
      background: var(--red);
    }

    &.edit-job {
      background: var(--cyan);
    }

    &.delete-job {
      background: var(--red);
    }
  }
`;
