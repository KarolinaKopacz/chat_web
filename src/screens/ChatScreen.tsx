import React from "react";
import ChatMessages from "../components/ChatMessages";

const ChatScreen = () => {
  return (
    <div style={styles.chatWindow}>
      <div>Strona czatu</div>
      <ChatMessages />
    </div>
  );
};

const styles = {
  chatWindow: {
    margin: "auto",
    marginTop: "30px",
    width: "75%",
    height: "80%",
    border: "1px solid rgb(122, 167, 240) ",
    borderRadius: "10px",
  },
};

export default ChatScreen;
