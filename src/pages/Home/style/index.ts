import styled from "styled-components";

const StyledHomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-primary);
  background: linear-gradient(
    90deg,
    rgba(0, 4, 202, 1) 7%,
    rgba(0, 121, 163, 1) 66%,
    rgba(0, 182, 142, 1) 100%
  );
  height: 100vh;
  width: 100%;
  padding: 0 1rem;
  gap: 2rem;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
  }
`;

export { StyledHomeContainer, StyledLogo };
