import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

import Navbar from "@components/common/Navbar";
import EditBotPage from "@pages/bots/edit";
import AddBotPage from "@pages/bots/add";
import BotIndexPage from "@pages/bots";
import HomeIndexPage from "@pages/index";
import { persistor, store } from "@store/index";

import styles from "@styles/App.module.css";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div className={styles.app}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomeIndexPage />} />
                        <Route path="bots/:botId" element={<BotIndexPage />} />
                        <Route
                            path="bots/edit/:botId"
                            element={<EditBotPage />}
                        />
                        <Route path="bots/add" element={<AddBotPage />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
