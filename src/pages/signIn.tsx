import Card from "@components/common/Card";
import SignIn from "@components/auth/SignIn";

import styles from "@styles/pages/HomeIndexPage.module.css";

const SignInPage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Card header={<h2>Log In</h2>} body={<SignIn />} />
    </div>
  );
};

export default SignInPage;
