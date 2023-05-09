import React, { ChangeEvent, useId, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import { auth } from "@googleFirebase/firebase.utils";

import styles from "@styles/components/auth/SignIn.module.css";

const SignIn = () => {
    const navigate = useNavigate();
    const signInId = useId();
    const [info, setInfo] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        // query document
        try {
            await auth
                .signInWithEmailAndPassword(info.email, info.password)
                .then(() => {
                    setInfo({ email: "", password: "" });
                    navigate("/");
                });
        } catch (error) {
            alert((error as Error).message);
            console.error((error as Error).message);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfo({ ...info, [name]: value });
    };

    return (
        <div>
            <form>
                <Input
                    id={`${signInId}-Email`}
                    name="email"
                    type="email"
                    value={info.email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />

                <Input
                    id={`${signInId}-Password`}
                    name="password"
                    type="password"
                    value={info.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
            </form>
            <div className={styles.buttons}>
                <Button
                    content="Sign In"
                    handleClick={handleSubmit}
                    variant="Primary"
                />
            </div>
        </div>
    );
};

export default SignIn;
