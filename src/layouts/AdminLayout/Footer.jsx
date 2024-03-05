import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          <p>
            Want to post a job but have not had an Admin Account yet? Contact us
            at:
          </p>
          <p>
            Quang Ninh: (+84) 327 842 451 - Email:
            nguyenhongson18052003@gmail.com
          </p>
        </div>
        <div>
          <p>Copyright © Nguyen Hong Son</p>
          <p>Phone: 032784251</p>
          <p>FAQ</p>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: rgba(33, 37, 41, 1);
  padding: 1.6rem 1rem;
`;
const FooterContainer = styled.div`
  color: #929497;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  padding: 0.7rem 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
