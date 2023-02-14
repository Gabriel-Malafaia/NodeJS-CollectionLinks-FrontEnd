import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IDashCard } from "../../interface/Home";
import { useState } from "react";
import AlertDialog from "../AlertDialog";

const DashCard = ({ title, url, description, createdAt, id }: IDashCard) => {
  const [deleteCard, setDeleteCard] = useState(false);
  const Date = createdAt.slice(0, 10).split("-").reverse().join("-");

  const handleDelete = () => {
    setDeleteCard(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 310, width: "100%", maxHeight: "50%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#0004CA" }} aria-label="recipe">
              {title[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          }
          title={title}
          subheader={Date}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description || "..."}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <AlertDialog
        id={id}
        state={deleteCard}
        setState={setDeleteCard}
        text={
          "Ao deletar esse link, você não terá mais acesso a ele em seus registros!"
        }
      />
    </>
  );
};

export default DashCard;
