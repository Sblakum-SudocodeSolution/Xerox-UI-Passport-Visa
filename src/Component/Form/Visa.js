import React, { useState, useContext } from "react";
import { Box, Paper, Grid, styled } from "@mui/material";
import { Form, Button, Col, Row } from "react-bootstrap";
import { multiStepContext } from "../../StepContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Visa() {
  const { setStep, visaData, setVisaData, SubmitVisaData } =
    useContext(multiStepContext);

  //=================||  PDF UPLOAD  ||=================\\

  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt-3">
        <Grid container spacing={2}>
          <Grid item xs={5} md={7}>
            <Item>
              <h5>ADD VISA DETAILS</h5>
              <Form
                className="mt-5"
                onSubmit={SubmitVisaData}
                autoComplete="off"
              >
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="d-flex flex-row">
                      Visa Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Visa Number"
                      name="visaNumber"
                      value={visaData["visaNumber"]}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          visaNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="d-flex flex-row">
                      Passport Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Passport Number"
                      name="passportNumber"
                      value={visaData["passportNumber"]}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          passportNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="d-flex flex-row">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      name="name"
                      value={visaData["name"]}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="d-flex flex-row">
                      Date Of Birth
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={visaData["dob"]}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          dob: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="d-flex flex-row">
                      Visa Expire Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="visaDate"
                      value={visaData["visaDate"]}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          visaDate: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="d-flex flex-row">
                      Nationality
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Country Name"
                      name="nationality"
                      value={visaData["nationality"]}
                      onChange={(e) =>
                        setVisaData({
                          ...visaData,
                          nationality: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Col className="mt-2">
                    <Button
                      
                      variant="secondary"
                      type="submit"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                  </Col>
                  <Col className="mt-2">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Item>
          </Grid>
          <Grid item xs={7} md={5}>
            <Item>
              <div className="container">
                <input
                  type="file"
                  className="form-control"
                  onChange={onFileChange}
                  accept=".pdf"
                  required
                />

                {file && (
                  <iframe
                    title="pdfPreview"
                    src={URL.createObjectURL(file)}
                    width="100%"
                    height="500"
                  />
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
