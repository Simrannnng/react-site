import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "../src/Routes/";

function App() {
  return (
    <Router>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
