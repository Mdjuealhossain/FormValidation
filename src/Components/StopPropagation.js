import React from "react";

const StopPropagation = () => {
  const handleParent = (event) => {
    console.log("Parent Event", event);
  };
  const handleChild = (event) => {
    event.stopPropagation();
    console.log("Child Event", event);
  };
  return (
    <div onClick={handleParent}>
      <h1>Well come</h1>
      <button onClick={handleChild}>click</button>
    </div>
  );
};

export default StopPropagation;
