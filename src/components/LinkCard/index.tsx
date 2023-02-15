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
import AlertDialog from "../AlertDialog";
import EditDialog from "../EditDialog";
import { useDashContext } from "../../contexts/DashContext";
import { useState } from "react";
import { IDashCard } from "../../interface/Links";
import StyledAnchor from "./style";

const DashCard = ({
  title,
  url,
  description,
  createdAt,
  id,
  isFavorite,
}: IDashCard) => {
  const [deleteCard, setDeleteCard] = useState(false);
  const [editCard, setEditCard] = useState(false);
  const Date = createdAt.slice(0, 10).split("-").reverse().join("-");
  const { favoriteLink } = useDashContext();

  const handleEdit = () => setEditCard(true);
  const handleDelete = () => setDeleteCard(true);

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#0004CA" }} aria-label="recipe">
              {title[0]}
            </Avatar>
          }
          action={
            <IconButton
              onClick={() => favoriteLink(id, isFavorite)}
              aria-label="add to favorites"
            >
              <FavoriteIcon color={isFavorite ? "error" : "action"} />
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
          <IconButton onClick={handleEdit} aria-label="share">
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <StyledAnchor href={url} target="_blank">
            Acessar
          </StyledAnchor>
        </CardActions>
      </Card>
      {deleteCard && (
        <AlertDialog
          id={id}
          state={deleteCard}
          setState={setDeleteCard}
          text={
            "Ao deletar esse link, você não terá mais acesso a ele em seus registros!"
          }
        />
      )}
      {editCard && (
        <EditDialog
          title={title}
          description={description}
          url={url}
          id={id}
          state={editCard}
          setState={setEditCard}
          isFavorite={isFavorite}
        />
      )}
    </>
  );
};

export default DashCard;
