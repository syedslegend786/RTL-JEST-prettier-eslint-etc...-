import React, { useState } from "react";

const QueryBy = () => {
  const [loginShow, setloginShow] = useState(false);
  const handleClick = () => {
    setloginShow((prev) => !prev);
  };
  return (
    <div>
      {loginShow ? (
        <button onClick={handleClick}>Login</button>
      ) : (
        <button onClick={handleClick}>Start Learning</button>
      )}
    </div>
  );
};

export default QueryBy;
