import x from "./ItemDetail.module.css"
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const ItemDetail = ({ productSelected, onAdd, quantity }) => {

  return (
    <div className={x.contenedorCard}>
    <Card className={x.card} sx={{ width: 400 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image={productSelected.img}
        alt="Producto"
        />
      <CardContent className={x.cardContent}>
        <Typography gutterBottom variant="h3" component="div">
        {productSelected.title}
        </Typography>
        <Typography gutterBottom variant="h4" component="div" className={x.price} sx={{ fontSize: 18 }}>
        PRECIO: $ {productSelected.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, marginTop: 2}}>
        {productSelected.detail}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
        </div>

  
  )
}

export default ItemDetail;
