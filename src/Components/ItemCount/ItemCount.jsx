import { useState } from "react";
import { Button } from "@mui/material";
import x from "./ItemCount.module.css"

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={x.contador}>
      <Button variant="outlined">{contador}</Button>

      <Button variant="contained" onClick={sumar}>+</Button>

      <Button variant="contained" onClick={restar}>-</Button>

      <Button variant="contained" color="secondary" onClick={ ()=> onAdd(contador) }>Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;

