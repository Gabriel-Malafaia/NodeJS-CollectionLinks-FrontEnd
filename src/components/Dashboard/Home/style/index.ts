import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    form {
      max-width: none;
      width: 100%;
    }
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;

  .DashCardDiv {
    width: 100%;

    a {
      font-size: 14px;
      cursor: pointer;
    }

    p {
      word-break: break-all;
    }
  }
`;

export { HomeContainer, CardList };
