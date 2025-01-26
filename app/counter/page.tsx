'use client';
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(12);

  // Function to increase the count
  const increment = () => {
    if (count >0) {
    setCount(count -1);
    }
  }
  ;

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Counter;



