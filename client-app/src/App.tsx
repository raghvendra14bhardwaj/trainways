import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Header from "./Common/Header/Header";
import NavigationMenu from "./Common/NavigationMenu/NavigationMenu";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Toast from "./Common/Toast/Toast";

function App() {
  const theme = useTheme();
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";
  // const dispatch= useDispatch();
  // const theme = useSelector(
  //   (state: { theme: { darkmode: boolean } }) => state.theme
  // );
  return (
    <ThemeProvider theme={darkTheme}>
      <Toast />
      {!isAuthPage && (
        <Box sx={{ display: "flex" }}>
          <Header />
          <NavigationMenu />
          <Box
            sx={{
              backgroundColor: darkTheme.palette.background.default,
              minHeight: "91.1vh",
              minWidth: "95.75vw",
              top: "64px",
              position: "absolute",
              left: "65px",
            }}
          >
            <Routes>
              <Route path={"/home"} element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      )}
      <Routes>
        <Route path={"/sign-in"} element={<Login />} />
        <Route path={"/sign-up"} element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
