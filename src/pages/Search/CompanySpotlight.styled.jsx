import styled from "styled-components";

export const CompanySpotlightWrapper = styled.div`
  height: 10rem;
`;

export const CompanySpotlightContainer = styled.div`
  display: flex;
  background-color: var(--white);
  max-width: 134rem;
  height: 20rem;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  transform: translateY(-10rem);
`;

export const CompanySpotlightItem = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

export const CompanySpotlightThumbnail = styled.figure`
  max-width: 36.6rem;
  overflow: hidden;

  figcaption {
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: var(--warning-color);
    position: absolute;
    top: 0.8rem;
    padding: 0.4rem 1.2rem;
    font-size: 1.4rem;
    color: var(--white);
    font-weight: 600;

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      right: 0%;
      width: 0;
      height: 0;
      border-right: 0.8rem solid transparent;
      border-left: 0;
      left: 0;
      border-top: 0.8rem solid var(--warning-color);
    }
  }
`;

export const CompanySpotlightLogo = styled.div`
  width: 12rem;
  height: 12rem;
  position: absolute;
  top: 50%;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  transform: translateY(-50%);
  img {
    object-fit: contain;
  }
`;

export const CompanySpotlightInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
  font-size: 1.4rem;
  font-weight: 400;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  .company-name {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .company-location {
    display: flex;
    padding-top: 0.8rem;
    gap: 0.8rem;
    color: var(--border-tag);
  }

  p {
    padding-block: 1.6rem;
    color: var(--border-tag);
  }

  .quantity-jobs {
    display: flex;
    color: var(--hyperlink);
  }
`;

export const CompanySpotlightJobs = styled.div`
  border-left: 1px dashed var(--footer-head);
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85%;
  padding: 1.6rem;

  .job-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding-block: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;
  }

  svg {
    color: var(--error-color);
  }
`;
