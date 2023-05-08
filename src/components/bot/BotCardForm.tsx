import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Card from "@components/common/Card";
import { BotDataType, CreateBotFormType } from "@models/entities";

type BotCardFormType = {
    // data?: BotDataType;
    title: string;
    formData: BotDataType | CreateBotFormType;
    handleChange: (e: ChangeEvent<HTMLInputElement>, label: string) => void;
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
                    <label htmlFor="botName">Name</label>
                    <input
                        type="text"
                        id="botName"
                        value={formData.name}
                        onChange={(e) => handleChange(e, "name")}
                    />

                    <label htmlFor="botPurpose">Purpose</label>
                    <input
                        type="text"
                        id="botPurpose"
                        value={formData.purpose}
                        onChange={(e) => handleChange(e, "purpose")}
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
