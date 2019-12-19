import React, { useState } from "react";

import "./styles/App.css";
import Input from "./components/Input";
import Prediction from "./components/Prediction";

function App() {
  const [predictedSalary, setPredictedSalary] = useState(false);
  const [experience, setExperience] = useState(0);

  return (
    <div className="App">
      <Input
        experience={experience}
        setExperience={setExperience}
        setPredictedSalary={setPredictedSalary}
      />
      {predictedSalary && <Prediction prediction={predictedSalary} />}
    </div>
  );
}

export default App;
