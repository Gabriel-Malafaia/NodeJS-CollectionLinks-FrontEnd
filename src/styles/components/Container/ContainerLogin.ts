import styled from "styled-components";

const StyledContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: var(--color-white);
  border-radius: 6px;
  gap: 1rem;

  .form__register {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    button {
      border: 2px solid grey;
      width: 100%;
      padding: 8px;
      border-radius: 4px;
    }
  }
`;

const StyledFormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export { StyledContainerLogin, StyledFormLogin };
