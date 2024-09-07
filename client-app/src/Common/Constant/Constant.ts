import dayjs from "dayjs";
import { IJourneyDetails } from "../Interface/Interface";

export const categoryMenuOptions = [
  "GENERAL",
  "LADIES",
  "LOWER BIRTH/SR. CITIZEN",
  "PERSON WITH DISABILITY",
  "DUTY PASS",
  "TATKAL",
  "PREMIUM TATKAL",
];
export const classMenuOptions = [
  "All Classes",
  "Anubhuti Class (EA)",
  "AC First Class (1A)",
  "Vistadome AC (EV)",
  "Exec. Chair Class (EC)",
  "First Class (FC)",
  "AC 2 Tier (2A)",
  "AC 3 Tier (3A)",
  "AC 3 Economy (3E)",
  "Vistadome Chair Car (VC)",
  "AC Chair Car (CC)",
  "Sleeper",
  "Vistadome Non AC (VS)",
  "Second Sitting (2S)",
];

//Default Values

/* Default value for journey selection*/
export const defaultJourneyDetails: IJourneyDetails = {
  from: "",
  to: "",
  doj: dayjs().format("DDMMYYYY"),
  class: classMenuOptions[0],
  category: categoryMenuOptions[0],
};
