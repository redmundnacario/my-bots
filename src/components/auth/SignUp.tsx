import React, { ChangeEvent, useId, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import {
    auth,
    createUserProfileDocument,
} from "@googleFirebase/firebase.utils";

import styles from "@styles/components/auth/SignIn.module.css";

const SignUp = () => {
    const navigate = useNavigate();
    const signUpId = useId();
    const [info, setInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { email, password, confirmPassword } = info;

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user).then(() => {
                setInfo({
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
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
        <div className="sign-up">
            <form>
                <Input
                    id={`${signUpId}-email`}
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />

                <Input
                    id={`${signUpId}-password`}
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />

                <Input
                    id={`${signUpId}-confirmPassword`}
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
            </form>
            <div className={styles.buttons}>
                <Button
                    content="Sign Up"
                    handleClick={handleSubmit}
                    variant="Primary"
                />
            </div>
        </div>
    );
};

export default SignUp;
