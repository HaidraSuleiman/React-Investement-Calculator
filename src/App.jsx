import { useState } from "react";

import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults, formatter } from "./util/investment.js";

function App() {
  const [info, setInfo] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(event) {
    const changedTarget = event.target.name;
    if (+event.target.value <= 0) {
      return;
    }
    setInfo((prevInfo) => {
      return { ...prevInfo, [changedTarget]: +event.target.value };
    });
  }

  return (
    <>
      <UserInput info={info} onChange={handleChange} />
      {!inputIsValid && <h2>Duration Cant be negative</h2>}
      <ResultsTable info={info} />
    </>
  );
}

export default App;
