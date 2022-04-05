import React, { useEffect, useState } from "react";

import { useScrollToBottom } from "../hooks/useScrollToBottom";
import { Data } from "./types";

interface Props {
  message: Data;
  loggedUserId: string | undefined;
}

const MessageBubble = (props: Props) => {
  const { message, loggedUserId } = props;
  const [isCurrentUserMessage, setCurrentUserMessage] = useState<boolean>();

  const messagesEndRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (message.user_id === loggedUserId) {
      setCurrentUserMessage(true);
    }
  }, [message]);

  useScrollToBottom({ element: messagesEndRef, action: message });

  return (
    <div
      style={
        styles.box && isCurrentUserMessage
          ? styles.boxToRight
          : styles.boxToLeft
      }
      key={message.id}
    >
      <div style={styles.imgBox}>
        <div>
          <img style={styles.img} src={`${message.avatar}`}></img>
        </div>
      </div>
      <div style={styles.textBoxLeft}>
        <div style={styles.userName}>
          {message.first_name} {message.last_name}
        </div>
        <div style={styles.message}>{message.message}</div>
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  );
};

type styleType =
  | "box"
  | "boxToLeft"
  | "boxToRight"
  | "imgBox"
  | "img"
  | "textBoxLeft"
  | "textBoxRight"
  | "userName"
  | "message";

const styles = {
  box: {
    display: "flex",
    width: "90%",
    padding: "10px 0",
    margin: "10px auto",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  boxToLeft: {
    display: "flex",
    margin: "10px auto",
    flexDirection: "row",
  },
  boxToRight: {
    display: "flex",
    margin: "10px auto",
    flexDirection: "row-reverse",
  },
  imgBox: {
    margin: "auto 15px 0 0px",
    display: "flex",
  },
  img: {
    width: "50px",
    height: "50px",
    border: "1px solid rgb(174, 194, 227)",
    borderRadius: "50%",
  },
  textBoxLeft: {
    padding: "1.5%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(174, 194, 227)",
    justifyContent: "flex-start",
    borderRadius: "15px",
  },
  // textBoxRight: {
  //   padding: "1.5%",
  //   maxWidth: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   backgroundColor: "rgb(174, 194, 227)",
  //   justifyContent: "flex-",
  //   borderRadius: "15px",
  // },
  userName: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: "12px",
  },
  message: {
    display: "flex",
    textAlign: "start",
  },
} as Record<styleType, React.CSSProperties>;

export default MessageBubble;
