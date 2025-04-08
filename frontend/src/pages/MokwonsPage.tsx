import React, { useState } from 'react';
import { mokwonList } from '../mockData/draftMokwonList';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/Modal.module.css';
import BackButton from '../components/BackButton';
import MokwonDetailsModal from '../components/MokwonDetailsModal';

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
      <h2>My Mokwons</h2>
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
            <MokwonDetailsModal selectedMokwon={selectedMokwon} />
          )}
        </li>
      ))}
    </div>
  );
};

export default MokwonsPage;
