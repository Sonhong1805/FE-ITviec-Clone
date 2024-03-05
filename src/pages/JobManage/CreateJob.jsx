import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";
import Modal from "react-modal";
import Select from "react-select";
import {
  ModalBody,
  ModalFoot,
  ModalForm,
  ModalHead,
  ModalStatus,
  ModalTextGroup,
  customStyles,
} from "./styled";
import { cityOptions, rankOptions } from "./Options";
import { getTagList } from "../../services/tagService";
import { getTimeCurrent } from "../../helpers/getTimeCurrent";
import { createJob } from "../../services/jobService";
import { getCookie } from "../../helpers/cookie";

const CreateJob = (props) => {
  const { setReload, onHandleAlert } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState();
  const [tags, setTags] = useState();
  const [rank, setRank] = useState();
  const descriptionInputRef = useRef();
  const reasonInputRef = useRef();
  const requireInputRef = useRef();
  const citiesRef = useRef();
  const tagsRef = useRef();
  const rankRef = useRef();
  const [descriptionList, setDescriptionList] = useState([]);
  const [reasonList, setReasonList] = useState([]);
  const [requireList, setRequireList] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);

  const idCompany = +getCookie("idCompany");

  useEffect(() => {
    const fetchData = async () => {
      const tagList = await getTagList();
      if (tagList) {
        setTagOptions(tagList);
      }
    };
    fetchData();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleGetCities = (e) => {
    const valueArr = [];
    e.forEach((item) => {
      valueArr.push(item.value);
    });
    setCities(valueArr);
  };

  const handleGetTags = (e) => {
    const valueArr = [];
    e.forEach((item) => {
      valueArr.push(item.value);
    });
    setTags(valueArr);
  };

  const handleGetRank = (e) => {
    setRank(e?.value);
  };

  const handleCreateItem = (listType, value) => {
    if (listType === "description") {
      setDescriptionList((prevList) => [...prevList, value]);
      descriptionInputRef.current.value = "";
    } else if (listType === "reason") {
      setReasonList((prevList) => [...prevList, value]);
      reasonInputRef.current.value = "";
    } else if (listType === "require") {
      setRequireList((prevList) => [...prevList, value]);
      requireInputRef.current.value = "";
    }
  };

  const handleDeleteItem = (listType, index) => {
    if (listType === "description") {
      setDescriptionList((prevList) => prevList.filter((_, i) => i !== index));
    } else if (listType === "reason") {
      setReasonList((prevList) => prevList.filter((_, i) => i !== index));
    } else if (listType === "require") {
      setRequireList((prevList) => prevList.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const salary = +e.target[1].value;
    const allDescription = e.target.querySelectorAll(
      'input[name="description"]'
    );
    const descriptions = [];
    allDescription.forEach((item) => {
      descriptions.push(item.value);
    });
    const allReason = e.target.querySelectorAll('input[name="reason"]');
    const reasons = [];
    allReason.forEach((item) => {
      reasons.push(item.value);
    });
    const allRequire = e.target.querySelectorAll('input[name="require"]');
    const jobRequirements = [];
    allRequire.forEach((item) => {
      jobRequirements.push(item.value);
    });
    const status = e.target.querySelector('input[name="status"]');
    const options = {
      idCompany,
      name,
      salary,
      city: cities,
      tags,
      rank,
      reasons: reasonList,
      descriptions: descriptionList,
      jobRequirements: requireList,
      status: status.checked,
      createdAt: getTimeCurrent(),
      updatedAt: getTimeCurrent(),
    };
    const response = await createJob(options);
    if (response) {
      setReload((prev) => !prev);
      closeModal();
      handleResetForm();
      onHandleAlert("Thêm mới công việc thành công !!!");
    }
  };

  const handleResetForm = () => {
    citiesRef.current.clearValue();
    tagsRef.current.clearValue();
    rankRef.current.clearValue();
    setDescriptionList([]);
    setReasonList([]);
    setRequireList([]);
  };

  return (
    <>
      <button className="create" onClick={openModal}>
        <span>Thêm mới công việc</span>
        <GoPlus />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}>
        <ModalHead>
          <h2>Thêm mới việc làm</h2>
          <IoCloseOutline onClick={closeModal} />
        </ModalHead>
        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" />
              <label htmlFor="name">
                Tên việc làm <abbr>*</abbr>
              </label>
            </div>
            <div className="form-group">
              <input type="text" id="salary" name="salary" />
              <label htmlFor="salary">
                Lương dự kiến (USD) <abbr>*</abbr>
              </label>
            </div>
            <h3>
              Địa chỉ việc làm <abbr>*</abbr>
            </h3>
            <div className="select-group">
              <Select
                isMulti
                name="city"
                defaultValue={[]}
                isSearchable={false}
                options={cityOptions}
                className="city-multi-select"
                classNamePrefix="select"
                placeholder="Chọn nhiều địa chỉ"
                ref={citiesRef}
                onChange={handleGetCities}
              />
            </div>
            <h3>
              Tag việc làm <abbr>*</abbr>
            </h3>
            <div className="select-group">
              <Select
                isMulti
                name="tags"
                isSearchable={true}
                options={tagOptions}
                className="tags-multi-select"
                classNamePrefix="select"
                placeholder="Chọn các tag phù hợp"
                onChange={handleGetTags}
                ref={tagsRef}
              />
            </div>
            <h3>
              Cấp bậc <abbr>*</abbr>
            </h3>
            <div className="select-group">
              <Select
                name="rank"
                isSearchable={false}
                options={rankOptions}
                className="ranks-multi-select"
                classNamePrefix="select"
                placeholder="Chọn cấp bậc"
                onChange={handleGetRank}
                ref={rankRef}
              />
            </div>
            <h3>
              Mô tả công việc <abbr>*</abbr>
            </h3>
            <ModalTextGroup>
              <div className="text-input">
                <input
                  type="text"
                  placeholder="Nhập mô tả"
                  ref={descriptionInputRef}
                />
                <button
                  type="button"
                  className="create"
                  onClick={() =>
                    handleCreateItem(
                      "description",
                      descriptionInputRef.current.value
                    )
                  }>
                  Thêm
                </button>
              </div>
              <ul>
                {descriptionList.map((description, index) => (
                  <li key={index}>
                    <div className="text-item">
                      <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={() => {}}
                      />
                      <button
                        type="button"
                        className="delete"
                        onClick={() => handleDeleteItem("description", index)}>
                        <IoTrashOutline />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </ModalTextGroup>
            <h3>
              Yêu cầu công việc <abbr>*</abbr>
            </h3>
            <ModalTextGroup>
              <div className="text-input">
                <input
                  type="text"
                  placeholder="Nhập lý do"
                  ref={requireInputRef}
                />
                <button
                  type="button"
                  className="create"
                  onClick={() =>
                    handleCreateItem("require", requireInputRef.current.value)
                  }>
                  Thêm
                </button>
              </div>
              <ul>
                {requireList.map((require, index) => (
                  <li key={index}>
                    <div className="text-item">
                      <input
                        type="text"
                        name="require"
                        value={require}
                        onChange={() => {}}
                      />
                      <button
                        type="button"
                        className="delete"
                        onClick={() => handleDeleteItem("require", index)}>
                        <IoTrashOutline />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </ModalTextGroup>
            <h3>
              Tại sao bạn sẽ yêu thích làm việc tại đây <abbr>*</abbr>
            </h3>
            <ModalTextGroup>
              <div className="text-input">
                <input
                  type="text"
                  placeholder="Nhập lý do"
                  ref={reasonInputRef}
                />
                <button
                  type="button"
                  className="create"
                  onClick={() =>
                    handleCreateItem("reason", reasonInputRef.current.value)
                  }>
                  Thêm
                </button>
              </div>
              <ul>
                {reasonList.map((reason, index) => (
                  <li key={index}>
                    <div className="text-item">
                      <input
                        type="text"
                        name="reason"
                        value={reason}
                        onChange={() => {}}
                      />
                      <button
                        type="button"
                        className="delete"
                        onClick={() => handleDeleteItem("reason", index)}>
                        <IoTrashOutline />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </ModalTextGroup>
            <h3>
              Trạng thái công việc <abbr>*</abbr>
            </h3>
            <ModalStatus>
              <input type="checkbox" id="status" name="status" />
              <label htmlFor="status">Toggle</label>
            </ModalStatus>
            <ModalFoot>
              <button type="submit" className="create-job">
                Thêm việc làm mới
              </button>
              <button
                type="reset"
                className="delete-job"
                onClick={handleResetForm}>
                Huỷ
              </button>
            </ModalFoot>
          </ModalForm>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateJob;
