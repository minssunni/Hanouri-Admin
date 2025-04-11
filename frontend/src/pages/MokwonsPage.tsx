import { useState } from "react";
import { mokwonList } from "../mockData/draftMokwonList";
import MokwonDetailsModal from "../components/MokwonDetailsModal";
import BackButton from "../components/BackButton";
import buttonStyles from "../styles/Button.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Mokwon {
  id: number;
  name: string;
  group: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  carPlate?: string;
  emergencyContact?: string;
  dateAdded: string;
  notes?: string;
  contact?: string;
  attendanceRate?: number;
}

const MokwonsPage = () => {
  const [mokwons, setMokwons] = useState<Mokwon[]>(mokwonList);
  const [selectedMokwons, setSelectedMokwons] = useState<Mokwon[]>([]);

  const handleClick = (mokwon: Mokwon) => {
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
