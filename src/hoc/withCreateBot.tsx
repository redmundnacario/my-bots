import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { CreateBotFormType } from "@models/entities";
import { appendBot } from "@store/reducers/BotList";

import { getAvatarName } from "@utilities/bot";

export type WithCreateBotType = {
  formData?: CreateBotFormType;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSave?: () => void;
};

const WithCreateBot = <T,>(
  Component: React.ComponentType<T>
): React.ComponentType<T & WithCreateBotType> => {
  const ComponentWithCreateBot: React.ComponentType<T & WithCreateBotType> = (
    props: T
  ) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<CreateBotFormType>({
      name: "",
      purpose: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      // create avatar
      dispatch(
        appendBot({
          ...formData,
          avatar: `https://api.dicebear.com/6.x/bottts/svg?seed=${getAvatarName()}&size=96`,
        })
      );
    };

    return (
      <Component
        {...props}
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    );
  };

  return ComponentWithCreateBot;
};

export default WithCreateBot;
