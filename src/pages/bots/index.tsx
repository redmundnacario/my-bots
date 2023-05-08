import React from "react";

import BotCard from "@components/bot/BotCard";
import WithBotData, { WithBotDataType } from "@hoc/withBotData";

import styles from "@styles/pages/bot/BotIndexPage.module.css";

const BotIndexPage: React.FC<WithBotDataType> = ({
    data = undefined,
    botId = undefined,
}) => {
    if (botId === undefined) {
        return <p>Bot not found!</p>;
    }

    return (
        <div className={styles.container}>
            {data !== undefined ? (
                <BotCard data={data} />
            ) : (
                <p>Bot not found!</p>
            )}
        </div>
    );
};

export default WithBotData(BotIndexPage);
