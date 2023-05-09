import { currentUserType } from "@models/entities";

export interface UserState {
    currentUser: currentUserType;
}

export const initialState: UserState = {
    currentUser: null,
};
