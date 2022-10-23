import { useState } from 'react';

import './style.css'

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h1>NUmber: {count}</h1>
      <div className='button-counter'>
        <button onClick={handleIncrement}>+</button> <br />
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
