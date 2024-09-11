import { Stack, Typography, useTheme } from "@mui/material";
import BookTicket from "./BookTicket";

function Home() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="91vh"
      spacing={4}
      sx={{
        background:
          "radial-gradient(circle, rgba(1,200,255,0.2) 0%, rgba(0,0,0,0) 60%);",
      }}
    >
      <BookTicket />
      <Stack>
        <Typography fontWeight={800} fontSize={38}>
          India's Nº 1 destination for train tickets*
        </Typography>
        <Typography fontWeight={400} fontSize={18}>
          Discover India with great savings and easy booking
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Home;
