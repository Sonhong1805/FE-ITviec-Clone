import { SearchFilterContainer } from "./styled";
import { FiFilter } from "react-icons/fi";
import { GoPlus, GoCheck } from "react-icons/go";
import {
  ModalBody,
  ModalContainer,
  ModalFoot,
  ModalForm,
  ModalHead,
  customStyles,
} from "./styled";
import { IoCloseOutline } from "react-icons/io5";
import Slider from "rc-slider";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SearchFilter = (props) => {
  const { jobs, jobsTmp, param, setJobs, setCurrentJob, setCompany } = props;
  const { t, i18n } = useTranslation(["search"]);
  const language = i18n.language;
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const [inputChecked, setInputChecked] = useState({
    min: 500,
    max: 10000,
  });

  Modal.setAppElement("#root");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (inputChecked.min !== 500 || inputChecked.max !== 10000) {
      setCount(1);
    } else {
      setCount(0);
    }
  };

  const handleSliderChange = (e) => {
    const [min, max] = e;
    setInputChecked({
      ...inputChecked,
      min,
      max,
    });
  };

  const [checkboxChecked, setCheckboxChecked] = useState({
    rank: [],
    type: [],
    formOfWork: [],
  });
  const handleFilterChange = (e) => {
    const { name, id, checked, value } = e.target;
    setInputChecked({
      ...inputChecked,
      [id]: checked,
    });
    setCheckboxChecked((prev) => {
      const isChecked = prev[name].includes(value);
      if (checked && !isChecked) {
        return {
          ...prev,
          [name]: [...prev[name], value],
        };
      } else if (!checked && isChecked) {
        return {
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    let newCount = 0;
    let countIncreased = false;
    for (const key in inputChecked) {
      const element = inputChecked[key];
      if (key === "min" || key === "max") {
        if (
          (key === "min" && element !== 500) ||
          (key === "max" && element !== 10000)
        ) {
          if (!countIncreased) {
            newCount++;
            countIncreased = true;
          }
        }
      } else {
        if (element === true) {
          newCount++;
        }
      }
    }
    setCount(newCount);
  }, [inputChecked]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const jobArray = jobsTmp.filter((job) => {
      const isRank = checkboxChecked.rank.some((item) => item);
      const rank = isRank ? checkboxChecked?.rank.includes(job.rank) : true;
      const salaryMin =
        job.salary === 0 ? job.salary >= 0 : job.salary >= inputChecked.min;
      const salaryMax = job.salary <= inputChecked.max;
      const isFormOfWork = checkboxChecked.formOfWork.some((item) => item);
      const formOfWork = isFormOfWork
        ? checkboxChecked.formOfWork.includes(job.company.formOfWork.value)
        : true;
      const isType = checkboxChecked.type.some((item) => item);
      const type = isType
        ? checkboxChecked.type.includes(job.company.type)
        : true;
      const status = job.status;
      return rank && salaryMin && salaryMax && formOfWork && type && status;
    });
    if (jobArray.length > 0) {
      setJobs(jobArray);
      setCurrentJob(jobArray[0]);
    } else {
      setJobs([]);
      setCurrentJob({});
      setCompany({});
    }
    setShowModal(false);
  };

  const handleDeleteFilter = () => {
    setCheckboxChecked({
      rank: [],
      type: [],
      formOfWork: [],
    });
    setInputChecked({
      min: 500,
      max: 10000,
    });
  };

  return (
    <SearchFilterContainer>
      <h1>
        {jobs.filter((job) => job).length}{" "}
        {language === "en" ? (
          param.get("keywords") ? (
            <>
              <span style={{ color: "#ed1b2f" }}>{param.get("keywords")}</span>
              <span> jobs </span>
              <span> in </span>
            </>
          ) : (
            " IT jobs in "
          )
        ) : param.get("keywords") ? (
          <>
            <span>việc làm </span>
            <span style={{ color: "#ed1b2f" }}>{param.get("keywords")}</span>
            <span> tại </span>
          </>
        ) : (
          <span> việc làm IT tại </span>
        )}
        {param.get("city") || "Việt Nam"}
      </h1>
      <button onClick={openModal}>
        <FiFilter />
        <span>{t("Filter")}</span>
        {count > 0 && <div className="count">{count}</div>}
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <ModalForm onSubmit={handleFilterSubmit}>
          <ModalHead>
            <h2>{t("Filter")}</h2>
            <IoCloseOutline onClick={closeModal} />
          </ModalHead>
          <ModalBody>
            <ModalContainer>
              <h4>{t("Level")}</h4>
              <div className="modal-group">
                <input
                  type="checkbox"
                  name="rank"
                  value="fresher"
                  id="fresher"
                  checked={checkboxChecked.rank.includes("fresher")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="fresher">
                  Fresher
                  {inputChecked.fresher ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="junior"
                  name="rank"
                  value="junior"
                  checked={checkboxChecked.rank.includes("junior")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="junior">
                  Junior
                  {inputChecked.junior ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="senior"
                  name="rank"
                  value="senior"
                  checked={checkboxChecked.rank.includes("senior")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="senior">
                  Senior
                  {inputChecked.senior ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="manager"
                  name="rank"
                  value="manager"
                  checked={checkboxChecked.rank.includes("manager")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="manager">
                  Manager
                  {inputChecked.manager ? <GoCheck /> : <GoPlus />}
                </label>
              </div>
            </ModalContainer>
            <ModalContainer>
              <h4>{t("Salary")}</h4>
              <div className="modal-group">
                <span>
                  {new Intl.NumberFormat("en-IN").format(inputChecked.min)}$ -{" "}
                  {new Intl.NumberFormat("en-IN").format(inputChecked.max)}$
                </span>
                <div className="range">
                  <Slider
                    range
                    min={500}
                    max={10000}
                    step={500}
                    defaultValue={[
                      inputChecked.min || 500,
                      inputChecked.max || 10000,
                    ]}
                    railStyle={{ backgroundColor: "#DEDEDE" }}
                    trackStyle={{ backgroundColor: "#0ab305" }}
                    pushable={true}
                    onChange={handleSliderChange}
                  />
                </div>
              </div>
            </ModalContainer>
            <ModalContainer>
              <h4>{t("Company Type.value")}</h4>
              <div className="modal-group">
                <input
                  type="checkbox"
                  id="outsource"
                  name="type"
                  value="outsource"
                  checked={checkboxChecked.type.includes("outsource")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="outsource">
                  {t("Company Type.outsource")}
                  {inputChecked.outsource ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="product"
                  name="type"
                  value="product"
                  checked={checkboxChecked.type.includes("product")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="product">
                  {t("Company Type.product")}
                  {inputChecked.product ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="headhunt"
                  name="type"
                  value="headhunt"
                  checked={checkboxChecked.type.includes("headhunt")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="headhunt">
                  {t("Company Type.headhunt")}
                  {inputChecked.headhunt ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="service"
                  name="type"
                  value="service"
                  checked={checkboxChecked.type.includes("service")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="service">
                  {t("Company Type.service")}
                  {inputChecked.service ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="nonIT"
                  name="type"
                  value="nonIT"
                  checked={checkboxChecked.type.includes("nonIT")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="nonIT">
                  {t("Company Type.nonIT")}
                  {inputChecked.nonIT ? <GoCheck /> : <GoPlus />}
                </label>
              </div>
            </ModalContainer>
            <ModalContainer>
              <h4>{t("Working Model.value")}</h4>
              <div className="modal-group">
                <input
                  type="checkbox"
                  id="office"
                  name="formOfWork"
                  value="office"
                  checked={checkboxChecked.formOfWork.includes("office")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="office">
                  {t("Working Model.office")}
                  {inputChecked.office ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="remote"
                  name="formOfWork"
                  value="remote"
                  checked={checkboxChecked.formOfWork.includes("remote")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="remote">
                  {t("Working Model.remote")}
                  {inputChecked.remote ? <GoCheck /> : <GoPlus />}
                </label>
                <input
                  type="checkbox"
                  id="flexible"
                  name="formOfWork"
                  value="flexible"
                  checked={checkboxChecked.formOfWork.includes("flexible")}
                  onChange={handleFilterChange}
                />
                <label htmlFor="flexible">
                  {t("Working Model.flexible")}
                  {inputChecked.flexible ? <GoCheck /> : <GoPlus />}
                </label>
              </div>
            </ModalContainer>
          </ModalBody>
          <ModalFoot>
            <div onClick={handleDeleteFilter}>
              {t("Reset filter")} {count > 0 && `(${count})`}{" "}
            </div>
            <button>{t("Apply")}</button>
          </ModalFoot>
        </ModalForm>
      </Modal>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
