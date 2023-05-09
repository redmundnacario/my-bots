import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import { BotListDataType } from "@models/entities";
import BotCard from "./BotCard";

import styles from "@styles/components/bot/BotList.module.css";

type BotListType = {
    data?: BotListDataType;
};

const BotList: React.FC<BotListType> = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.actionBar}>
                <h2>&#128206; List</h2>
                <Button
                    content="➕ Add"
                    handleClick={() => {
                        navigate("/bots/add");
                    }}
                />
            </div>
            <div>
                {data!.length > 0 ? (
                    data!.map((item, index) => (
                        <BotCard key={index} data={item} />
                    ))
                ) : (
                    <div>No bots found.</div>
                )}
            </div>
        </div>
    );
};

export default BotList;
