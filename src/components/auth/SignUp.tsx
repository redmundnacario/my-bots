import React, { ChangeEvent, useId, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@components/common/Button";
import Input from "@components/common/Input";
import {
    auth,
    createUserProfileDocument,
} from "@googleFirebase/firebase.utils";

// import "./sign-up.component.scss";

const SignUp = () => {
    const navigate = useNavigate();
    const signUpId = useId();
    const [info, setInfo] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { displayName, email, password, confirmPassword } = info;

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
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                navigate("/");
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">Create Account</h2>
            <form>
                <Input
                    id={`${signUpId}-displayName`}
                    name="displayName"
                    type="text"
                    value={displayName}
                    handleChange={handleChange}
                    label="Name"
                    required
                />

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
            <Button
                content="Sign Up"
                handleClick={handleSubmit}
                variant="Primary"
            />
        </div>
    );
};

export default SignUp;
