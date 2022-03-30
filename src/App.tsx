import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";

import "./App.css";
import { MessagesProvider } from "./contexts/Messages";

function App() {
  return (
    <div className="App">
      <MessagesProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/chat" element={<ChatScreen />}></Route>
        </Routes>
      </MessagesProvider>
    </div>
  );
}

export default App;
