import StyledFormCard from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCardSchema } from "../../../services/validations/links";
import { useDashContext } from "../../../contexts/DashContext";
import { ICreateCardForm } from "../../../interface/Links";

const FormCard = () => {
  const formOptions = { resolver: yupResolver(createCardSchema) };
  const { createLink } = useDashContext();

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
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Cadastrar Link
      </Button>
    </StyledFormCard>
  );
};

export default FormCard;
