import React, { useState } from 'react';
import { mokwonList } from '../mockData/draftMokwonList';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Mokwons = () => {
  const [mokwons, setMokwons] = useState(mokwonList);
  const [selectedMokwon, setSelectedMokwon] = useState(null);

  const handleClick = (mokwon) => {
    if (selectedMokwon && selectedMokwon.id === mokwon.id) {
      setSelectedMokwon(null);
    } else {
      setSelectedMokwon(mokwon);
    }
  };  

  return (
    <div>
      <h1>My Mokwons</h1>
      {mokwons.map((mokwon) => (
        <li key={mokwon.id}>
          <label>
            <button
              className="buttonList"
              onClick={() => handleClick(mokwon)}
            >
              {selectedMokwon && selectedMokwon.id === mokwon.id ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
              {mokwon.name}
            </button>


          </label>
          {selectedMokwon && selectedMokwon.id === mokwon.id && (
            <div>
              <p>Name: {selectedMokwon.name}</p>
              {/* Render your modal here */}
            </div>
          )}
        </li>
      ))}
    </div>
  );
};

export default Mokwons;
