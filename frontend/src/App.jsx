import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamMembers from "./pages/TeamMembers";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/teams" element={<Teams />} />
      <Route exact path="/teamMembers/:id" element={<TeamMembers />} />
    </Routes>
  );
}

export default App;
