import { useNavigate, useLocation } from "react-router-dom";

import WithUser, { WithUserType } from "@hoc/withUser";
import Button from "./Button";

import styles from "@styles/components/common/Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "@googleFirebase/firebase.utils";

const Navbar: React.FC<WithUserType> = ({ currentUser }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.navbar}>
            <div className={styles.navigationItems}>
                <h1
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    &#129302; My Bots &#129302;
                </h1>
                {currentUser ? (
                    <div>
                        <Button
                            content="🚪 Logout"
                            handleClick={() => {
                                signOut(auth)
                                    .then(() => {
                                        navigate("/signIn");
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }}
                        />
                    </div>
                ) : location.pathname === "/signIn" ? (
                    <div>
                        <Button
                            content="Sign Up"
                            handleClick={() => {
                                navigate("/signUp");
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        <Button
                            content="Sign In"
                            handleClick={() => {
                                navigate("/signIn");
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WithUser(Navbar);
