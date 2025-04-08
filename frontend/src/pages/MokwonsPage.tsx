import React, { useState } from 'react';
import { mokwonList } from '../mockData/draftMokwonList';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackButton from '../components/BackButton';

const MokwonsPage = () => {
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
      <BackButton />
      <h1>My Mokwons</h1>
      {mokwons.map((mokwon) => (
        <li key={mokwon.id}>
          <label>
            <button
          className={`buttonList ${selectedMokwon && selectedMokwon.id === mokwon.id ? "selectedButton" : ''}`}  // Add conditional class
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
              <p>Date of Birth: {selectedMokwon.dateOfBirth}</p>
              <p>Gedner: {selectedMokwon.gender}</p>
              <p>Address: {selectedMokwon.address}</p>
              <p>Emergency Contact: {selectedMokwon.emergencyContact}</p>
              <p>Notes: {selectedMokwon.notes}</p>
            </div>
          )}
        </li>
      ))}
    </div>
  );
};

export default MokwonsPage;
