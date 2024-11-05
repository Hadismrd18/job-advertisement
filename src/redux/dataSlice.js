import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const dataSlice = createSlice({
  name: "allData",
  initialState: data,
  reducers: {
    filterAdd: (state, action) => {
      return state.filter((ad) => {
        const isLanguageExist = ad.languages.includes(action.payload);
        const isToolsExist = ad.tools.includes(action.payload);
        const isRoleExist = ad.role === action.payload;
        const isLevelExist = ad.level === action.payload;
        return isLanguageExist || isToolsExist || isRoleExist || isLevelExist;
      });
    },
    filterRemove: (state, action) => {
      return state.filter((ad) => {
        console.log(action.payload);
        const isLanguageExist = action.payload.some((item) => {
          return ad.languages.includes(item);
        });
        const isToolsExist = action.payload.some((item) => {
          return ad.tools.includes(item);
        });
        const isRoleExist = action.payload.includes(ad.role);
        const isLevelExist = action.payload.includes(ad.level);
        console.log(isLanguageExist, isLevelExist, isRoleExist, isToolsExist);
        if (action.payload == []) {
          return data;
        }
        return isLanguageExist || isToolsExist || isRoleExist || isLevelExist;
      });
    },
    filterClear: (state, action) => {
      return data;
    },
  },
});

export const { filterAdd, filterRemove, filterClear } = dataSlice.actions;
export default dataSlice.reducer;
