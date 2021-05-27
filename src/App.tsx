import React from "react";
import "./App.css";
import Stepper from "./components/Stepper/Stepper";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const titleList = [
    {
      index: 1,
      title: "Please Select Location",
    },
    {
      index: 2,
      title: "Please Select Preferences",
    },
  ];

  return (
    <div className="App">
      <Stepper initial={0} titleList={titleList}>
        <p>1</p>
        <p>2</p>
      </Stepper>
    </div>
  );
}

export default App;
