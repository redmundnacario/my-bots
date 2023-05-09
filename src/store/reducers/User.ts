import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { currentUserType } from "@models/entities";
import { initialState } from "@store/state/User";

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<currentUserType>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
