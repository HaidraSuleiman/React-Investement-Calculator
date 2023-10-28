import { useState } from "react";
import InvestementIMG from "./assets/investment-calculator-logo.png";
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
      <header id="header">
        <img src={InvestementIMG} alt="investment calculator logo" />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput info={info} onChange={handleChange} />

      <ResultsTable info={info} />
    </>
  );
}

export default App;
