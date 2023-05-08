import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { BotDataType } from "@models/entities";
import { selectSingleBotById } from "@store/selectors/BotList";
import { RootState } from "@store/index";

export type WithBotDataType = {
  data?: BotDataType;
  botId?: string;
};

const WithBotData = <T,>(
  Component: React.ComponentType<T>
): React.ComponentType<T & WithBotDataType> => {
  const ComponentWithBotData: React.ComponentType<T & WithBotDataType> = (
    props: T
  ) => {
    const params = useParams();
    const { botId } = params;

    const data = useSelector((state: RootState) =>
      selectSingleBotById(state, parseInt(params.botId!, 10))
    );

    return <Component {...props} data={data} botId={botId} />;
  };

  return ComponentWithBotData;
};

export default WithBotData;
