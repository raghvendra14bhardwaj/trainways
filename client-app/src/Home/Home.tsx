import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import BookTicket from "./BookTicket";

function Home() {
  const theme = useTheme();
  return (
    <Stack justifyContent="center" alignItems="center">
      <BookTicket />
    </Stack>
  );
}

export default Home;
