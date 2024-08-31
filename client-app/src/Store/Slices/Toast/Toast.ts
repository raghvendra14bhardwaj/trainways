import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  open: boolean;
  duration: number;
  type: string;
  width: string;
  msg: string;
}

const initialState: ToastState = {
  open: false,
  duration: 5000,
  type: "success",
  width: "100%",
  msg: "",
};

export const ToastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Partial<ToastState>>) => {
      state.open = action.payload.open ?? state.open;
      state.duration = action.payload.duration ?? state.duration;
      state.type = action.payload.type ?? state.type;
      state.width = action.payload.width ?? state.width;
      state.msg = action.payload.msg ?? state.msg;
    },
  },
});

export const { showToast } = ToastSlice.actions;
export default ToastSlice.reducer;
