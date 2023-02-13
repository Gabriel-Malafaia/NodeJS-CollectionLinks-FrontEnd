import Text from "../../styles/Typography";
import StyledButton from "../../styles/components/Button";
import StyledForm from "../Login/style";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { StyledContainerForm } from "../../styles/components/Container/ContainerLogin";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IRegisterForm } from "../../interface/Home";
import { registerSchema } from "../../services/validations/user";
import { yupResolver } from "@hookform/resolvers/yup";
import StyledErrorMessage from "./style";
import { useHomeContext } from "../../contexts/UserContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, loading } = useHomeContext();

  const formOptions = { resolver: yupResolver(registerSchema) };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterForm>(formOptions);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <StyledContainerForm>
      <StyledForm onSubmit={handleSubmit(registerUser)}>
        <TextField
          error={!!errors.name}
          {...register("name")}
          fullWidth
          label="Nome"
          variant="standard"
          helperText={errors.name?.message}
        />
        <TextField
          error={!!errors.email}
          {...register("email")}
          fullWidth
          label="Email"
          variant="standard"
          helperText={errors.email?.message}
        />
        <FormControl fullWidth variant="standard">
          <InputLabel
            error={!!errors.password}
            htmlFor="standard-adornment-password"
          >
            Senha
          </InputLabel>
          <Input
            error={!!errors.password}
            {...register("password")}
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
          {!!errors.password && (
            <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>
          )}
        </FormControl>
        <FormControl fullWidth variant="standard">
          <InputLabel
            error={!!errors.confirmPassword}
            htmlFor="standard-adornment-password"
          >
            Confirmar senha
          </InputLabel>
          <Input
            error={!!errors.confirmPassword}
            {...register("confirmPassword")}
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
          {!!errors.confirmPassword && (
            <StyledErrorMessage>
              {errors.confirmPassword?.message}
            </StyledErrorMessage>
          )}
        </FormControl>
        <LoadingButton
          type="submit"
          fullWidth
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Cadastrar</span>
        </LoadingButton>
      </StyledForm>
      <div className="form__register">
        <Text tag="span" color="grey4">
          OU
        </Text>
        <StyledButton to={"/login"}>Login</StyledButton>
      </div>
    </StyledContainerForm>
  );
};

export default Register;
