import React from "react";
import axios from "axios";

export default function Input({
  setAdmissionData,
  admissionData,
  setPredictedAdmission
}) {
  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setAdmissionData({ ...admissionData, [name]: value });
  };

  const handleClick = e => {
    axios
      .post(
        `http://${window.location.hostname}:7000/predict_admission`,
        admissionData
      )
      .then(res => {
        console.log(res.data);
        setPredictedAdmission(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="input_container">
      {/* <p>{window.token}</p> */}
      <h1>Do I have an admission chance?</h1>
      <form onSubmit={handleClick} className="form">
        <b>GRE_Score</b>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="your score"
          name="GRE_Score"
        />
        <br />
        <b>GRE_Score</b>
        <input
          type="number"
          onChange={handleInputChange}
          placeholder="your score"
          name="GRE_Score"
        />
        <br />
        <button className="button-predict">
          <b>Predict Admission Chances</b>
        </button>
      </form>
    </div>
  );
}
