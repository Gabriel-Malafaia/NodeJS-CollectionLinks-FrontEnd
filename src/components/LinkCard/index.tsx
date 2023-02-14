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

const DashCard = ({ title, url, description, createdAt }: IDashCard) => {
  const Date = createdAt.slice(0, 10).split("-").reverse().join("-");

  return (
    <Card sx={{ maxWidth: 320, width: "100%", maxHeight: "100%" }}>
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
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DashCard;
