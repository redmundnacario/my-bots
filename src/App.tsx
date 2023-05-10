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
import BotIndexPage from "@pages/bots/botIndexPage";
import BotListIndexPage from "@pages/bots/botListIndexPage";
import NotFoundPage from "@pages/notFound";
import { setUser } from "@store/reducers/User";

import styles from "@styles/App.module.css";
import Spinner from "@components/common/Spinner";

const App: React.FC<WithUserType> = ({
    currentUser = null,
    isLoading = false,
    setIsLoading = () => {},
}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(true);
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef!.onSnapshot((snapShot) => {
                    const { email } = snapShot.data() as { email: string };

                    dispatch(setUser(email));
                });
                setIsLoading(false);
            } else {
                dispatch(setUser(userAuth));
                setIsLoading(false);
            }
        });
        // eslint-disable-next-line
    }, []);
    console.log(isLoading);
    return (
        <div className={styles.app}>
            <Navbar />
            <Routes>
                <Route
                    path="/bots"
                    element={validateUserInApp(isLoading, <BotListIndexPage />)}
                />
                <Route
                    path="/"
                    element={rerouteUser(
                        currentUser,
                        isLoading,
                        <SignInPage />
                    )}
                />
                <Route
                    path="signUp"
                    element={rerouteUser(
                        currentUser,
                        isLoading,
                        <SignUpPage />
                    )}
                />
                <Route
                    path="bots/:botId"
                    element={validateUserInApp(isLoading, <BotIndexPage />)}
                />
                <Route
                    path="bots/edit/:botId"
                    element={validateUserInApp(isLoading, <EditBotPage />)}
                />
                <Route
                    path="bots/add"
                    element={validateUserInApp(isLoading, <AddBotPage />)}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

const rerouteUser = (
    currentUser: string | null,
    isLoading: boolean,
    element: ReactElement
): ReactElement => {
    if (isLoading) {
        return <Spinner isPage={true} />;
    }
    return currentUser ? <Navigate to="/bots" /> : element;
};

const validateUserInApp = (
    isLoading: boolean,
    element: ReactElement
): ReactElement => {
    if (isLoading) {
        return <Spinner isPage={true} />;
    }
    return element;
};

export default WithUser(App);
