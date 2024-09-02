import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import PracticalForm from "./components/PracticalForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [practicalInfo, setPracticalInfo] = useState({});
  const [status, setStatus] = useState("editting");
  function handleSubmit() {
    setStatus("submitted");
  }

  return (
    <>
      <h2>CV Generator</h2>
      {status === "editting" ? (
        <>
          <GeneralForm
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          <EducationForm
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          />
          <PracticalForm
            practicalInfo={practicalInfo}
            setPracticalInfo={setPracticalInfo}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <CVPreview
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            practicalInfo={practicalInfo}
            status={status}
            setStatus={setStatus}
          />
        </>
      )}
    </>
  );
}

export default App;
