import React from "react";

export default function predictionAdmission({ isAdmission }) {
  if (isAdmission) {
    return <div>You will be admitted 🎓🎓</div>;
  } else {
    return <div>Probably no admission 😔😔</div>;
  }
}
