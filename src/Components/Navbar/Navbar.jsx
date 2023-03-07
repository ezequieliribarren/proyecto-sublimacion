import React from "react";
import CardWidget from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


const Nabvar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

return (
  <AppBar position="fixed">
    <Toolbar>
      {/* HAMBURGUESA */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
<MenuIcon/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
            <MenuItem>
              <Typography textAlign="center">Todos</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Polimero</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Insumos</Typography>
            </MenuItem>
        </Menu>
      </Box>
      <Link to="/">
            <img
              className={styles.logoNav}
              src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1677109707/logoSubliTorre_xb1hqe.png"
              alt="logo"
              />
              </Link>
      {/* ITEMS DEL NAV */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
    <Link to="/" className={styles.buttons}><Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "white",
              textDecoration:"none"
            }}
          >
          TODOS</Button>
          </Link>
          <Link to="/category/polimero" className={styles.buttons}><Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "white",
              textDecoration:"none"
            }}
          >
          POLIMERO</Button>
          </Link>
          
          <Link to="category/insumos" className={styles.buttons}><Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "white",
              
            }}
          >
          INSUMOS</Button>
          </Link>
          
          
          

      </Box>
      <div>
        <CardWidget />
      </div>
    </Toolbar>
  </AppBar>
);
};

export default Nabvar;