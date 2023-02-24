import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Box, Grid } from "@mui/material";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <ItemListContainer
        bienvenida={"Bienvenido, conozca mas sobre productos de sublimación"}
      />
      <Grid container className={styles.contenedor}>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductCard
            title="Vaso Térmico"
            img={
              "https://res.cloudinary.com/dkkrcphjh/image/upload/v1677155595/jarro-termico-10_mndemy.jpg"
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductCard
            title="Taza de Cerámica"
            img={
              "https://res.cloudinary.com/dkkrcphjh/image/upload/v1677155595/taza-polimero-01_czyqzu.jpg"
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductCard
            title="Mate"
            img={
              "https://res.cloudinary.com/dkkrcphjh/image/upload/v1677158277/mate-01_ycdncn.jpg"
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
