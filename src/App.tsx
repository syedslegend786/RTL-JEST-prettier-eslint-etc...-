import React from "react"

import StoreProvider from "./store/StoreProvider"
import Mocking2 from "./components/Mockings/mocking2/Mocking2"
const App = () => {
  return (
    <StoreProvider>
      <div>
        {/* <GetByrole />
      <Skill skills={["Javascript", "Html", "css"]} />
      <QueryBy /> */}
        {/* <CountApp /> */}
        {/* <TestProvider /> */}
        <Mocking2 />
      </div>
    </StoreProvider>
  )
}

export default App
