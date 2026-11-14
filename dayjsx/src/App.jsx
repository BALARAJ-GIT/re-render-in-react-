import React from 'react'
import { useState } from 'react';

const App =() => {

  let [count, setcount] = useState(0);
  let [flag, setflag] = useState(true);
  console.log(flag);
  
  console.log('hey');
  
  
  console.log(count);
  

  return (
    <div>
      <h1>count is -{count}</h1>
      <button onClick={() => [
        setcount(count + 1)
        
      ]}>Increment</button>

      <button onClick={() => {
        setflag(false)
      }}>boolean opertion
      </button>
     
    </div>
  );
}

export default App;
