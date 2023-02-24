import styles from "./ProductCard.module.css";
const ProductCard = ({ title = "no tiene titulo", img }) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.divImgProduct}>
        <h1>{title}</h1>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
