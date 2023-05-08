export type BotDataType = {
    id: number;
    name: string;
    purpose: string;
};

export type BotListDataType = BotDataType[];

export type CreateBotFormType = Omit<BotDataType, "id">;
