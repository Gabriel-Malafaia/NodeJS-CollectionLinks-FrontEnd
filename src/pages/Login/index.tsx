import Text from "../../styles/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import StyledButton from "../../styles/components/Button";
import StyledForm from "./style";
import { StyledContainerForm } from "../../styles/components/Container/ContainerLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../services/validations/user";
import { ILoginForm } from "../../interface/Home";
import { useHomeContext } from "../../contexts/UserContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useHomeContext();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formOptions = { resolver: yupResolver(loginSchema) };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>(formOptions);

  return (
    <StyledContainerForm>
      <StyledForm>
        <TextField fullWidth label="Email" variant="standard" required />
        <FormControl fullWidth variant="standard" required>
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <Input
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
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Login</span>
        </LoadingButton>
      </StyledForm>

      <div className="form__register">
        <Text tag="span" color="grey4">
          OU
        </Text>
        <StyledButton to={"/register"}>Cadastre-se</StyledButton>
      </div>
    </StyledContainerForm>
  );
};

export default Login;
