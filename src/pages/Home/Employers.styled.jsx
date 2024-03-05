import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmployerHeading = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  padding-bottom: 4.8rem;
  padding-top: 12rem;
`;

export const EmployerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem 2.8rem;
  padding-bottom: 12rem;
`;

export const EmployerCard = styled(Link)`
  border-radius: 0.8rem;
  border: 1px solid var(--footer-head);
  background: linear-gradient(167deg, #f8f8f8 2.38%, #fff 70.43%);
  position: relative;
  display: flex;
  flex-direction: column;

  .name-company {
    color: var(--black);
    font-size: 1.8rem;
    text-align: center;
    margin-top: 2.4rem;
    font-weight: 600;
  }
`;

export const EmployerFigure = styled.figure`
  width: 16rem;
  height: 16rem;
  margin: auto;
  background: var(--white);
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
  margin-top: 3.2rem;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const EmployerTags = styled.div`
  padding: 1.6rem 1.6rem 3rem;
  flex: 1;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;

    li {
      color: #414042;
      background-color: #f7f7f7;
      padding: 4px 12px;
      font-size: 1.4rem;
      border-radius: 2rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const EmployerFooter = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  .employer-address {
    font-size: 1.4rem;
  }

  .number-of-jobs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    svg:first-child {
      color: #0ab305;
    }

    span {
      font-size: 1.6rem;
    }
  }
`;

export const EmployerGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
