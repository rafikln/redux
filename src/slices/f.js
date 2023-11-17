import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};

const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    addlist: (state, action) => {
      state.list.push(action.payload);
    },
  },
});
export const { addlist } = listSlice.actions;
export default listSlice.reducer;
