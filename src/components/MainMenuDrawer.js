import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";


const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const styles = {
  link: {
    color: 'black',
    textDecoration: 'none',
  }
};
const MainMenuDrawer = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedPath, setselectedPath] = React.useState("/");
  const buttonProps = (value) => ({
    selected: selectedPath === value,
    onClick: () => setselectedPath(value),
  });
  const handleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      open={open}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        
        <List>
          {AppRoutes.map((route, index) => (
            <Link key={index} to = {route.path} style = {styles.link}>
            <ListItem key={route.path} disablePadding>
              <ListItemButton {...buttonProps(route.path)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={route.sidebarName} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["Item 1", "Item 2", "Item 3"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {open ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader> */}
      </Box>
    </Drawer>
  );
};

export default MainMenuDrawer;
