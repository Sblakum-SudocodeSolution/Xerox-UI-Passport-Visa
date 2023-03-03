import React, { useState, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Grid, Box, Paper, styled } from "@mui/material";
import { multiStepContext } from "../../StepContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Passport() {
  const { passportData, setPassportData, SubmitPassportData } =
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
              <h5>ADD PASSPORT DETAILS</h5>
              <Form
                className="mt-5"
                onSubmit={SubmitPassportData}
                autoComplete="off"
              >
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="d-flex flex-row">
                      Passport Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Passport Number"
                      name="passportNumber"
                      value={passportData["passportNumber"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          passportNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="d-flex flex-row">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      name="name"
                      value={passportData["name"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="d-flex flex-row">
                      Date Of Birth
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={passportData["dob"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          dob: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="d-flex flex-row">
                      Place Of Birth
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Place Of Birth"
                      name="birthPlace"
                      value={passportData["birthPlace"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          birthPlace: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="d-flex flex-row">
                      Place Of Issue
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Place Of Issue"
                      name="issuePlace"
                      value={passportData["issuePlace"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          issuePlace: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="d-flex flex-row">
                      Nationality
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nationality"
                      name="nationality"
                      value={passportData["nationality"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          nationality: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="d-flex flex-row">
                      Date Of Issue
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="doi"
                      value={passportData["doi"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          doi: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="d-flex flex-row">
                      Date Of Expire
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="doe"
                      value={passportData["doe"]}
                      onChange={(e) =>
                        setPassportData({
                          ...passportData,
                          doe: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                </Row>
                <Button variant="primary" type="submit" className="mt-2">
                  Next
                </Button>
              </Form>
            </Item>
          </Grid>
          <Grid item xs={7} md={5}>
            <Item>
              <div className="container" style={{ height: "27rem" }}>
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
