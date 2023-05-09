import React from "react";
import { useSelector } from "react-redux";

import { BotListDataType } from "../models/entities";
import { selectBotsListState } from "@store/selectors/BotList";

export type WithBotListDataType = {
  data?: BotListDataType;
};

const WithBotListData = <T,>(
  Component: React.ComponentType<T>
): React.ComponentType<T & WithBotListDataType> => {
  const ComponentWithBotListData: React.ComponentType<
    T & WithBotListDataType
  > = (props: T) => {
    const data = useSelector(selectBotsListState);

    return <Component {...props} data={data} />;
  };

  return ComponentWithBotListData;
};

export default WithBotListData;
