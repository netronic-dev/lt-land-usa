import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
    name: "searchParams",
    initialState: {
        params: "",
    },
    reducers: {
        addSearchParamsData(state, action) {
            state.params = action.payload;
        },
    },
});

export const { addSearchParamsData } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
export const searchParams = (state) => state.searchParams.params;
