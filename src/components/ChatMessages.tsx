import React, { useEffect, useState } from "react";

import ChatMessagesDataService from "../services/chatMessages.service";
import { useScrollToBottom } from "../hooks/useScrollToBottom";
import firebase from "../firebase/firebase.config";
import ChatTextInput from "./ChatTextInput";
import { Data, Message } from "./types";
import MessageBubble from "./MessageBubble";

const ChatMessages = () => {
  const messagesEndRef = React.createRef<HTMLDivElement>();
  const [chatMessages, setChatMessages] = useState<Data[]>([]);

  useScrollToBottom({ element: messagesEndRef, action: chatMessages });

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
      {chatMessages?.map((message) => {
        return <MessageBubble message={message} />;
      })}
      <ChatTextInput buttonText="Send!" onSavePress={handleSaveMessage} />
      <div ref={messagesEndRef}></div>
    </>
  );
};

export default ChatMessages;
