import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./UserDataSlice";
import searchParamsSlice from "./searchParamsSlice";

export default configureStore({
    reducer: {
        userData: UserDataSlice,
        searchParams: searchParamsSlice,
    },
});
