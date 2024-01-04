import React from "react";
import NavBar from "./components/NavBar";
import WatchNow from "./components/WatchNow";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/WatchNow" element={<WatchNow />} />
      </Routes>
    </>
  );
};

export default App;
