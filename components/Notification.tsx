import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import styles from "../styles/Home.module.css";

import { SocketContext } from "../Context";

const Notifications = () => {
  //   const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    //   {/* {call.isReceivingCall && !callAccepted && ( */}
    //   {/* <h1>{call.name} is calling:</h1> */}
    //   {/* <Button variant="contained" color="primary" onClick={answerCall}> */}
    //   {/* </Button> */}
    <>
      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h2> Notification &rarr;</h2>
        <p>Check here updates related to your call</p>
      </a>
    </>
    //   {/* )} */}
  );
};

export default Notifications;
