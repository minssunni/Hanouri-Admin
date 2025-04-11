import { useState } from "react";
import { mokwonList } from "../mockData/draftMokwonList";
import MokwonDetailsModal from "../components/MokwonDetailsModal";
import BackButton from "../components/BackButton";
import buttonStyles from "../styles/Button.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MokwonsPage = () => {
  const [mokwons, setMokwons] = useState(mokwonList);
  const [selectedMokwons, setSelectedMokwons] = useState([]);

  const handleClick = (mokwon) => {
    if (selectedMokwons.some((selected) => selected.id === mokwon.id)) {
      setSelectedMokwons(
        selectedMokwons.filter((selected) => selected.id !== mokwon.id)
      );
    } else {
      setSelectedMokwons([...selectedMokwons, mokwon]);
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
              className={
                selectedMokwons.some((selected) => selected.id === mokwon.id)
                  ? buttonStyles.listBtnSelected
                  : buttonStyles.listBtn
              }
              onClick={() => handleClick(mokwon)}
            >
              {selectedMokwons.some((selected) => selected.id === mokwon.id) ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
              {mokwon.name}
            </button>
          </label>
          {selectedMokwons.some((selected) => selected.id === mokwon.id) && (
            <MokwonDetailsModal selectedMokwon={mokwon} />
          )}
        </li>
      ))}
    </div>
  );
};

export default MokwonsPage;
