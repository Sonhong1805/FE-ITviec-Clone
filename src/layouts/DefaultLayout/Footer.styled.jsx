import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: linear-gradient(269.85deg, var(--brown) 0%, var(--black) 54.89%);
  padding-top: 4.8rem;
  position: relative;
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  display: flex;
  max-width: 132rem;
  margin: auto;
  margin-bottom: 4.8rem;
`;

export const FooterColumn = styled.div`
  padding-top: 0.8rem;
  padding-inline: 1.2rem;

  h4 {
    color: var(--footer-head);
    font-size: 1.6rem;
    padding-block: 1.6rem;
  }
`;

export const FooterFigure = styled.figure`
  img {
    width: 13.2rem;
  }

  figcaption {
    font-size: 1.6rem;
    color: var(--white);
    font-weight: 400;
  }
`;

export const FooterSocials = styled.ul`
  margin-top: 3.2rem;
  display: flex;

  li {
    width: 4rem;
    height: 4rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-icon);
    border-radius: 100rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    svg {
      color: var(--menu-link);
    }
  }
`;

export const FooterList = styled.ul`
  li {
    color: var(--menu-link);
    font-size: 1.4rem;
    padding-bottom: 1.2rem;
  }
`;

export const FooterContact = styled.ul`
  li {
    color: var(--menu-link);
    font-size: 1.4rem;
    padding-bottom: 1.2rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const FooterDesign = styled.div`
  color: var(--menu-link);
  font-size: 1.4rem;
  padding-block: 2rem;
  text-align: center;
`;

export const FooterSaperate = styled.span`
  height: 1.1rem;
  border: 1px solid var(--menu-link);
  margin-inline: 1.6rem;
`;

export const FooterGrid = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
