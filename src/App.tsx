import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "@components/common/Navbar";
import {
    auth,
    createUserProfileDocument,
} from "@googleFirebase/firebase.utils";
import WithUser, { WithUserType } from "@hoc/withUser";
import SignInPage from "@pages/signIn";
import SignUpPage from "@pages/signUp";
import EditBotPage from "@pages/bots/edit";
import AddBotPage from "@pages/bots/add";
import BotIndexPage from "@pages/bots";
import HomeIndexPage from "@pages/index";
import { setUser } from "@store/reducers/User";

import styles from "@styles/App.module.css";

const App: React.FC<WithUserType> = ({ currentUser = null }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef!.onSnapshot((snapShot) => {
                    const { email } = snapShot.data() as { email: string };

                    dispatch(setUser(email));
                });
            } else {
                dispatch(setUser(userAuth));
            }
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.app}>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        !currentUser ? (
                            <Navigate to="/signIn" />
                        ) : (
                            <HomeIndexPage />
                        )
                    }
                />
                <Route
                    path="signIn"
                    element={currentUser ? <Navigate to="/" /> : <SignInPage />}
                />
                <Route
                    path="signUp"
                    element={currentUser ? <Navigate to="/" /> : <SignUpPage />}
                />
                <Route
                    path="bots/:botId"
                    element={
                        !currentUser ? (
                            <Navigate to="/signIn" />
                        ) : (
                            <BotIndexPage />
                        )
                    }
                />
                <Route
                    path="bots/edit/:botId"
                    element={
                        !currentUser ? (
                            <Navigate to="/signIn" />
                        ) : (
                            <EditBotPage />
                        )
                    }
                />
                <Route
                    path="bots/add"
                    element={
                        !currentUser ? (
                            <Navigate to="/signIn" />
                        ) : (
                            <AddBotPage />
                        )
                    }
                />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
};

export default WithUser(App);
