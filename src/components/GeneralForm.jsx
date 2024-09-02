import React from "react";

function GeneralForm({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  return (
    <div className="cv-input-container">
      <h3>General Info</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={generalInfo.name ? generalInfo.name : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={generalInfo.email ? generalInfo.email : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tel"
          placeholder="tel"
          value={generalInfo.tel ? generalInfo.tel : ""}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default GeneralForm;
