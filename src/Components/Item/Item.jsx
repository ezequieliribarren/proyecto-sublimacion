import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import x from "./Item.module.css"
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
     <Card className={x.card} >
      <CardMedia className={x.cardMedia}
        sx={{ height: 190}}
        image={element.img}
      />
      <CardContent className={x.cardContent}>
        <Typography gutterBottom variant="h5" component="div" color="black" marginBottom={2.5}>
          {element.title}
        </Typography>
        <Typography variant="body2" color="black">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions className={x.cardActions}>
        <Link className={x.link} to={`/item/${element.id}`}>
        <Button size="small" variant="contained" color="primary">
          Ver detalle
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
