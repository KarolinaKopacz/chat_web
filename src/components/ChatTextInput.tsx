import React, { useState } from "react";
import { Button, FormControl, InputGroup, Spinner } from "react-bootstrap";

import { Message } from "./types";

interface Props {
  buttonText: string;
  onSavePress: (message: Message) => void;
}

const ChatTextInput = (props: Props) => {
  const { buttonText, onSavePress } = props;
  const [isLoading, setLoadingVisible] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>();

  const handleSendMessage = () => {
    setLoadingVisible(true);
    if (!userMessage) {
      return;
    }

    onSavePress({ messageText: userMessage });

    setUserMessage("");
    setLoadingVisible(false);
  };

  return (
    <>
      <InputGroup style={styles.inputGroup}>
        <FormControl
          aria-label="Default"
          type="text"
          value={userMessage}
          onChange={(ev) => setUserMessage(ev.target.value)}
        />
        {isLoading ? (
          <Button>
            <Spinner animation="border" size="sm" role="status" />
          </Button>
        ) : (
          <Button type="button" onClick={handleSendMessage}>
            {buttonText}
          </Button>
        )}
      </InputGroup>
    </>
  );
};

type styleType = "inputGroup";

const styles = {
  inputGroup: {
    width: "100%",
    height: "10%",
  },
} as Record<styleType, React.CSSProperties>;

export default ChatTextInput;
