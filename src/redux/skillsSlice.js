import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";
console.log(data);
const skillSlice = createSlice({
  name: "skill",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const isExist = state.find((item) => item === action.payload);
      if (!isExist) {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      const currentSkill = state.find((item) => item === action.payload);
      return state.filter((item) => item !== currentSkill);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { add, remove, clear, removeByName } = skillSlice.actions;
export default skillSlice.reducer;
