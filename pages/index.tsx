import { AppBar } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

import VideoPlayer from "../components/VideoPlayer";
import Notifications from "../components/Notification";
import Options from "../components/Options";

// import PlayerCSS from "../components/playerCss";

const Home: NextPage = () => {
  // const videoJsOptions = {
  //   techOrder: ["youtube"],
  //   autoplay: false,
  //   controls: true,
  //   sources: [
  //     {
  //       src: "https://www.youtube.com/watch?v=IxQB14xVas0",
  //       type: "video/youtube"
  //     }
  //   ]
  // };
  return (
    <div className={styles.container}>
      <Head>
        <title>Video-Calls ETH POC</title>
        <meta name="description" content="VIDEO-CALLS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Video Chat App</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <AppBar position="static" color="inherit" className={styles.grid}>
          <a>
            <h2> DECENTRALIZED VIDEO CHAT</h2>
          </a>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
        {/* <PlayerCSS /> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <div>Lomplay</div>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
