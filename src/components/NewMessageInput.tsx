import React, { useState } from "react";
import { Button, FormControl, InputGroup, Spinner } from "react-bootstrap";

interface Props {
  isLoading: boolean;
  buttonText: string;
}

const NewMessageInput = (props: Props) => {
  const { isLoading, buttonText } = props;
  const [userMessage, setUserMessage] = useState<string>();

  const handleSendMessage = () => {
    if (!userMessage) {
      return;
    }
    //action...

    setUserMessage("");
  };

  return (
    <>
      <InputGroup style={styles.inputGrup}>
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

const styles = {
  inputGrup: {
    width: "100%",
    height: "40px",
  },
};

export default NewMessageInput;
