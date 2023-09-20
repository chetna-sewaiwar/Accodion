import React from 'react'
import { useState } from 'react';

const App = () => {

  const Data = [
    {
      name : "Chetna Sewaiwar"
    },
    {
      name : "Deghana Sewaiwar"
    },
    {
      name : "Meghana Sewaiwar"
    },
    {
      name : "Sneha Sewaiwar"
    },


  ]
  
    const [state, setState] = useState(null);
      const toggleSection = (ind) => {
    if (state === ind) {
      setState(null); 
    } else {
      setState(ind);
    }
  };



  return (
    <div>
      <center>
          {Data.map((data, ind) => (
        <div key={ind} className="accordion-section">
          <button
            className="accordion-header"
            onClick={() => toggleSection(ind)}
          >
            Click Me
          </button>
          {state === ind && (
            <div className="accordion-content">{data.name}</div>
          )}
        </div>
      ))}
    </center>


    </div>
  )
}

export default App