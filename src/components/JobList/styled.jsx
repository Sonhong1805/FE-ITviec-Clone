import styled from "styled-components";

export const JobListContainer = styled.div`
  padding-right: 2.5rem;
  width: 41.66666667%;

  &.empty {
    flex: 1;
    padding-right: 0;
  }
`;

export const JobCard = styled.div`
  margin-bottom: 1.6rem;
  background: var(--white);
  padding: 1.6rem 1.2rem 0.8rem;
  border-radius: 8px;
  border: 1px solid transparent;
  position: relative;

  &.active {
    border: 1px solid var(--red);
  }

  &.active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.6rem;
    margin: 0.8rem 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: var(--red);
  }

  &.active::after {
    content: "";
    position: absolute;
    right: -8px;
    bottom: calc(50% - 8px);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid red;
  }

  .posted-time {
    font-size: 1.4rem;
    color: var(--dark-grey);
  }

  .job-name {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 1.2rem;
    display: inline-block;
  }

  .job-company {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-block: 1.2rem;

    .logo-company {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid var(--silver-grey);

      img {
        object-fit: contain;
      }
    }

    .name-company {
      font-size: 1.4rem;
      color: var(--border-tag);
    }
  }

  .job-salary {
    border-bottom: 1px dashed var(--silver-grey);

    span.salary-show {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.8rem;
      padding-bottom: 1.2rem;

      font-weight: 600;
      color: var(--success-color);
    }

    a.salary-hide {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.8rem;
      padding-bottom: 1.2rem;
      font-weight: 500;
      color: var(--rich-grey);
      text-decoration: underline;
    }
  }

  .form-of-work,
  .job-address {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-block: 1.2rem;
    font-size: 1.4rem;

    svg {
      color: var(--dark-grey);
    }
  }

  .job-tags {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-top: 2.4rem;
    padding-bottom: 0.8rem;

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

  .job-label {
    position: absolute;
    top: 1.6rem;
    right: 0;
    background: var(--red);
    padding: 0.4rem 1.2rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 1.4rem;
    color: var(--white);
    font-weight: 600;
    text-transform: uppercase;

    .label-content {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.4rem;

      &::after {
        content: "";
        position: absolute;
        top: 2.4rem;
        right: -1.2rem;
        width: 0;
        height: 0;
        border-left: 0.8rem solid transparent;
        border-top: 0.8rem solid var(--red);
      }
    }

    svg {
      color: var(--yellow);
    }
  }
`;

export const JobEmpty = styled.div`
  margin-bottom: 3.2rem;
  background: var(--white);
  padding-block: 4rem;

  figure {
    text-align: center;

    img {
      width: 16rem;
      height: 16rem;
    }

    figcaption {
      padding-top: 2rem;
      padding-inline: 3.2rem;
      font-size: 2.2rem;
      font-weight: 700;
    }
  }
`;
