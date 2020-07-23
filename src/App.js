import React, { useState } from 'react';
import './App.css';

const numRows = 40;
const numCols = 40;

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    // Create initial grid with all "Dead cells"
    for (let i = 0; i< numRows; i++) {
      // gives us our grid of dead cells
      rows.push(Array.from(Array(numCols), () => 0))
    }

    return rows;
  });



  return (
    <div 
      style = {{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div 
            key={`${i}-${k}`}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i] [k] ? "blue": undefined,
              border: "solid 1px black"
            }}
          />
        ))
      )}
    </div>
  );
}

export default App;
