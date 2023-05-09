import React from "react";

import styles from "@styles/components/common/Button.module.css";

type VariantType = "Primary" | "Danger" | undefined;

type ButtonType = {
    variant?: VariantType;
    content: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonType> = ({
    variant = undefined,
    content,
    handleClick,
}) => {
    const setColor = (_variant: VariantType) => {
        switch (_variant) {
            case "Primary":
                return {
                    backgroundColor: "#36c5f0",
                    border: "solid 2px #36c5f0",
                };
            case "Danger":
                return {
                    backgroundColor: "pink",
                    border: "solid 2px pink",
                };
            default:
                return {
                    backgroundColor: "inherit",
                    border: "solid 2px lightgray",
                };
        }
    };

    return (
        <button
            className={styles.button}
            style={setColor(variant)}
            onClick={(e) => handleClick(e)}
        >
            {content}
        </button>
    );
};

export default Button;
