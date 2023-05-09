import { useNavigate } from "react-router-dom";

import WithUser, { WithUserType } from "@hoc/withUser";
import Button from "./Button";

import styles from "@styles/components/common/Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "@googleFirebase/firebase.utils";

const Navbar: React.FC<WithUserType> = ({ currentUser }) => {
    const navigate = useNavigate();
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
                {currentUser && (
                    <div>
                        <Button
                            content="🚪 Logout"
                            handleClick={() => {
                                signOut(auth)
                                    .then(() => {
                                        // code for redirect user to Log-in page
                                        // ...
                                        navigate("/signIn");
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                                // dispatch(setUser(null));
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WithUser(Navbar);
