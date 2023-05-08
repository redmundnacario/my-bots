import { useNavigate } from "react-router-dom";

import styles from "@styles/components/common/Navbar.module.css";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.navbar}>
            <h1
                onClick={() => {
                    navigate("/");
                }}
            >
                &#129302; My Bots &#129302;
            </h1>
        </div>
    );
};

export default Navbar;
