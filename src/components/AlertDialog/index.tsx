import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDashContext } from "../../contexts/DashContext";

export interface AlertDialog {
  id: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}

const AlertDialog = ({ state, setState, text, id }: AlertDialog) => {
  const { deleteLink } = useDashContext();

  const handleClose = () => setState(false);
  const handleDelete = () => {
    deleteLink(id);
    setState(false);
  };

  return (
    <div>
      <Dialog
        open={state}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deletar Link?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Sim</Button>
          <Button onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
