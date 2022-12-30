import * as React from "react";

import { connect } from "react-redux";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainMenuDrawer from "./components/MainMenuDrawer";
import SignIn from "./components/SignIn";
import AppRoutes from "./components/AppRoutes";

import { loginAction, logoutAction } from "./actions/commonActions";

const navItems = ["Home", "About", "Contact", "Logout"];

const Demo = (props) => {
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
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {props.loggedin &&
                  navItems.map((item) => (
                    <Button
                      key={item}
                      sx={{ color: "#fff" }}
                      onClick={
                        item === "Logout"
                          ? () => {
                              props.logoutAction();
                            }
                          : () => {}
                      }
                    >
                      {item}
                    </Button>
                  ))}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </AppBar>
      <BrowserRouter>
        {props.loggedin ? (
          <>
            <MainMenuDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Routes>
                {AppRoutes.map((route) => (
                  <Route
                    exact
                    path={route.path}
                    key={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
              <Toolbar />
            </Box>
          </>
        ) : (
          <SignIn />
        )}
      </BrowserRouter>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: () => dispatch(loginAction),
  logoutAction: () => dispatch(logoutAction),
});
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
