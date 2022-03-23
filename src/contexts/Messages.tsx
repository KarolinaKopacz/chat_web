import React, { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../actions/actions";
import { Data } from "../components/types";

type MessagesContextType = {
  messages: Data[];
  sendMessage: (text: string) => void;
};

const MessagesContext = createContext<MessagesContextType>({
  messages: [],
  sendMessage: () => null,
});

export const MessagesProvider: React.FC = (props) => {
  const [data, setData] = useState<Data[]>([]);
  const [messages, setMessages] = useState<Data[]>([]);

  useEffect(() => {
    getData().then((response) => {
      setData(response);
      setMessages(response);
    });
  }, []);

  const sendMessage = (text: string) => {
    setData([...data, { message: text }]);
    setMessages([...messages, { message: text }]);
  };

  return (
    <MessagesContext.Provider value={{ messages, sendMessage }}>
      {props.children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => useContext(MessagesContext);
