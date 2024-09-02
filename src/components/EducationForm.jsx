import React from "react";

function EducationForm({ educationInfo, setEducationInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  return (
    <div className="cv-input-container">
      <h3>Education Info</h3>
      <form>
        <input
          type="text"
          name="school"
          placeholder="school"
          value={educationInfo.school ? educationInfo.school : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="study_title"
          placeholder="study_title"
          value={educationInfo.study_title ? educationInfo.study_title : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="start_date"
          placeholder="start_date"
          value={educationInfo.start_date ? educationInfo.start_date : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="end_date"
          placeholder="end_date"
          value={educationInfo.end_date ? educationInfo.end_date : ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default EducationForm;
