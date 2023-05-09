import { BOT_AVATAR_LIST } from "@constants/bot";

export const getAvatarName = (): string =>
  BOT_AVATAR_LIST[Math.floor(Math.random() * BOT_AVATAR_LIST.length)];
