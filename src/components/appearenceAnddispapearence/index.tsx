import React, { useEffect, useState } from "react"

const Index = () => {
  const [isTrue, setisTrue] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setisTrue(true)
    }, 1000)
  }, [])
  return <div>{isTrue ? <button>Login</button> : <button>Logout</button>}</div>
}

export default Index
