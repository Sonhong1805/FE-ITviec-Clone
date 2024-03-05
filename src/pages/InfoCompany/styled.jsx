import styled from "styled-components";

export const InfoContainer = styled.div`
  padding: 2.4rem;
`;

export const InfoCompanyHead = styled.div`
  background: var(--white);
  display: flex;
  padding: 1.2rem 1.6rem;
  gap: 1.2rem;
  border: 1px solid var(--silver-grey);
  border-radius: 0.4rem;
  margin-bottom: 1rem;
`;

export const InfoCompanyMain = styled.div`
  display: flex;

  form {
    flex: 1;

    label {
      display: block;
      margin-bottom: 0.4rem;
      line-height: 2.1rem;
      font-size: 1.6rem;
    }

    abbr {
      color: rgb(var(--i-danger-rgb));
      padding-inline: 0.4rem;
    }
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
  margin-top: 1.2rem;
`;

export const InfoFormGroup = styled.div`
  flex: 1;

  .link-website {
    color: var(--hyperlink);
    display: flex;
    align-items: center;
    gap: 1.2rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  input {
    border: 1px solid var(--silver-grey);
    width: 100%;
    padding: 1.1rem 1.6rem;
    font-size: 1.6rem;
    border-radius: 0.4rem;
    font-weight: 400;
  }
`;

export const InfoFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`;

export const InfoContentGroup = styled.div`
  margin-bottom: 2.4rem;

  .text-input {
    display: flex;
    gap: 1.2rem;
  }

  input,
  textarea {
    flex: 1;
    padding: 0 1.6rem;
    border: 1px solid var(--silver-grey);
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 0.8rem;
    height: 4.2rem;
    text-overflow: ellipsis;
  }

  textarea {
    min-height: 10rem;
    resize: none;
  }

  .create {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    color: var(--white);
    border: 1px solid var(--red);
    justify-content: center;
    gap: 0.8rem;
    background: var(--yellow);
    margin-bottom: 1.6rem;
  }

  ul {
    font-size: 1.6rem;
    font-weight: 400;
    margin-block: 0.8rem;
    padding-left: 1.8rem;

    .text-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2.4rem;

      span {
        flex: 1;
      }

      .delete {
        padding: 0.4rem;
        border-radius: 0.4rem;
        display: flex;
        background: var(--red);

        svg {
          color: var(--white);
        }
      }
    }

    li {
      list-style-type: disc;
      padding-block: 0.4rem;

      &::marker {
        color: var(--red);
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;

  button {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.1rem 2.4rem;
    min-width: 18rem;
    border-radius: 0.4rem;
    color: var(--white);
    border: 1px solid var(--red);
    width: 25%;
    justify-content: center;
    gap: 0.8rem;
    background: var(--red);
    margin-bottom: 1.6rem;

    &:hover {
      background: var(--dark-red);
    }
  }
`;

export const InfoCompanyLogo = styled.div`
  width: 22rem;
  height: 22rem;
  border: 1px solid var(--dark-grey);
  border-radius: 0.8rem;
  overflow: hidden;
  margin-inline: 3rem;
  margin-top: 1.2rem;
  position: sticky;
  top: 1.2rem;

  img {
    object-fit: contain;
  }
`;
