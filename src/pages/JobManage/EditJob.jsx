import { cityOptions, rankOptions } from "./Options";
import { getTimeCurrent } from "../../helpers/getTimeCurrent";
import {
  ModalBody,
  ModalFoot,
  ModalForm,
  ModalHead,
  ModalStatus,
  ModalTextGroup,
  customStyles,
} from "./styled";
import { updateJob } from "../../services/jobService";
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";
import Modal from "react-modal";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";

const EditJob = (props) => {
  const {
    tagOptions,
    setReload,
    jobDetail,
    closeEditModal,
    modalIsOpen,
    onHandleAlert,
    openDeleteModal,
  } = props;

  const [cities, setCities] = useState();
  const [tags, setTags] = useState();
  const [rank, setRank] = useState();
  const [descriptionList, setDescriptionList] = useState([]);
  const [reasonList, setReasonList] = useState([]);
  const [requireList, setRequireList] = useState([]);
  const descriptionInputRef = useRef();
  const reasonInputRef = useRef();
  const requireInputRef = useRef();
  const cityRef = useRef();
  const tagRef = useRef();
  const rankRef = useRef();

  useEffect(() => {
    setDescriptionList(jobDetail.descriptions);
    setReasonList(jobDetail.reasons);
    setRequireList(jobDetail.jobRequirements);
  }, [jobDetail]);

  const defaultCities = cityOptions?.filter((city) =>
    jobDetail?.city?.includes(city.value)
  );

  const defaultTags = tagOptions?.filter((tag) =>
    jobDetail?.tags?.includes(tag.value)
  );

  const defaultRank = rankOptions?.filter(
    (rank) => jobDetail?.rank === rank.value
  );

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
    setRank(e.value);
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
      name,
      salary,
      city: cities ?? jobDetail.city,
      tags: tags ?? jobDetail.tags,
      rank: rank ?? jobDetail.rank,
      reasons,
      descriptions,
      jobRequirements,
      status: status.checked,
      updatedAt: getTimeCurrent(),
    };
    const response = await updateJob(options, jobDetail.id);
    if (response) {
      closeEditModal();
      setReload((prev) => !prev);
      onHandleAlert("Chỉnh sửa việc làm thành công !!!");
    }
  };

  const handleCreateAction = async (actionType) => {
    let inputValue = "";

    switch (actionType) {
      case "description":
        inputValue = descriptionInputRef.current.value;
        setDescriptionList([...descriptionList, inputValue]);
        descriptionInputRef.current.value = "";
        break;
      case "reason":
        inputValue = reasonInputRef.current.value;
        setReasonList([...reasonList, inputValue]);
        reasonInputRef.current.value = "";
        break;
      case "require":
        inputValue = requireInputRef.current.value;
        setRequireList([...requireList, inputValue]);
        requireInputRef.current.value = "";
        break;
      default:
        break;
    }
  };

  const handleDeleteAction = async (field, index) => {
    let newList = [];
    switch (field) {
      case "descriptions":
        newList = [...descriptionList];
        newList.splice(index, 1);
        setDescriptionList(newList);
        break;
      case "reasons":
        newList = [...reasonList];
        newList.splice(index, 1);
        setReasonList(newList);
        break;
      case "jobRequirements":
        newList = [...requireList];
        newList.splice(index, 1);
        setRequireList(newList);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    cityRef.current.setValue(defaultCities);
    tagRef.current.setValue(defaultTags);
    rankRef.current.setValue(defaultRank);
    setDescriptionList(jobDetail.descriptions);
    setReasonList(jobDetail.reasons);
    setRequireList(jobDetail.jobRequirements);
    setReload((prev) => !prev);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeEditModal}
      style={customStyles}
      ariaHideApp={false}>
      <ModalHead>
        <h2>Chỉnh sửa việc làm</h2>
        <IoCloseOutline onClick={closeEditModal} />
      </ModalHead>
      <ModalBody>
        <ModalForm onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={jobDetail.name}
            />
            <label htmlFor="name">
              Tên việc làm <abbr>*</abbr>
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="salary"
              name="salary"
              defaultValue={jobDetail.salary}
            />
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
              defaultValue={defaultCities}
              name="city"
              isSearchable={false}
              options={cityOptions}
              className="city-multi-select"
              classNamePrefix="select"
              placeholder="Chọn nhiều địa chỉ"
              onChange={handleGetCities}
              ref={cityRef}
            />
          </div>
          <h3>
            Tag việc làm <abbr>*</abbr>
          </h3>
          <div className="select-group">
            <Select
              isMulti
              defaultValue={defaultTags}
              name="tags"
              isSearchable={true}
              options={tagOptions}
              className="tags-multi-select"
              classNamePrefix="select"
              placeholder="Chọn các tag phù hợp"
              onChange={handleGetTags}
              ref={tagRef}
            />
          </div>
          <h3>
            Cấp bậc <abbr>*</abbr>
          </h3>
          <div className="select-group">
            <Select
              defaultValue={defaultRank}
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
            Mô tả việc làm <abbr>*</abbr>
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
                onClick={() => handleCreateAction("description")}>
                Thêm
              </button>
            </div>
            <ul>
              {descriptionList?.map((description, index) => (
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
                      onClick={() => handleDeleteAction("descriptions", index)}>
                      <IoTrashOutline />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </ModalTextGroup>
          <h3>
            Lý do gia nhập công ty <abbr>*</abbr>
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
                onClick={() => handleCreateAction("reason")}>
                Thêm
              </button>
            </div>
            <ul>
              {reasonList?.map((reason, index) => (
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
                      onClick={() => handleDeleteAction("reasons", index)}>
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
                placeholder="Nhập yêu cầu"
                ref={requireInputRef}
              />
              <button
                type="button"
                className="create"
                onClick={() => handleCreateAction("require")}>
                Thêm
              </button>
            </div>
            <ul>
              {requireList?.map((require, index) => (
                <li key={index}>
                  <div className="text-item">
                    <input
                      type="text"
                      name="require"
                      value={require}
                      onChange={() => {}}
                    />
                    <button
                      className="delete"
                      onClick={() =>
                        handleDeleteAction("jobRequirements", index)
                      }>
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
            <input
              type="checkbox"
              id="status"
              name="status"
              defaultChecked={jobDetail.status}
            />
            <label htmlFor="status">Toggle</label>
          </ModalStatus>
          <ModalFoot>
            <button type="submit" className="edit-job">
              Cập nhật việc làm
            </button>
            <button type="reset" className="reset-job" onClick={handleReset}>
              Huỷ
            </button>
            <button
              type="button"
              className="delete-job"
              onClick={openDeleteModal}>
              Xoá việc làm
            </button>
          </ModalFoot>
        </ModalForm>
      </ModalBody>
    </Modal>
  );
};

export default EditJob;
