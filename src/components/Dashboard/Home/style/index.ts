import styled from "styled-components";

const HomeContainer = styled.div`

  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8rem;
  margin-top: 3rem;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export { HomeContainer, CardList };
