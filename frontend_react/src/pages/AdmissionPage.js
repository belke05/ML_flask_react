import React, { useState } from "react";
import InputAdmission from "../components/InputAdmission";
import PredictionAdmission from "../components/PredictionAdmission";

export default function AdmissionPage() {
  const [predictedAdmission, setPredictedAdmission] = useState(false);
  const [admissionData, setAdmissionData] = useState({
    GRE_Score: null,
    TOEFL_Score: null,
    University_Rating: null,
    SOP: null,
    LOR: null,
    CGPA: null,
    Research: null
  });

  return (
    <div>
      <InputAdmission
        setPredictedAdmission={setPredictedAdmission}
        admissionData={admissionData}
        setAdmissionData={setAdmissionData}
      />
      <PredictionAdmission />
    </div>
  );
}
