import styled from "styled-components";

export const JobDetailWrapper = styled.div`
  background-color: var(--light-grey);
  position: relative;
`;

export const JobDetailCircle = styled.div`
  clip-path: ellipse(85% 48% at 39% 23%);
  background: linear-gradient(269.85deg, var(--brown) 0%, var(--black) 54.89%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 46rem;
`;

export const JobDetailContainer = styled.div`
  max-width: 134rem;
  margin: auto;
  margin-top: 8.5rem;
  padding-inline: 3rem;
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 998;
`;

export const JobDetailRight = styled.main`
  flex: 1;
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
`;

export const JobDetailHeader = styled.div`
  background: var(--white);
  padding-inline: 2rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  position: sticky;
  top: 8rem;

  h1 {
    color: var(--black);
    font-size: 2.8rem;
    padding-top: 2.4rem;
  }

  p {
    margin-top: 1.6rem;
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    color: var(--rich-grey);
  }

  .job-salary {
    span.salary-show {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.8rem;
      padding-bottom: 1.2rem;
      border-bottom: 1px dashed var(--silver-grey);
      font-weight: 600;
      color: var(--success-color);
    }

    a.salary-hide {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.8rem;
      padding-bottom: 1.2rem;
      border-bottom: 1px dashed var(--silver-grey);
      font-weight: 500;
      color: var(--rich-grey);
      text-decoration: underline;
    }
  }
`;

export const JobDetailRecruitment = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  padding-bottom: 1.2rem;

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

export const JobDetailBody = styled.div`
  background: var(--white);
  padding: 1.2rem 2rem 2.4rem;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0px 2.8rem 3.2rem rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .job-info {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: var(--rich-grey);
    gap: 0.8rem;

    svg {
      color: var(--dark-grey);
    }
  }

  .job-tags {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: 1.4rem;
    color: var(--rich-grey);
    margin-top: 0.8rem;

    ul {
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
  }
`;

export const BorderDash = styled.div`
  border-top: 1px dashed var(--silver-grey);
  margin-block: 2.4rem;
`;

export const JobDetailOverview = styled.section`
  border-radius: 8px;
  background: var(--white);
  margin-top: 2rem;
  padding: 1.2rem 2rem;
  box-shadow: 0px 2.8rem 3.2rem rgba(0, 0, 0, 0.08);

  .overview-item {
    margin-block: 1.2rem;

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
  }
`;

export const JobDetailLeft = styled.aside`
  min-width: 42.3rem;
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
  position: sticky;
  top: 8rem;
  margin-left: 2.4rem;
  background: var(--white);
  border-radius: 0.8rem;
  padding: 2.4rem 2rem;
  box-shadow: 0px 2.8rem 3.2rem rgba(0, 0, 0, 0.08);
`;

export const JobDetailEmployer = styled.div`
  display: flex;
  gap: 1.2rem;

  .company-logo {
    width: 12rem;
    height: 12rem;
    border-radius: 0.4rem;
    overflow: hidden;
    border: 1px solid var(--silver-grey);

    img {
      object-fit: contain;
    }
  }

  .company-info {
    h3 {
      font-size: 1.8rem;
      padding-top: 0.4rem;
      color: var(--black);
    }

    a {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: var(--hyperlink);
      gap: 0.8rem;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  & + p {
    margin-top: 2rem;
    color: var(--rich-grey);
    font-size: 1.6rem;
  }
`;

export const JobDetailEmployerInfo = styled.div`
  margin-top: 1.6rem;

  .employer-item {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    padding-block: 0.8rem;
    gap: 9rem;

    &:not(:last-child) {
      border-bottom: 1px dashed var(--silver-grey);
    }

    .company-title {
      color: var(--dark-grey);
    }
  }
`;
