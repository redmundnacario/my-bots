import React, { ReactElement } from "react";

import styles from "@styles/components/common/Card.module.css";

type CardType = {
    avatar?: string;
    header?: string | ReactElement;
    body: string | ReactElement;
    footer?: string | ReactElement;
};

const Card: React.FC<CardType> = ({ avatar, header, body, footer }) => {
    return (
        <div className={styles.card}>
            {avatar && (
                <div>
                    <img src={avatar} alt={"robot"} />
                </div>
            )}
            <div className={styles.mainCard}>
                {header && <div className={styles.cardContent}>{header}</div>}
                <div>{body}</div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
};

export default Card;
