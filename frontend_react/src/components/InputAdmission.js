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
    e.preventDefault();
    axios
      .post(
        `http://${window.location.hostname}:7000/predict_admission`,
        admissionData
      )
      .then(res => {
        console.log(res.data);
        setPredictedAdmission(res.data.prediction);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="input_container">
      {/* <p>{window.token}</p> */}
      <h1>Do I have an admission chance?</h1>
      <form onSubmit={handleClick} className="form">
        {Object.keys(admissionData).map((key, i) => {
          return (
            <div>
              <b>{key}</b>
              <input
                value={admissionData[key]}
                type="number"
                onChange={handleInputChange}
                placeholder="your value"
                name={key}
              />
            </div>
          );
        })}
        <button className="button-predict">
          <b>Predict Admission Chances</b>
        </button>
      </form>
    </div>
  );
}
