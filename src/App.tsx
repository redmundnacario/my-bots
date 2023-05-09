import { ReactElement, useEffect } from "react";
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
import NotFoundPage from "@pages/notFound";
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
                    element={userGateIfAbsent(currentUser, <HomeIndexPage />)}
                />
                <Route
                    path="signIn"
                    element={userGateIfPresent(currentUser, <SignInPage />)}
                />
                <Route
                    path="signUp"
                    element={userGateIfPresent(currentUser, <SignUpPage />)}
                />
                <Route
                    path="bots/:botId"
                    element={userGateIfAbsent(currentUser, <BotIndexPage />)}
                />
                <Route
                    path="bots/edit/:botId"
                    element={userGateIfAbsent(currentUser, <EditBotPage />)}
                />
                <Route
                    path="bots/add"
                    element={userGateIfAbsent(currentUser, <AddBotPage />)}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

const userGateIfPresent = (
    currentUser: string | null,
    element: ReactElement
): ReactElement => {
    return currentUser ? <Navigate to="/" /> : element;
};

const userGateIfAbsent = (
    currentUser: string | null,
    element: ReactElement
): ReactElement => {
    return !currentUser ? <Navigate to="/signIn" /> : element;
};

export default WithUser(App);
