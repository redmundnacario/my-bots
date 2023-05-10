import React from "react";

import styles from "@styles/components/common/Spinner.module.css";

type SpinnerType = {
    isPage?: boolean;
};

const Spinner: React.FC<SpinnerType> = ({ isPage = false }) => {
    if (!isPage) {
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}></div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}></div>
            </div>
        </div>
    );
};

export default Spinner;
