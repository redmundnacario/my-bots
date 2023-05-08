import React from "react";

import BotCardForm from "@components/bot/BotCardForm";
import WithCreateBot, { WithCreateBotType } from "@hoc/withCreateBot";

import styles from "@styles/pages/bot/BotIndexPage.module.css";

const AddBotPage: React.FC<WithCreateBotType> = ({
    formData = undefined,
    handleChange = () => {},
    handleSave = () => {},
}) => {
    return (
        <div className={styles.container}>
            <BotCardForm
                title={`Create Bot`}
                formData={formData!}
                handleChange={handleChange}
                handleSave={handleSave}
            />
        </div>
    );
};

export default WithCreateBot(AddBotPage);
