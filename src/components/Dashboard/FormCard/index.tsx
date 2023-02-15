import StyledFormCard from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCardSchema } from "../../../services/validations/links";
import { useDashContext } from "../../../contexts/DashContext";
import { ICreateCardForm } from "../../../interface/Links";
import { LoadingButton } from "@mui/lab";

const FormCard = () => {
  const formOptions = { resolver: yupResolver(createCardSchema) };
  const { createLink, loading } = useDashContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICreateCardForm>(formOptions);

  return (
    <StyledFormCard onSubmit={handleSubmit(createLink)}>
      <TextField
        required
        error={!!errors.title}
        helperText={errors.title?.message}
        {...register("title")}
        label="Título"
        variant="outlined"
      />
      <TextField
        {...register("description")}
        label="Descrição (Opcional)"
        multiline
        rows={4}
      />
      <TextField
        required
        error={!!errors.url}
        helperText={errors.url?.message}
        {...register("url")}
        label="Url"
        multiline
        rows={2}
      />
      <LoadingButton
        sx={{width: '45%'}}
        type="submit"
        fullWidth
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
      >
        <span>Cadastrar Link</span>
      </LoadingButton>
    </StyledFormCard>
  );
};

export default FormCard;
