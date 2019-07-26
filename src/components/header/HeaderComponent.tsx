import * as React from "react";
import { useState } from "react";
import { Router, Link } from "@reach/router";
import {StyledAppBar, StyledMenuList} from './HeaderStyles';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Drawer,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import {
  Home as HomeIcon,
  Mail as MailIcon,
  Menu as MenuIcon
} from "@material-ui/icons";


export const HeaderComponent: React.FunctionComponent = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <React.Fragment>
      <StyledAppBar position="static" color="default" className="app-bar">
        <Toolbar>
          <IconButton
            className='menu-button'
            color="inherit"
            aria-label="Menu"
            onClick={() => toggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={'styles.grow'}>
            MSI React Seed
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
      <Drawer open={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
        <StyledMenuList>
          <Link
            to="/"
            onClick={() => setMenuIsOpen(false)}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </MenuItem>
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuIsOpen(false)}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </MenuItem>
          </Link>
        </StyledMenuList>
      </Drawer>
    </React.Fragment>
  );
};
