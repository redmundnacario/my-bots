import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { BotDataType } from "@models/entities";
import { selectSingleBotById } from "@store/selectors/BotList";
import { RootState } from "@store/index";
import { editBot } from "@store/reducers/BotList";

export type WithEditBotType = {
  data?: BotDataType;
  botId?: string;
  formData?: BotDataType;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSave?: () => void;
};

const WithEditBot = <T,>(
  Component: React.ComponentType<T>
): React.ComponentType<T & WithEditBotType> => {
  const ComponentWithEditBot: React.ComponentType<T & WithEditBotType> = (
    props: T
  ) => {
    const dispatch = useDispatch();
    const params = useParams();
    const { botId } = params;

    const data = useSelector((state: RootState) =>
      selectSingleBotById(state, parseInt(botId!, 10))
    );

    const [formData, setFormData] = useState<BotDataType>({ ...data! });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target);
      const { name, value } = e.target;
      console.log(name, value);
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      dispatch(editBot(formData));
    };
    return (
      <Component
        {...props}
        data={data}
        botId={botId}
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    );
  };

  return ComponentWithEditBot;
};

export default WithEditBot;
