import React from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import Tickets from "./components/tickets";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="app__content">
        <Filters />
        <Tickets />
      </main>
    </div>
  );
}

export default App;
