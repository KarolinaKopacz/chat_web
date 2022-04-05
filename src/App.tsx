import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";

import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/chat" element={<ChatScreen />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
