import StyledFormCard from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const FormCard = () => {
  return (
    <StyledFormCard>
      <TextField label="Título" variant="outlined" />
      <TextField label="Descrição" multiline rows={4} />
      <TextField label="Url" multiline rows={2} />
      <Button variant="contained" endIcon={<SendIcon />}>
        Cadastrar Link
      </Button>
    </StyledFormCard>
  );
};

export default FormCard;
