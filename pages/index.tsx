import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Cap1 from "../components/Cap1";
import Cap2 from "../components/Cap2";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Historia del diseño gráfico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header styles={styles} />
      {/* <Cap1 /> */}
      <Cap2 />
      <div className={styles.content}></div>
    </div>
  );
};

export default Home;
