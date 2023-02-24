import { BsFillCartFill } from "react-icons/bs";
import styles from "./CardWidget.module.css";
const CardWidget = () => {
  return (
    <div className={styles.carrito}>
      <BsFillCartFill size={20} />
    </div>
  );
};

export default CardWidget;
