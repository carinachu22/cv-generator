import React from "react";
import "./CVPreview.css";

function CVPreview({
  generalInfo,
  educationInfo,
  practicalInfo,
  status,
  setStatus,
}) {
  setStatus("submitted");
  function handleEdit() {
    setStatus("editting");
  }
  return (
    <div className="cv-container">
      <div className="info-block">
        <p className="name">{generalInfo.name}</p>
        <p>email: {generalInfo.email}</p>
        <p>tel: {generalInfo.tel}</p>
      </div>

      <div className="info-block">
        <h3 className="section-title">Education Info</h3>
        <div className="header-info">
          <p className="header">{educationInfo.school}</p>
          <div className="school-years">
            <span>{educationInfo.start_date} - </span>
            <span>{educationInfo.end_date}</span>
          </div>
        </div>

        <ul className="bullet-points">
          <li>{educationInfo.study_title}</li>
        </ul>
      </div>

      <div className="info-block">
        <h3 className="section-title">Work Experience</h3>
        <div className="header-info">
          <p className="header">
            {practicalInfo.company} ({practicalInfo.position})
          </p>
          <div className="years">
            <span>{practicalInfo.start_date} - </span>
            <span>{practicalInfo.end_date}</span>
          </div>
        </div>
        <ul className="bullet-points">
          <li>{practicalInfo.main_responsibilities}</li>
        </ul>
      </div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default CVPreview;
