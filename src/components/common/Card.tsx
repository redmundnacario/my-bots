import React, { ReactElement } from "react";

import styles from "@styles/components/common/Card.module.css";

type CardType = {
    header?: string | ReactElement;
    body: string | ReactElement;
    footer?: string | ReactElement;
};

const Card: React.FC<CardType> = ({ header, body, footer }) => {
    return (
        <div className={styles.card}>
            {header && <div className={styles.cardContent}>{header}</div>}
            <div>{body}</div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
};

export default Card;
