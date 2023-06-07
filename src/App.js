import React from 'react';
import React, { useState } from 'react';
import './style.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>You've clicked the button {count} times.</p>
    </div>
  );
}

export default Counter;
