import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./CardWidget.module.css";
const CardWidget = () => {
  return (
    <Link to="cart">
    <div className={styles.carrito}>
      <BsFillCartFill size={20} />
      <span>0</span>
    </div>
    </Link>
  );
};

export default CardWidget;
