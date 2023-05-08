import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { BotDataType, CreateBotFormType } from "@models/entities";
import { initialState } from "@store/state/BotList";

export const botListSlice = createSlice({
    name: "botList",
    initialState,
    reducers: {
        appendBot: (state, action: PayloadAction<CreateBotFormType>) => {
            state.data.push({ ...action.payload, id: state.data.length + 1 });
        },
        removeBot: (state, action: PayloadAction<BotDataType>) => {
            const newList = state.data.filter(
                (article) => article.id !== action.payload.id
            );
            state.data = newList;
        },
        editBot: (state, action: PayloadAction<BotDataType>) => {
            const newList = state.data.filter(
                (article) => article.id !== action.payload.id
            );
            newList.push(action.payload);

            state.data = newList.sort((a, b) => {
                return a.id - b.id;
            });
        },
    },
});

export const { appendBot, removeBot, editBot } = botListSlice.actions;

export default botListSlice.reducer;
