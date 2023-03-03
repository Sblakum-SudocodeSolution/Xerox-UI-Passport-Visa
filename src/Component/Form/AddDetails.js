import React, { useContext } from "react";
import { Stepper, StepLabel, Step } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { multiStepContext } from "../../StepContext";
import Passport from "./Passport";
import Visa from "./Visa";

export default function AddDetails() {
  const { currentStep, finalData } = useContext(multiStepContext);

  const showSteps = (steps) => {
    switch (steps) {
      case 1:
        return <Passport />;

      case 2:
        return <Visa />;

      default:
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Stepper
              style={{ width: "50%", marginTop: "10vh" }}
              activeStep={currentStep - 1}
              orientation="horizontal"
            >
              <Step>
                <StepLabel>Passport</StepLabel>
              </Step>
              <Step>
                <StepLabel>Visa</StepLabel>
              </Step>
            </Stepper>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            {showSteps(currentStep)}
            {/* {finalData ? <DisplayData /> : ""} */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
