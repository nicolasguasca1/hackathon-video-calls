import { useCallback, useEffect, useState } from "react";
import React from "react";
import styles from "../styles/Home.module.css";

// import videojs from "video.js";
// import "videojs-youtube";

const VideoPlayer = (props: any) => {
  //   const [videoEl, setVideoEl] = useState(null);
  //   const onVideo = useCallback((el) => {
  //     setVideoEl(el);
  //   }, []);

  //   useEffect(() => {
  //     if (videoEl == null) return;
  //     const player = videojs(videoEl, props);
  //     return () => {
  //       player.dispose();
  //     };
  //   }, [props, videoEl]);

  return (
    <>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>VideoPlayer &rarr;</h2>
        <p>Click here to start a video call</p>
      </a>
    </>
  );
};

export default VideoPlayer;
