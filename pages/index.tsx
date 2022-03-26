import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Cap1 from "../components/Cap1";
import Cap2 from "../components/Cap2";
import Cap3 from "../components/Cap3";
import Cap4 from "../components/Cap4";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Historia del diseño gráfico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header styles={styles} />
      <Cap1 />
      <Cap2 />
      <Cap3 />
      <Cap4 />
      {/* <div className={styles.content}></div>{" "} */}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
