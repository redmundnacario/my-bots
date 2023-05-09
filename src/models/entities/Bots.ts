export type BotDataType = {
    id: number;
    name: string;
    purpose: string;
    avatar?: string;
};

export type BotListDataType = BotDataType[];

export type CreateBotFormType = Omit<BotDataType, "id">;
