import React from "react";
import { Data } from "./types";

interface Props {
  message: Data;
}
const MessageBubble = (props: Props) => {
  const { message } = props;

  return (
    <div style={styles.box} key={message.id}>
      <div style={styles.imgBox}>
        <div>
          <img style={styles.img} src={`${message.avatar}`}></img>
        </div>
      </div>
      <div style={styles.textBox}>
        <div style={styles.userName}>
          {message.first_name} {message.last_name}
        </div>
        <div style={styles.message}>{message.message}</div>
      </div>
    </div>
  );
};

type styleType = "box" | "imgBox" | "img" | "textBox" | "userName" | "message";

const styles = {
  box: {
    width: "90%",
    padding: "10px 0",
    margin: "10px auto",
    display: "flex",
    flexDirection: "row",
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
  textBox: {
    padding: "1.5%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(174, 194, 227)",
    justifyContent: "flex-start",
    borderRadius: "15px",
  },
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
