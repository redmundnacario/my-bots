import BotList from "@components/bot/BotList";
import WithBotListData, { WithBotListDataType } from "@hoc/withBotListData";
import WithUser, { WithUserType } from "@hoc/withUser";

import styles from "@styles/pages/HomeIndexPage.module.css";

const HomeIndexPage: React.FC<WithUserType & WithBotListDataType> = ({
  data = undefined,
  currentUser = undefined,
}) => {
  return (
    <div className={styles.homePage}>
      <BotList data={data} currentUser={currentUser} />
    </div>
  );
};

export default WithUser(WithBotListData(HomeIndexPage));
