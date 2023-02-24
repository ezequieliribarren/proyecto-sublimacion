import CardWidget from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div>
        <ul className={styles.listNav}>
          <li>
            <img
              className={styles.logoNav}
              src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1677109707/logoSubliTorre_xb1hqe.png"
              alt="logo"
            />
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>

      <div>
        <CardWidget />
      </div>
    </div>
  );
};

export default Navbar;
