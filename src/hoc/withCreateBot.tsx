import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { CreateBotFormType } from "@models/entities";
import { appendBot } from "@store/reducers/BotList";

export type WithCreateBotType = {
  formData?: CreateBotFormType;
  handleChange?: (e: ChangeEvent<HTMLInputElement>, label: string) => void;
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>, label: string) => {
      setFormData({ ...formData, [label]: e.target.value });
    };

    const handleSave = () => {
      dispatch(appendBot(formData));
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
