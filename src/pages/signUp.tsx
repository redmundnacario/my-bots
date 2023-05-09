import Card from "@components/common/Card";
import SignUp from "@components/auth/SignUp";

import styles from "@styles/pages/HomeIndexPage.module.css";

const SignUpPage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Card body={<SignUp />} />
    </div>
  );
};

export default SignUpPage;
