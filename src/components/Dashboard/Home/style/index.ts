import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5rem;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

`;

export { HomeContainer, CardList };
