import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  width: 100%;
  border: 1px solid rgb(25, 118, 210, 0.5);
  color: #1976d2;
  text-align: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  text-transform: uppercase;
  transition: ease all 0.3s;

  :hover {
    border-color: #1976d2;
  }
`;

export default StyledButton;
