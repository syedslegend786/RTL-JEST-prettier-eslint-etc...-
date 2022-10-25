import React from "react"
interface IProp {
  count: number
  incrementHandler: () => void
  decrementHandler: () => void
}
const Mocking1 = ({ count, decrementHandler, incrementHandler }: IProp) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Incremment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default Mocking1
