import React from "react";
import Header from "./components/Header";
import TitleChangeHandler from "./components/TitleChangeHandler";

const App = () => {
  return (
      <div className="h-[200vh]">
        <TitleChangeHandler/>
        <Header />
      </div>
  );
};

export default App;
