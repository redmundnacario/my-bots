import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Card from "@components/common/Card";
import { BotDataType, CreateBotFormType } from "@models/entities";
import Input from "@components/common/Input";

type BotCardFormType = {
    title: string;
    formData: BotDataType | CreateBotFormType;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
};

const BotCardForm: React.FC<BotCardFormType> = ({
    title,
    formData,
    handleChange,
    handleSave,
}) => {
    const navigate = useNavigate();

    return (
        <Card
            header={<h3>{title}</h3>}
            body={
                <form id="BotForm">
                    <Input
                        id="botName"
                        label={"Name"}
                        name={"name"}
                        value={formData.name}
                        handleChange={handleChange}
                    />
                    <Input
                        id="botPurpose"
                        label={"Purpose"}
                        name={"purpose"}
                        value={formData.purpose}
                        handleChange={handleChange}
                    />
                </form>
            }
            footer={
                <>
                    <Button
                        variant="Primary"
                        content="💾 Save"
                        handleClick={() => {
                            handleSave();
                            navigate(-1);
                        }}
                    />
                    <Button
                        variant="Danger"
                        content="❌ Cancel"
                        handleClick={() => {
                            navigate(-1);
                        }}
                    />
                </>
            }
        />
    );
};

export default BotCardForm;
