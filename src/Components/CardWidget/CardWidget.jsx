import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import x from "./CardWidget.module.css";
const CardWidget = () => {
  const { getTotalQuantity } = useContext( CartContext )

  const total = getTotalQuantity()

  return (
    <Link to="cart">
    <div className={x.carrito}>
      <BsFillCartFill size={20} />
      <span className={x.nroCarrito}>{total}</span>
    </div>
    </Link>
  );
};

export default CardWidget;
