import React from "react";

function PracticalForm({ practicalInfo, setPracticalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPracticalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  return (
    <div className="cv-input-container">
      <h3>Work Experience</h3>
      <form>
        <input
          type="text"
          name="company"
          placeholder="company"
          value={practicalInfo.company ? practicalInfo.company : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="position"
          value={practicalInfo.position ? practicalInfo.position : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="main_responsibilities"
          placeholder="main_responsibilities"
          value={
            practicalInfo.main_responsibilities
              ? practicalInfo.main_responsibilities
              : ""
          }
          onChange={handleChange}
        />
        <input
          type="text"
          name="start_date"
          placeholder="start_date"
          value={practicalInfo.start_date ? practicalInfo.start_date : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="end_date"
          placeholder="end_date"
          value={practicalInfo.end_date ? practicalInfo.end_date : ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default PracticalForm;
