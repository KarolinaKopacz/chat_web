import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>

        <Route path="/chat" element={<ChatScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
