import { AppBar, Box, Divider, IconButton, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../Images/logo2.png"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';


function Header(){
   const theme= useTheme()
    const [time, setTime]= useState(new Date());
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date());
          }, 1000); // Update every second
          return () => clearInterval(interval);
    },[]) 
    return (
        <AppBar position="fixed" >
          <Toolbar sx={{justifyContent:"space-between"}}>
            <img src={logo} alt="logo" style={{height:"60px", width:"100px"}}/>
           
            <Typography fontWeight={theme.typography.fontWeightBold}>{time.toLocaleString()}</Typography>
            
            <Stack direction="row" alignItems="center">
            <Divider orientation="vertical" variant="middle" flexItem  />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            //   onClick={handleDrawerOpen}
            >
              <NotificationsActiveOutlinedIcon/>
            </IconButton>
            <Typography fontWeight={theme.typography.fontWeightMedium}>Raghvendra Bhardwaj</Typography>
            </Stack>
           
          </Toolbar>
        </AppBar>
    )
}

export default Header;