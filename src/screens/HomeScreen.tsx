import React from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <nav>
      <Link to="/chat">
        <Button variant="primary">Open the Chat</Button>
      </Link>
    </nav>
  );
};

export default HomeScreen;
