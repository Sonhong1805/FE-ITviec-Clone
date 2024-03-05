import styled from "styled-components";
import robbyOops from "/assets/svg/robby-404.svg";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <img src={robbyOops} alt="robby-oops" />
      <ErrorAlert>
        <h1>Oops!</h1>
        <h2>This page has found a better job.</h2>
        <p>
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
          exist.
        </p>
        <p>Find your own better job today!</p>
        <SearchForm />
        <p>
          Or go back to <Link to={"/"}>Home</Link>
        </p>
      </ErrorAlert>
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div`
  max-width: 110rem;
  margin: auto;
  margin-top: 15%;
  padding: 0 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;

  img {
    width: 16rem;
    height: 16rem;
    object-fit: contain;
  }
`;

const ErrorAlert = styled.div`
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: var(--black);
    font-weight: 700;
  }

  h2 {
    font-size: 2.2rem;
    color: var(--black);
    margin-bottom: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.6rem;
    color: var(--rich-grey);
    line-height: 2.5rem;
  }

  form {
    margin-block: 2.4rem;

    button {
      width: 13rem;
    }
  }

  a {
    color: var(--hyperlink);
  }
`;
