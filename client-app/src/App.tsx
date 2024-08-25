import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import {ThemeProvider} from "@mui/material/styles"
import Header from './Common/Header/Header';
import NavigationMenu from './Common/NavigationMenu/NavigationMenu';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { lightTheme } from './theme';

function App() {
  // const dispatch= useDispatch();
  // const theme= useSelector((state:{theme:{darkmode: boolean}})=> state.theme);
  return (
    <ThemeProvider theme={lightTheme}>
      <Header/>
      <NavigationMenu/> 
      <Home/>

    </ThemeProvider>
  );
}

export default App;
