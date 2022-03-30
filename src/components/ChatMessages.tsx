import React, { useEffect, useState } from "react";

import ChatMessagesDataService from "../services/chatMessages.service";
import { useScrollToBottom } from "../hooks/useScrollToBottom";
import firebase from "../firebase/firebase.config";
import ChatTextInput from "./ChatTextInput";
import { Data, Message } from "./types";

const ChatMessages = () => {
  const messagesEndRef = React.createRef<HTMLDivElement>();
  const [chatMessages, setChatMessages] = useState<Data[]>([]);
  const query = firebase.db.collection("chatMessages").orderBy("createdAt");

  useScrollToBottom({ element: messagesEndRef, action: chatMessages });

  useEffect(() => {
    ChatMessagesDataService.getAll().then((data: Data[]) => {
      setChatMessages((prev) => [...prev, ...data]);
    });
  }, []);

  useEffect(() => {
    const unsubscriber = query.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      setChatMessages(data);
    });

    return unsubscriber;
  }, []);

  const handleSaveMessage = (message: Message) => {
    ChatMessagesDataService.create({
      createdAt: new Date(),
      first_name: "xx",
      last_name: "xxx",
      avatar: "https://robohash.org/facereautofficiis.png?size=50x50&set=set1",
      message: message.messageText,
    });
    setChatMessages([...chatMessages, { message: message.messageText }]);
  };

  return (
    <>
      {chatMessages?.map((user) => {
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
