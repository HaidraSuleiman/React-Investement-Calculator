

export default function UserInput({ onChange, info}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            id="initial"
            name="initialInvestment"
            value={info.initialInvestment}
            onChange={(event) => onChange(event)}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            type="number"
            id="annual"
            name="annualInvestment"
            value={info.annualInvestment}
            onChange={(event) => onChange(event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">Expected Return</label>
          <input
            type="number"
            id="expected"
            name="expectedReturn"
            value={info.expectedReturn}
            onChange={(event) => onChange(event)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={info.duration}
            onChange={(event) => onChange(event)}
          />
        </p>
      </div>
    </section>
  );

  }