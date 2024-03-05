import styled from "styled-components";

export const CompanyDetailWrapper = styled.div`
  background-color: var(--light-grey);
  margin-top: 8.5rem;
`;

export const CompanyDetailContainer = styled.div``;

export const EmployerBg = styled.div`
  background: linear-gradient(269.85deg, var(--brown) 0%, var(--black) 54.89%);
`;

export const EmployerContainer = styled.div`
  max-width: 134rem;
  margin: auto;
  padding: 3.2rem 3rem;
  display: flex;
  gap: 2.4rem;

  .company-logo {
    display: block;
    width: 16rem;
    height: 16rem;
    border: 1px solid var(--menu-link);
    border-radius: 0.4rem;
    overflow: hidden;
    background: var(--white);

    img {
      object-fit: contain;
    }
  }
`;

export const EmployerInfo = styled.div`
  h1 {
    font-size: 2.8rem;
    padding-bottom: 0.8rem;
    color: var(--white);
    line-height: 5rem;
  }
`;

export const EmployerGroup = styled.div`
  display: flex;
`;

export const EmployerShow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: var(--white);
  line-height: 2.4rem;
  margin-right: 2.4rem;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--menu-link);
  }

  .quantity {
    text-decoration: underline;
  }
`;

export const EmployerButtons = styled.div`
  padding-top: 2.4rem;

  button {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    border: 1px solid var(--red);
    margin-right: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 4.2rem;
    gap: 0.8rem;
  }

  .btn-follow,
  .btn-followed,
  .btn-unfollow {
    background: var(--white);
    color: var(--red);

    &:hover {
      background: var(--white-red);
    }
  }

  .follow-group {
    display: inline-block;
    .btn-unfollow {
      display: none;
    }

    &:hover .btn-followed {
      display: none;
    }

    &:hover .btn-unfollow {
      display: flex;
    }
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  max-width: 134rem;
  align-items: flex-start;
  padding-block: 3.2rem;
  margin: auto;
  padding-inline: 3rem;
`;

export const CompanyInfoMain = styled.main`
  flex: 1;
`;

export const GeneralInformation = styled.section`
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0px 6px 32px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.2rem;
    color: var(--black);
    padding-bottom: 1.6rem;
    border-bottom: 1px dashed var(--footer-head);
  }

  .general-body {
    padding-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.6rem;

    .general-title {
      font-size: 1.4rem;
      color: var(--dark-grey);
      padding-bottom: 0.4rem;
    }

    p {
      color: var(--black);
      font-size: 1.6rem;
    }
  }
`;

export const CompanyReasons = styled.section`
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0px 6px 32px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;
  padding-bottom: 3.2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.2rem;
    color: var(--black);
    padding-bottom: 1.6rem;
    border-bottom: 1px dashed var(--footer-head);
  }

  ul {
    font-size: 1.6rem;
    font-weight: 400;
    margin-block: 0.8rem;
    padding-left: 1.8rem;
    padding-bottom: 1.6rem;
    border-bottom: 1px dashed var(--footer-head);

    li {
      list-style-type: disc;
      padding-block: 0.4rem;

      &::marker {
        color: var(--red);
      }
    }
  }

  .company-path {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.6rem;
    color: var(--hyperlink);
  }
`;

export const CompanySpecialize = styled.section`
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0px 6px 32px rgba(0, 0, 0, 0.08);
  padding: 2.4rem;
  padding-bottom: 3.2rem;

  h2 {
    font-size: 2.2rem;
    color: var(--black);
    padding-bottom: 1.6rem;
    border-bottom: 1px dashed var(--footer-head);
  }

  p {
    padding-top: 1.6rem;
    font-size: 1.6rem;
    color: var(--black);
  }

  ul {
    padding-block: 1.6rem;
    display: flex;
    align-items: baseline;
    gap: 0.4rem;

    a {
      padding: 0.4rem 1rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      border: 1px solid var(--dark-grey);
      color: var(--border-tag);
      transition: all 0.2s;

      &:hover {
        color: var(--border-tag);
        border-color: var(--border-tag);
      }
    }
  }
`;

export const CompanyDetailAside = styled.aside`
  padding-left: 2.8rem;
  width: 33.33%;
  position: sticky;
  top: 10rem;

  h2 {
    font-size: 2.2rem;
    padding: 1.2rem 0 2.4rem;
  }
`;

export const JobListing = styled.div`
  overflow-y: scroll;
  height: 70vh;
`;

export const JobCard = styled.div`
  background: var(--i-light-warning-color);
  border-radius: 0.8rem;
  padding-top: 1.6rem;
  padding-inline: 1.2rem;
  border: 1px solid var(--i-light-red);

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .posted-time {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--menu-link);
  }

  h3 {
    margin-top: 1.2rem;
    font-size: 1.8rem;
    color: var(--black);
  }

  .company-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-block: 0.8rem;

    .company-logo {
      display: block;
      width: 4.8rem;
      height: 4.8rem;
      overflow: hidden;
      border-radius: 0.4rem;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--silver-grey);

      img {
        background: var(--white);
        object-fit: contain;
      }
    }

    .company-name {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--rich-grey);
    }
  }

  .job-salary {
    span.salary-show {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--success-color);
    }

    a.salary-hide {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--rich-grey);
      text-decoration: underline;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  .border-dash {
    border-top: 1px dashed var(--silver-grey);
    margin-block: 1.2rem;
  }

  .company-overview {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .overview-item {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.4rem;
      color: var(--rich-grey);

      svg {
        width: 1.6rem;
        height: 1.6rem;
        color: var(--menu-link);
      }
    }
  }
  ul {
    margin-top: 1.2rem;
    padding-bottom: 1.6rem;
    display: flex;
    align-items: baseline;
    gap: 0.4rem;

    a {
      padding: 0.4rem 1rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      border: 1px solid var(--dark-grey);
      color: var(--border-tag);
      transition: all 0.2s;
      display: block;

      &:hover {
        color: var(--border-tag);
        border-color: var(--border-tag);
      }
    }
  }
`;
