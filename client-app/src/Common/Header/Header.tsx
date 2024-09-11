import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../Images/logo.svg";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { selector } from "../../Store/Hooks";

function Header() {
  const theme = useTheme();
  const authenticated = selector((state) => state.authenticator);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);
  return (
    <AppBar position="fixed" sx={{ zIndex: "2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={logo} alt="logo" style={{ height: "60px", width: "100px" }} />
        <Typography fontWeight={theme.typography.fontWeightBold}>
          {time.toLocaleString()}
        </Typography>

        {authenticated ? (
          <Typography fontWeight={theme.typography.fontWeightMedium}>
            Hi, Raghvendra
          </Typography>
        ) : (
          <Link
            to={"/sign-in"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccountCircleIcon />
              <Typography marginLeft={1}> Sign in</Typography>
            </IconButton>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
