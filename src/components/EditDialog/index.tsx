import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IEditCardForm, IEditDialog } from "../../interface/Links";
import { useDashContext } from "../../contexts/DashContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editCardSchema } from "../../services/validations/links";

const EditDialog = ({
  id,
  title,
  description,
  url,
  isFavorite,
  state,
  setState,
}: IEditDialog) => {
  const handleEdit = (data: IEditCardForm) => {
    editLink(data, id);
    setState(false);
  };

  const { editLink } = useDashContext();
  const formOptions = { resolver: yupResolver(editCardSchema) };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IEditCardForm>(formOptions);

  return (
    <div>
      <Dialog open={state} onClose={() => setState(false)}>
        <DialogTitle>Editar Link</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Altere somente os campos que você deseja editar.
          </DialogContentText>
          {isFavorite && (
            <DialogContentText>
              * Não é possível editar a URL de um link favoritado.
            </DialogContentText>
          )}
          <TextField
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
            autoFocus
            margin="dense"
            id="name"
            label="Título"
            fullWidth
            variant="standard"
            defaultValue={title}
          />

          <TextField
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
            autoFocus
            multiline
            rows={3}
            margin="dense"
            id="name"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={description || ""}
          />

          {!isFavorite && (
            <TextField
              {...register("url")}
              error={!!errors.url}
              helperText={errors.url?.message}
              autoFocus
              multiline
              rows={2}
              margin="dense"
              id="name"
              label="URL"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={url}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setState(false)}>Cancel</Button>
          <Button onClick={handleSubmit(handleEdit)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
