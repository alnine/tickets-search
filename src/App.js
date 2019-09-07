import React from "react";
import Header from "./components/common/header";
import Filters from "./components/filters";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="app__content">
        <Filters />
      </main>
    </div>
  );
}

export default App;
