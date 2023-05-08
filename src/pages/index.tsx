import BotList from "@components/bot/BotList";
import WithBotListData, { WithBotListDataType } from "@hoc/withBotListData";

import styles from "@styles/pages/HomeIndexPage.module.css";

const HomeIndexPage: React.FC<WithBotListDataType> = ({ data = undefined }) => {
  return (
    <div className={styles.homePage}>
      <BotList data={data} />
    </div>
  );
};

export default WithBotListData(HomeIndexPage);
