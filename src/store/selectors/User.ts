import type { RootState } from "@store/index";
import type { UserState } from "@store/state/User";
import { createSelector } from "reselect";

export const selectState = (state: RootState): UserState => state.user;

export const selectUserState = createSelector(
    [selectState],
    (state) => state.currentUser
);
