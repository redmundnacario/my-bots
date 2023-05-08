import type { RootState } from "@store/index";
import type { BotsListState } from "@store/state/BotList";
import { createSelector } from "reselect";

export const selectState = (state: RootState): BotsListState => state.botList;

export const selectBotsListState = createSelector(
    [selectState],
    (state) => state
);

export const selectSingleBotById = createSelector(
    [selectState, (state, id: number) => id],
    (items, id) => items.data.find((item) => item.id === id)
);
