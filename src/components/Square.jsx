import { useState } from "react";

const Square = ({ value, onSelect }) => {
  // const [value, setValue] = useState(null);
  // const handleClick = () => {
  //   // setValue("X");
  // };
  return (
    <button onClick={onSelect} className="square">
      {value}
    </button>
  );
};

export default Square;
