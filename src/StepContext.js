import axios from "axios";
import React, { useState, createContext } from "react";
import App from "./App";

export const multiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);

  const [visaData, setVisaData] = useState([]);
  const [finalVisa, setFinalVisaData] = useState([]);

  const [passportData, setPassportData] = useState([]);
  const [finalPassportData, setFinalPassportData] = useState([]);

  const SubmitVisaData = () => {
    axios.post("http://localhost:3002/visa", visaData);
    setFinalVisaData((finalVisa) => [...finalVisa, visaData]);
    setVisaData("");
    setStep(1);
  };

  const SubmitPassportData = () => {
    axios.post("http://localhost:3002/passport", passportData);
    setFinalPassportData((finalPassportData) => [
      ...finalPassportData,
      passportData,
    ]);
    setPassportData("");
    setStep(2);
  };

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          visaData,
          setVisaData,
          finalVisa,
          setFinalVisaData,
          SubmitVisaData,
          SubmitPassportData,
          passportData,
          setPassportData,
          finalPassportData
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};
export default StepContext;
