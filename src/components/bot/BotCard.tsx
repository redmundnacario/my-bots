import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Card from "@components/common/Card";
import { BotDataType } from "@models/entities";
import { removeBot } from "@store/reducers/BotList";

type BotCardType = {
    data: BotDataType;
};

const BotCard: React.FC<BotCardType> = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Card
            avatar={data.avatar}
            header={
                <h3 onClick={() => navigate(`/bots/${data.id}`)}>
                    {data.name}
                </h3>
            }
            body={<p>Purpose: {data.purpose}</p>}
            footer={
                <>
                    <Button
                        variant="Primary"
                        content="✏️ Edit"
                        handleClick={() => {
                            navigate(`/bots/edit/${data.id}`);
                        }}
                    />
                    <Button
                        variant="Danger"
                        content="🗑️ Delete"
                        handleClick={() => {
                            dispatch(removeBot(data));
                        }}
                    />
                </>
            }
        />
    );
};

export default BotCard;
