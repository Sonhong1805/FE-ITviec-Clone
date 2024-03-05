import styled from "styled-components";

export const PreviewJobContainer = styled.div`
  flex: 1;
  background-color: var(--white);
  border-radius: 8px;
  position: sticky;
  top: 6.8rem;
  margin-bottom: 1.6rem;
`;

export const PreviewJobHeader = styled.div`
  padding: 2.4rem 2.4rem 0rem;
`;

export const PreviewJobCompany = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .logo-company {
    width: 10rem;
    height: 10rem;
    display: block;
    object-fit: contain;
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid var(--silver-grey);

    img {
      object-fit: contain;
    }
  }

  .job-info {
    display: flex;
    flex-direction: column;
    gap: 1.35rem;

    .job-name {
      font-size: 2.2rem;
      line-height: 3.3rem;
      color: var(--rich-grey);
    }

    .company-name {
      color: var(--rich-grey);
      font-size: 1.6rem;
    }

    .job-salary {
      span.salary-show {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 1.6rem;
        padding-bottom: 1.2rem;

        font-weight: 600;
        color: var(--success-color);
      }

      a.salary-hide {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 1.6rem;
        padding-bottom: 1.2rem;
        font-weight: 500;
        color: var(--rich-grey);
        text-decoration: underline;
      }
    }
  }
`;

export const PreviewJobRecruitment = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--silver-grey);
  padding-bottom: 2rem;

  button {
    flex: 1;
    background: var(--red);
    color: var(--white);
    padding: 1rem 2rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 4px;
  }

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--red);
    margin-left: 1.6rem;
    cursor: pointer;
  }
`;

export const PreviewJobBody = styled.div`
  padding: 2.4rem;
  overflow-y: scroll;
  max-height: calc(100vh - 30rem);
`;

export const BorderDash = styled.div`
  border-top: 1px dashed var(--silver-grey);
  margin-block: 2.4rem;
`;

export const PreviewJobOverview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .overview-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      color: var(--dark-grey);
    }

    span {
      font-size: 1.4rem;
      color: var(--rich-grey);
      display: block;
    }

    ul {
      display: flex;
      align-items: baseline;
      gap: 0.4rem;
      margin-left: 1.2rem;

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
  }
`;

export const PreviewJobReasons = styled.section`
  h2 {
    font-size: 2.2rem;
    color: var(--black);
    line-height: 3.3rem;
  }

  ul {
    font-size: 1.6rem;
    font-weight: 400;
    margin-block: 0.8rem;
    padding-left: 1.8rem;

    li {
      list-style-type: disc;
      padding-block: 0.4rem;

      &::marker {
        color: var(--red);
      }
    }
  }
`;

export const PreviewCompanyInfo = styled.section`
  .company-name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2.2rem;
      line-height: 3.3rem;
      color: var(--black);
    }

    a {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--hyperlink);

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }

  .company-intro {
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 1.2rem;
    color: var(--rich-grey);
  }

  .company-grid {
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: var(--black);
    font-size: 1.4rem;
    gap: 1.6rem 2.4rem;

    small {
      color: var(--menu-link);
    }
  }
`;
