import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogHeading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3.2rem;
  padding-inline: 1.2rem;
`;

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1.4rem;
`;

export const BlogCard = styled(Link)`
  margin-inline: 1.2rem;
  border-radius: 8px;
  background: var(--white);
  overflow: hidden;

  &:first-child {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;

    .card-title:first-child {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 2.2rem;
      font-weight: 600;
      color: var(--black);
      margin: 2.4rem 1.2rem 1.2rem;
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      padding: 0 1.2rem 1.2rem;
      font-size: 1.6rem;
      color: var(--menu-link);
    }
  }
`;

export const BlogThumbnail = styled.figure``;

export const BlogCardBody = styled.div`
  margin-block: 1.2rem;

  .card-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 1.6rem;
    color: var(--black);
    margin-inline: 1.2rem;
  }
`;

export const BlogCardFooter = styled.div`
  margin-bottom: 2.4rem;
  color: #0e2eed;
  display: flex;
  gap: 0.8rem;
  padding-inline: 1.2rem;

  span {
    font-size: 1.6rem;
  }
`;
