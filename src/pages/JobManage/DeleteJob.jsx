import styled from "styled-components";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

const customStyles = {
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

const DeleteJob = (props) => {
  const { deleteModalIsOpen, jobDetail, closeDeleteModal, onHandleDeleteJob } =
    props;

  return (
    <Modal
      isOpen={deleteModalIsOpen}
      onRequestClose={closeDeleteModal}
      style={customStyles}
      ariaHideApp={false}>
      <ModalHead>
        <h2>Bạn có chắc chắn muốn xoá công việc này?</h2>
        <IoCloseOutline onClick={closeDeleteModal} />
      </ModalHead>
      <ModalBody>
        <p>
          Việc xóa việc làm &quot;{jobDetail?.name}&quot; sẽ xoá thông tin của
          việc làm khỏi cơ sở dữ liệu hoạt động của công ty.
        </p>
        <h4>Hành động này không thể hoàn tác.</h4>
      </ModalBody>
      <ModalFooter>
        <button className="cancel" onClick={closeDeleteModal}>
          Huỷ
        </button>
        <button className="delete" onClick={() => onHandleDeleteJob(jobDetail)}>
          Xoá công việc
        </button>
      </ModalFooter>
    </Modal>
  );
};

const ModalHead = styled.div`
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

const ModalBody = styled.div`
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

const ModalFooter = styled.div`
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

export default DeleteJob;
