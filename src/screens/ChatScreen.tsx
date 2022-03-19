import React from "react";
import ChatMessages from "../components/ChatMessages";
import ChatTextInput from "../components/ChatTextInput";

const ChatScreen = () => {
  return (
    <div style={styles.chatWindow}>
      <div>Strona czatu</div>
      <ChatMessages />
      <ChatTextInput buttonText="Send!" />
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
