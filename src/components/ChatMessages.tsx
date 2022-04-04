import React, { useEffect, useState } from "react";

import ChatMessagesDataService from "../services/chatMessages.service";
import firebase from "../firebase/firebase.config";
import ChatTextInput from "./ChatTextInput";
import MessageBubble from "./MessageBubble";
import { Data, Message } from "./types";

const ChatMessages = () => {
  const [chatMessages, setChatMessages] = useState<Data[]>([]);

  useEffect(() => {
    const unsubscriber = firebase.db
      .collection("chatMessages")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
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
      <div style={styles.box}>
        {chatMessages?.map((message) => {
          return <MessageBubble message={message} />;
        })}
      </div>
      <ChatTextInput buttonText="Send!" onSavePress={handleSaveMessage} />
    </>
  );
};

type styleType = "box";

const styles = {
  box: {
    overflowY: "auto",
    height: "90%",
  },
} as Record<styleType, React.CSSProperties>;

export default ChatMessages;
