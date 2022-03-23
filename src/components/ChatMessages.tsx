import React, { useState } from "react";

import { useMessages } from "../contexts/Messages";
import { useScrollToBottom } from "../hooks/useScrollToBottom";
import ChatTextInput from "./ChatTextInput";
import { Message } from "./types";

const ChatMessages = () => {
  const [renderData, setRenderData] = useState(0);
  const messagesEndRef = React.createRef<HTMLDivElement>();
  const { sendMessage, messages } = useMessages();

  useScrollToBottom({ element: messagesEndRef, action: renderData });

  const handleSaveMessage = (message: Message) => {
    setRenderData(renderData + 1);
    sendMessage(message.messageText);
  };

  return (
    <>
      {messages?.map((user) => {
        return (
          <div style={styles.box}>
            <div style={styles.imgBox}>
              <div>
                <img style={styles.img} src={`${user.avatar}`}></img>
              </div>
            </div>
            <div style={styles.textBox}>
              <div style={styles.userName}>
                {user.first_name} {user.last_name}
              </div>
              <div style={styles.message}>{user.message}</div>
            </div>
          </div>
        );
      })}
      <ChatTextInput buttonText="Send!" onSavePress={handleSaveMessage} />
      <div ref={messagesEndRef}></div>
    </>
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

export default ChatMessages;
