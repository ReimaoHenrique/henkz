import { NextPage } from "next";
import styles from "./songs.module.css";
const Songs: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Songs</h1>
    </div>
  );
};

export default Songs;
