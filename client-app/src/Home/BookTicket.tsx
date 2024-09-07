import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import CategoryIcon from "@mui/icons-material/Category";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  categoryMenuOptions,
  classMenuOptions,
  defaultJourneyDetails,
} from "../Common/Constant/Constant";
import { useEffect, useState } from "react";
import { fetchStationList } from "../data/booking";
import { IJourneyDetails } from "../Common/Interface/Interface";
import dayjs from "dayjs";

const filterStations = (keyword: string, stationList: string[]) => {
  let list = stationList.filter((station) =>
    station.toLowerCase().includes(keyword)
  );
  return list;
};

export default function BookTicket() {
  const [stationList, setStaionList] = useState<string[]>([]);
  const [journeyDetails, setJourneyDetails] = useState<IJourneyDetails>({
    ...defaultJourneyDetails,
  });
  const getStationList = async () => {
    const response: any = await fetchStationList();
    if (response.data && response.status === 200) {
      const stationDetails = response.data;
      const originalStationList: string[] = [];
      stationDetails.map((station: any) =>
        originalStationList.push(`${station.en} - ${station.sc}`)
      );
      setStaionList(originalStationList);
    }
  };

  useEffect(() => {
    getStationList();
  }, []);

  return (
    <Card variant="outlined" sx={{ width: "600px", height: "600px" }}>
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 24, fontWeight: 600 }}
        >
          BOOK TICKET
        </Typography>
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <NearMeIcon />
            <Autocomplete
              disablePortal
              noOptionsText="From where"
              filterOptions={(stationList, params) => {
                const { inputValue } = params;
                let filtered: string[] = [];
                if (inputValue.length > 2)
                  filtered = filterStations(inputValue, stationList);
                return filtered;
              }}
              // open={false}
              disableClearable
              disableListWrap
              options={stationList}
              sx={{ width: 500 }}
              renderInput={(params) => <TextField {...params} label="From" />}
              onChange={(event: any, newValue: string | null) => {
                setJourneyDetails({
                  ...journeyDetails,
                  from: newValue!,
                });
              }}
            />
          </Stack>
          <SwapVertIcon />
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon />
            <Autocomplete
              filterOptions={(stationList, params) => {
                const { inputValue } = params;
                let filtered: string[] = [];
                if (inputValue.length > 2)
                  filtered = filterStations(inputValue, stationList);
                return filtered;
              }}
              noOptionsText="To where"
              disablePortal
              disableClearable
              options={stationList}
              sx={{ width: 500 }}
              renderInput={(params) => <TextField {...params} label="To" />}
              onChange={(event: any, newValue: string | null) => {
                setJourneyDetails({
                  ...journeyDetails,
                  to: newValue!,
                });
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CalendarMonthIcon />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: 500 }}
                label="Date Of Journey"
                value={dayjs(journeyDetails.doj, "DDMMYYYY")}
                onChange={(newValue) => {
                  setJourneyDetails({
                    ...journeyDetails,
                    doj: dayjs(newValue!).format("DDMMYYYY"),
                  });
                }}
              />
            </LocalizationProvider>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <FlightClassIcon />
            <FormControl fullWidth>
              <InputLabel>Class</InputLabel>
              <Select
                value={journeyDetails.class}
                label="Class"
                sx={{ width: 500 }}
                onChange={(input) => {
                  setJourneyDetails({
                    ...journeyDetails,
                    class: input.target.value,
                  });
                }}
              >
                {classMenuOptions.map((category) => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            marginBottom="20px"
          >
            <CategoryIcon />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={journeyDetails.category}
                label="Category"
                sx={{ width: 500 }}
                onChange={(input) => {
                  setJourneyDetails({
                    ...journeyDetails,
                    category: input.target.value,
                  });
                }}
              >
                {categoryMenuOptions.map((category) => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "200px", marginTop: "20px" }}
          >
            Search
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
