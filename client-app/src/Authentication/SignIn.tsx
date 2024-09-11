import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { authenticateUser } from "../data/user";
import { dispatcher } from "../Store/Hooks";
import {
  authenticated,
  notAuthenticated,
} from "../Store/Slices/Users/Authenticate";
import { showToast } from "../Store/Slices/Toast/Toast";

export default function Login() {
  const dispatch = dispatcher();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authenticate = async () => {
    const response: any = await authenticateUser(userId, password);
    if (response && response.status === 200) {
      if (response.data.status === "User authenticated") {
        dispatch(authenticated());
        navigate("/home");
      } else {
        dispatch(
          showToast({
            msg: "User does not exists",
            open: true,
            duration: 5000,
            type: "error",
          })
        );
        dispatch(notAuthenticated());
      }
    } else
      dispatch(
        showToast({
          msg: "Backend Error",
          open: true,
          duration: 5000,
          type: "error",
        })
      );
  };
  return (
    <Stack
      sx={{
        backgroundColor: "#06101c",
        top: "0",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: "1200",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        sx={{
          border: "1px solid rgba(51, 60, 77, 0.6)",
          background: "rgba(5, 7, 10, 0.4)",
          width: "400px",
        }}
        padding="20px"
        spacing={2}
      >
        <Typography fontSize="30px" color="#ffffff" fontWeight="600">
          Sign in
        </Typography>
        <Stack spacing={1}>
          <Typography>User ID</Typography>
          <TextField
            variant="outlined"
            onChange={(input) => setUserId(input.target.value)}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography>Password</Typography>
          <FormControl variant="outlined">
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(input) => setPassword(input.target.value)}
            />
          </FormControl>
        </Stack>
        <Button
          variant="contained"
          sx={{ marginTop: "30px !important" }}
          onClick={() => authenticate()}
        >
          Sign in
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          marginTop="20px"
        >
          <Typography>Don't have an account?</Typography>
          <Link to={"/sign-up"}>
            <Button size="small" variant="text">
              Sign up
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
