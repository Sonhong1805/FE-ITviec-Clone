import { useEffect, useRef, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getCompanyDetail, updateCompany } from "../../services/companyService";
import { FaBuilding } from "react-icons/fa";
import {
  ButtonGroup,
  InfoCompanyHead,
  InfoCompanyLogo,
  InfoCompanyMain,
  InfoContainer,
  InfoContentGroup,
  InfoFormGrid,
  InfoFormGroup,
  InfoGroup,
} from "./styled";
import Select from "react-select";
import { cityOptions, formOfWorkOptions, modelOptions } from "./Options";
import { getTagList } from "../../services/tagService";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const InfoCompany = () => {
  const [model, setModel] = useState();
  const [company, setCompany] = useState();
  const [tagOptions, setTagOptions] = useState();
  const [formOfWork, setFormOfWork] = useState();
  const [address, setAddress] = useState();
  const [specialize, setSpecialize] = useState();
  const descriptionInputRef = useRef();
  const reasonInputRef = useRef();
  const [descriptionList, setDescriptionList] = useState([]);
  const [reasonList, setReasonList] = useState([]);
  const [reload, setReload] = useState(false);

  const idCompany = +getCookie("idCompany");

  useEffect(() => {
    const fetchData = async () => {
      const [companyDetail, tagList] = await Promise.all([
        getCompanyDetail(idCompany),
        getTagList(),
      ]);
      if (companyDetail && tagList) {
        setCompany(companyDetail);
        setDescriptionList(companyDetail.descriptions);
        setReasonList(companyDetail.reasons);
        setTagOptions(tagList);

        const defaultModel = modelOptions?.find(
          (model) => model?.value === companyDetail?.type
        );
        setModel(defaultModel);

        const defaultFormOfWork = formOfWorkOptions?.find(
          (formOfWork) => formOfWork?.value === companyDetail?.formOfWork?.value
        );
        setFormOfWork(defaultFormOfWork);

        const defaultAddress = cityOptions?.filter((city) =>
          companyDetail?.address?.includes(city.value)
        );

        setAddress(defaultAddress);

        const defaultSpecialize = tagList?.filter((tag) =>
          companyDetail?.specialize?.includes(tag.value)
        );
        setSpecialize(defaultSpecialize);
      }
    };
    fetchData();
  }, [idCompany, reload]);

  const handleCreateAction = async (actionType) => {
    let inputValue = "";

    switch (actionType) {
      case "description":
        inputValue = descriptionInputRef.current.value;
        setDescriptionList([...descriptionList, inputValue]);
        break;
      case "reason":
        inputValue = reasonInputRef.current.value;
        setReasonList([...reasonList, inputValue]);
        break;
      default:
        break;
    }
  };

  const handleDeleteAction = async (field, index) => {
    let newList;
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
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const website = e.target[2].value;
    const companySize = e.target[5].value;
    const country = e.target[6].value;
    const workingTime = e.target[7].value;
    const workOvertime = e.target[8].value;
    const allDescription = e.target.querySelectorAll(
      'textarea[name="description"]'
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
    const specializesValue = specialize.map((item) => item.value);
    const options = {
      name,
      email,
      website,
      companySize,
      country,
      workingTime,
      workOvertime,
      formOfWork: formOfWork ?? company?.formOfWork,
      address: address ?? company?.address,
      model: model?.label ?? model?.label,
      type: model?.value ?? model?.value,
      descriptions,
      reasons,
      specialize: specializesValue ?? company?.specialize,
    };
    const response = await updateCompany(options, company.id);
    if (response) {
      alert("Updated company");
      setReload((prev) => !prev);
    }
  };

  return company ? (
    <InfoContainer>
      <InfoCompanyHead>
        <FaBuilding />
        <h2>Thông tin công ty</h2>
      </InfoCompanyHead>
      <InfoCompanyMain>
        <form onSubmit={handleSubmit}>
          <InfoGroup>
            <InfoFormGroup>
              <label>
                <span>Tên công ty</span>
                <abbr>*</abbr>
              </label>
              <input type="text" defaultValue={company.name} />
            </InfoFormGroup>
            <InfoFormGroup>
              <label>
                <span>Email</span>
                <abbr>*</abbr>
              </label>
              <input type="email" defaultValue={company.email} />
            </InfoFormGroup>
          </InfoGroup>
          <InfoGroup>
            <InfoFormGroup>
              <label className="link-website">
                <Link to={company.website} target="_blank">
                  Website công ty
                </Link>
                <FaExternalLinkAlt />
              </label>
              <input type="text" defaultValue={company.website} />
            </InfoFormGroup>
          </InfoGroup>
          <InfoFormGrid>
            <InfoFormGroup>
              <label>
                <span>Mô hình công ty</span>
                <abbr>*</abbr>
              </label>
              <Select
                value={model}
                name="model"
                isSearchable={false}
                options={modelOptions}
                className="model-select"
                classNamePrefix="select"
                placeholder="Chọn mô hình"
                onChange={(e) => setModel(e)}
              />
            </InfoFormGroup>
            <InfoFormGroup>
              <label>
                <span>Quy mô công ty</span>
                <abbr>*</abbr>
              </label>
              <input
                type="text"
                name="companySize"
                defaultValue={company.companySize}
              />
            </InfoFormGroup>
            <InfoFormGroup>
              <label>
                <span>Quốc gia</span>
                <abbr>*</abbr>
              </label>
              <input type="text" defaultValue={company.country} />
            </InfoFormGroup>
            <InfoFormGroup>
              <label>
                <span>Thời gian làm việc</span>
                <abbr>*</abbr>
              </label>
              <input type="text" defaultValue={company.workingTime} />
            </InfoFormGroup>
            <InfoFormGroup>
              <label>
                <span>Làm việc ngoài giờ</span>
                <abbr>*</abbr>
              </label>
              <input type="text" defaultValue={company.workOvertime} />
            </InfoFormGroup>
            <InfoFormGroup>
              <label>
                <span>Hình thức</span>
                <abbr>*</abbr>
              </label>
              <Select
                value={formOfWork}
                name="formOfWork"
                isSearchable={false}
                options={formOfWorkOptions}
                className="formOfWork-select"
                classNamePrefix="select"
                placeholder="Chọn hình thức"
                onChange={(e) => setFormOfWork(e)}
              />
            </InfoFormGroup>
          </InfoFormGrid>
          <InfoContentGroup>
            <label>
              <span>Địa chỉ</span>
              <abbr>*</abbr>
            </label>
            <Select
              isMulti
              value={address}
              name="address"
              isSearchable={false}
              options={cityOptions}
              className="address-multi-select"
              classNamePrefix="select"
              placeholder="Chọn nhiều địa chỉ"
              onChange={(e) => setAddress(e)}
            />
          </InfoContentGroup>
          <InfoContentGroup>
            <label>
              <span>Mô tả công ty</span>
              <abbr>*</abbr>
            </label>
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
                    <textarea
                      name="description"
                      defaultValue={description}
                      onChange={() => {}}></textarea>
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
          </InfoContentGroup>
          <InfoContentGroup>
            <label>
              <span>Lí do yêu thích ?</span>
              <abbr>*</abbr>
            </label>
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
                      defaultValue={reason}
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
          </InfoContentGroup>
          <InfoContentGroup>
            <label>
              <span>Chuyên môn</span>
              <abbr>*</abbr>
            </label>
            <Select
              isMulti
              value={specialize}
              name="specialize"
              isSearchable={true}
              options={tagOptions}
              className="specialize-multi-select"
              classNamePrefix="select"
              placeholder="Chọn các tag phù hợp"
              onChange={(e) => setSpecialize(e)}
            />
          </InfoContentGroup>
          <ButtonGroup>
            <button type="submit">Cập nhật</button>
            <button type="reset" onClick={() => setReload((prev) => !prev)}>
              Khôi phục
            </button>
          </ButtonGroup>
        </form>
        <InfoCompanyLogo>
          <img src={"../" + company.thumbnail} alt="logo-company" />
        </InfoCompanyLogo>
      </InfoCompanyMain>
    </InfoContainer>
  ) : (
    <div>loading</div>
  );
};

export default InfoCompany;
