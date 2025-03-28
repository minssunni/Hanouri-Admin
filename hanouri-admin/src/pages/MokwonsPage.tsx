import React, { useState } from 'react';
import { mokwonList } from '../mockData/draftMokwonList';

const Mokwons = () => {
  const [mokwons, setMokwons] = useState(mokwonList);
  const [selectedMokwon, setSelectedMokwon] = useState(null);

  const handleClick = (mokwon) => {
    setSelectedMokwon(mokwon);
  };

  return (
    <div>
      <h1>My Mokwons</h1>
      {mokwons.map((mokwon) => (
        <li key={mokwon.id}>
          <label>
            <button onClick={() => handleClick(mokwon)}>{mokwon.name}</button>
          </label>
          {selectedMokwon?.id === mokwon.id && (
            <div>
              <p>Name: {mokwon.name}</p>
              {/* Render your modal here */}
            </div>
          )}
        </li>
      ))}
    </div>
  );
};

export default Mokwons;
