import { useState } from 'react';
import { add } from '../utils/math.js';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(add(count, 1))}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
