import React from "react";

import BotCardForm from "@components/bot/BotCardForm";
import WithEditBot, { WithEditBotType } from "@hoc/withEditBot";

import styles from "@styles/pages/bot/BotIndexPage.module.css";

const EditBotPage: React.FC<WithEditBotType> = ({
    data = undefined,
    formData = undefined,
    handleChange = () => {},
    handleSave = () => {},
}) => {
    return (
        <div className={styles.container}>
            {data !== undefined ? (
                <BotCardForm
                    title={`Edit ${data.name}`}
                    formData={formData!}
                    handleChange={handleChange}
                    handleSave={handleSave}
                />
            ) : (
                <p>Bot not found!</p>
            )}
        </div>
    );
};

export default WithEditBot(EditBotPage);
