import { ChangeEvent } from "react";

import styles from "@styles/components/common/Input.module.css";

type FormInputType = {
    id: string;
    label?: string;
    name: string;
    value: string;
    type?: "text" | "password" | "email";
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

const Input: React.FC<FormInputType> = ({
    id,
    label,
    name,
    value,
    type = "text",
    handleChange,
    required = false,
}) => (
    <div>
        {label ? (
            <label className={styles.formInputLabel} htmlFor={id}>
                {label}
            </label>
        ) : null}
        <input
            className={styles.formInput}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
            required={required}
        />
    </div>
);

export default Input;
