import React from "react";
interface props {
  name: string;
}
const Greet = ({ name }: props) => {
  return <div>Hello {name}</div>;
};

export default Greet;
