import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainMenuDrawer from "./components/MainMenuDrawer";

import AppRoutes from "./components/AppRoutes";



const navItems = ["Home", "About", "Contact", "Logout"];

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Base Template
          </Typography>
         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
      </AppBar>
      <BrowserRouter>
      <MainMenuDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Toolbar />
        <Routes>
            {AppRoutes.map((route) => (
              <Route exact path={route.path} key={route.path}  element={
                <route.component />}
              />
            ))}
          </Routes>
        <Toolbar />
      </Box>
      </BrowserRouter>
    </Box>
  );
}
