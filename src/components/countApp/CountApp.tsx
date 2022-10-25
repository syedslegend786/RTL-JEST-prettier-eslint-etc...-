import React, { useState } from "react"

const CountApp = () => {
  const [count, setcount] = useState<number>(0)
  const [count2, setcount2] = useState<string>("0")

  const [onchangeNumberValue, setonchangeNumberValue] = useState<string>("0")
  return (
    <div>
      <h1 data-testid="counter-display">{count}</h1>
      <button onClick={() => setcount((prev) => prev + 1)}>Increment</button>
      <br />
      <br />
      <br />
      <h1 data-testid="test2-output">{count2}</h1>
      <input
        type={`number`}
        onChange={(e) => {
          setonchangeNumberValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setcount2(onchangeNumberValue)
        }}
      >
        Display
      </button>
    </div>
  )
}

export default CountApp
