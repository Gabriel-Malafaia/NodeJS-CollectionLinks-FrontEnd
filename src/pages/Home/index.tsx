import Text from "../../styles/Typography";
import Logo from "../../assets/logo.png";
import { Outlet } from "react-router-dom";
import { StyledHomeContainer, StyledLogo } from "./style";
import { UserContextProvider } from "../../contexts/UserContext";

const Home = () => {
  return (
    <UserContextProvider>
      <StyledHomeContainer>
        <StyledLogo>
          <img src={Logo} alt="Img" />
          <Text tag="h1" fontSize="text1" color="white">
            Collection Links
          </Text>
        </StyledLogo>
        <Outlet />
      </StyledHomeContainer>
    </UserContextProvider>
  );
};

export default Home;
