import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 2.4rem;
`;

export const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.4rem;
`;

export const DashboardCard = styled.div`
  background: var(--white);
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);

  h2 {
    font-size: 2.4rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
  }

  .hide {
    opacity: 0;
  }

  svg {
    width: 7.2rem;
    height: 7.2rem;

    &.job {
      color: #10be06;
    }

    &.cv {
      color: #000bff;
    }

    &.follow {
      color: #ff0b0b;
    }
  }
`;

export const DashboardChart = styled.div``;
