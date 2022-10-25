import React, { useEffect, useState } from "react";

const Mocking2 = () => {
  const [users, setusers] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setusers(data);
      } catch (error: any) {
        seterror(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {error && <p data-testid="heading-error">{error}</p>}
      <ul>
        {users.map((val: any, index) => (
          <li key={index}>{val.name}</li>
        ))}
      </ul>
      <button disabled>Load</button>
    </div>
  );
};

export default Mocking2;
