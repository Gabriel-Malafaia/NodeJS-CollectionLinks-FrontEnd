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
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: red; */
  gap: 2rem;
  width: 100%;
`;

export { HomeContainer, CardList };
