import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./routes/Header";
import Main from "./routes/Main";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Main}></Route>
    </HashRouter>
  );
}

export default App;
