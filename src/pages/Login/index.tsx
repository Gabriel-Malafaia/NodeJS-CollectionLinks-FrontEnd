import Text from "../../styles/Typography";
import Logo from "../../assets/logo.png";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { StyledLogo, StyledHomeContainer } from "./style";
import {
  StyledFormLogin,
  StyledContainerLogin,
} from "../../styles/components/Container/ContainerLogin";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setLoading(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <StyledHomeContainer>
      <StyledLogo>
        <img src={Logo} alt="Img" />
        <Text tag="h1" fontSize="text1" color="white">
          Collection Links
        </Text>
      </StyledLogo>
      <StyledContainerLogin>
        <StyledFormLogin>
          <TextField fullWidth label="Email" variant="standard" required />
          <FormControl fullWidth variant="standard" required>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <LoadingButton
            fullWidth
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            <span>Login</span>
          </LoadingButton>
        </StyledFormLogin>

        <div className="form__register">
          <Text tag="span" color="grey4">
            OU
          </Text>
          <Button fullWidth variant="outlined" href="/register">
            Cadastre-se
          </Button>
        </div>
      </StyledContainerLogin>
    </StyledHomeContainer>
  );
};

export default Login;
