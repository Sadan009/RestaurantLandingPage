import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
import { CommentRounded } from "@mui/icons-material";
import { PhoneRounded } from "@mui/icons-material";
import { ShoppingCartRounded } from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "About",
      icon: <Info />,
    },
    {
      text: "Testimonials",
      icon: <CommentRounded />,
    },
    {
      text: "Contact",
      icon: <PhoneRounded />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRounded />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onCLick={() => setOpenMenu(false)}
          onkeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => {
              return (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text}></ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
