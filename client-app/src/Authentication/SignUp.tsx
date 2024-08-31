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
import { createUser } from "../data/user";
import { dispatcher } from "../Store/Hooks";
import { showToast } from "../Store/Slices/Toast/Toast";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = dispatcher();
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<number>(-1);

  const addUser = async () => {
    const response: any = await createUser(
      userId,
      password,
      name,
      mobile,
      email
    );
    if (response && response.status === 200) {
      if (response.data.status.includes("added successfully")) {
        dispatch(
          showToast({
            msg: "Account created successfully!",
            open: true,
            duration: 2000,
            type: "succees",
          })
        );
        navigate("/sign-in");
      }
    }
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
          background: "#050e18",
          width: "400px",
        }}
        padding="20px"
        spacing={2}
      >
        <Typography fontSize="24px" color="#ffffff" fontWeight="600">
          Sign up
        </Typography>
        <Stack spacing={1}>
          <Typography>Full Name</Typography>
          <TextField
            variant="outlined"
            onChange={(input) => setName(input.target.value)}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography>User ID</Typography>
          <TextField
            variant="outlined"
            onChange={(input) => setUserId(input.target.value)}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography>Mobile</Typography>
          <TextField
            variant="outlined"
            onChange={(input) => setMobile(parseInt(input.target.value))}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography>Email</Typography>
          <TextField
            variant="outlined"
            onChange={(input) => setEmail(input.target.value)}
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
        <Button variant="contained" onClick={() => addUser()}>
          Sign Up
        </Button>
        <Stack direction="row" alignItems="center">
          <Typography>Already have an account?</Typography>
          <Link to={"/sign-in"}>
            <Button size="small">Sign in</Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
