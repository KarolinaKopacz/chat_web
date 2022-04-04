import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Authentication from "../services/userService";

const HomeScreen = () => {
  const handleLogin = () => {
    Authentication.singin();
  };

  const handleLogout = () => {
    Authentication.logout();
  };

  return (
    <nav>
      <Button variant="primary" onClick={handleLogin}>
        Klik
      </Button>
      <Button variant="primary" onClick={handleLogout}>
        out
      </Button>

      <Link to="/chat">
        <Button variant="primary">Open the Chat</Button>
      </Link>
    </nav>
  );
};

export default HomeScreen;
