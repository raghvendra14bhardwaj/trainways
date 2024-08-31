import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Store";

export const dispatcher = useDispatch.withTypes<AppDispatch>();
export const selector = useSelector.withTypes<RootState>();
