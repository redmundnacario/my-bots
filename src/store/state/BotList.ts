import { BotListDataType } from "@models/entities";

import { botsListData } from "../../temporary/botsListData";

export interface BotsListState {
    data: BotListDataType;
}

export const initialState: BotsListState = {
    data: botsListData,
};
