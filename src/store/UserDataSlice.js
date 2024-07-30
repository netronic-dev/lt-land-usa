import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        userName: '',
        userEmail: '',
        userPhone: '',
        userChoosenData: '',
        userChoosenTime: '',
    },
    reducers: {
        addUserData(state, action) {
            state.userName = action.payload.name;
            state.userEmail = action.payload.email;
            state.userPhone = action.payload.phone;
            state.userChoosenData = action.payload.date;
            state.userChoosenTime = action.payload.time;
        },
    },
});

export const { addUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
