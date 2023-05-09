import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import { BotListDataType, currentUserType } from "@models/entities";
import BotCard from "./BotCard";

import styles from "@styles/components/bot/BotList.module.css";

type BotListType = {
    data?: BotListDataType;
    currentUser?: currentUserType;
};

const BotList: React.FC<BotListType> = ({ data, currentUser }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.actionBar}>
                <div className={styles.header}>
                    <h2>&#128206; List</h2>
                </div>
                <div className={styles.header}>
                    <h4>Hello {currentUser}!</h4>
                </div>
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
