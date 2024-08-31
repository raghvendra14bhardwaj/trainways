import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Common/Header/Header";
import NavigationMenu from "./Common/NavigationMenu/NavigationMenu";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Toast from "./Common/Toast/Toast";

function App() {
  // const dispatch= useDispatch();
  // const theme = useSelector(
  //   (state: { theme: { darkmode: boolean } }) => state.theme
  // );
  return (
    <ThemeProvider theme={darkTheme}>
      <Toast />
      <Header />
      <NavigationMenu />
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/sign-in"} element={<Login />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
