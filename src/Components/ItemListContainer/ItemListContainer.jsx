import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ bienvenida }) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.greeting}>
        <h2>{bienvenida}</h2>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1677111771/sublitorre_nq0ewq.png"
          alt="sublitorre"
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
