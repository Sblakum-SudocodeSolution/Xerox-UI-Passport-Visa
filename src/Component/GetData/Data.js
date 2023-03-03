import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function Data() {
  const [passportData, setPassportData] = useState([]);
  const [visaData, setVisaData] = useState([]);

  const [editpassportData, setEditPassportData] = useState({
    passportNumber: "",
    name: "",
    dob: "",
    birthPlace: "",
    issuePlace: "",
    nationality: "",
    doi: "",
    doe: "",
    isEditMode: false,
    id: 0,
  });

  const [editVisaData, setEditVisaData] = useState({
    visaNumber: "",
    passportNumber: "",
    name: "",
    dob: "",
    visaDate: "",
    nationality: "",
    isEditMode: false,
    id: 0,
  });

  useEffect(() => {
    GetPassportData();
    GetVisaData();
  }, []);

  //====================||  GET DATA  ||===========================//

  const GetPassportData = async (e) => {
    await axios.get("http://localhost:3002/passport").then((res) => {
      var response = res.data;
      var updatedResult = [];
      for (var ind = 0; ind < response.length; ind++) {
        updatedResult.push({
          passportNumber: response[ind].passportNumber,
          name: response[ind].name,
          dob: response[ind].dob,
          birthPlace: response[ind].birthPlace,
          issuePlace: response[ind].issuePlace,
          nationality: response[ind].nationality,
          doi: response[ind].doi,
          doe: response[ind].doe,
          id: response[ind].id,
          isEditMode: false,
        });
      }
      setPassportData(updatedResult);
    });
  };

  const GetVisaData = async (e) => {
    await axios.get("http://localhost:3002/visa").then((res) => {
      var response = res.data;
      var updatedResult = [];
      for (var ind = 0; ind < response.length; ind++) {
        updatedResult.push({
          visaNumber: response[ind].visaNumber,
          passportNumber: response[ind].passportNumber,
          name: response[ind].name,
          dob: response[ind].dob,
          visaDate: response[ind].visaDate,
          nationality: response[ind].nationality,
          id: response[ind].id,
          isEditMode: false,
        });
      }
      setVisaData(updatedResult);
    });
  };

  //==================||  EDIT PASSPORT DATA  ||======================//

  const changePassportEditVal = (e) => {
    setEditPassportData({
      ...editpassportData,
      [e.target.name]: e.target.value,
    });
  };

  const updatePassportData = () => {
    axios
      .put(
        `http://localhost:3002/passport/${editpassportData.id}`,
        editpassportData
      )
      .then((res) => {
        setEditPassportData({
          passportNumber: "",
          name: "",
          dob: "",
          birthPlace: "",
          issuePlace: "",
          nationality: "",
          doi: "",
          doe: "",
          id: 0,
        });
        GetPassportData();
      });
  };

  const onEditPassport = (id) => {
    const localPassportData = [...passportData];
    for (var ind = 0; ind < localPassportData.length; ind++) {
      if (id === localPassportData[ind].id) {
        localPassportData[ind].isEditMode = true;
        setEditPassportData({
          passportNumber: localPassportData[ind].passportNumber,
          name: localPassportData[ind].name,
          dob: localPassportData[ind].dob,
          birthPlace: localPassportData[ind].birthPlace,
          issuePlace: localPassportData[ind].issuePlace,
          nationality: localPassportData[ind].nationality,
          doi: localPassportData[ind].doi,
          doe: localPassportData[ind].doe,
          id: localPassportData[ind].id,
        });
      }
    }
    setPassportData(localPassportData);
  };

  const onDeletePassport = (id) => {
    axios.delete(`http://localhost:3002/passport/${id}`).then(() => {
      GetPassportData();
    });
  };

  //==================||  EDIT VISA DATA  ||======================//

  const changeVisaEditVal = (e) => {
    setEditVisaData({
      ...editVisaData,
      [e.target.name]: e.target.value,
    });
  };

  const updateVisaData = () => {
    axios
      .put(`http://localhost:3002/visa/${editVisaData.id}`, editVisaData)
      .then((res) => {
        setEditVisaData({
          visaNumber: "",
          passportNumber: "",
          name: "",
          dob: "",
          visaDate: "",
          nationality: "",
          isEditMode: false,
          id: 0,
        });
        GetVisaData();
      });
  };

  const onEditVisa = (id) => {
    const localVisaData = [...visaData];
    for (var ind = 0; ind < localVisaData.length; ind++) {
      if (id === localVisaData[ind].id) {
        localVisaData[ind].isEditMode = true;
        setEditVisaData({
          visaNumber: localVisaData[ind].visaNumber,
          passportNumber: localVisaData[ind].passportNumber,
          name: localVisaData[ind].name,
          dob: localVisaData[ind].dob,
          visaDate: localVisaData[ind].visaDate,
          nationality: localVisaData[ind].nationality,
          id: localVisaData[ind].id,
        });
      }
    }
    setVisaData(localVisaData);
  };

  const onDeleteVisa = (id) => {
    axios.delete(`http://localhost:3002/visa/${id}`).then(() => {
      GetVisaData();
    });
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item>
                <Accordion.Header>Passport Data</Accordion.Header>
                <Accordion.Body>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <b>Passport Number</b>
                          </TableCell>
                          <TableCell>
                            <b>Name</b>
                          </TableCell>
                          <TableCell>
                            <b>DOB</b>
                          </TableCell>
                          <TableCell>
                            <b>Place Of Birth</b>
                          </TableCell>
                          <TableCell>
                            <b>Issue Place</b>
                          </TableCell>
                          <TableCell>
                            <b>Nationality</b>
                          </TableCell>
                          <TableCell>
                            <b>DOI</b>
                          </TableCell>
                          <TableCell>
                            <b>DOE</b>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {passportData.map((item, key) => {
                          return item.id === editpassportData.id ? (
                            <TableRow>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="passportNumber"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.passportNumber}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="name"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.name}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="date"
                                  name="dob"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.dob}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="birthPlace"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.birthPlace}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="issuePlace"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.issuePlace}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="nationality"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.nationality}
                                />
                              </TableCell>

                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="date"
                                  name="doi"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.doi}
                                />
                              </TableCell>

                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="date"
                                  name="doe"
                                  onChange={(e) => {
                                    changePassportEditVal(e);
                                  }}
                                  value={editpassportData.doe}
                                />
                              </TableCell>
                              <TableCell>
                                <SaveIcon
                                  style={{ cursor: "pointer" }}
                                  onClick={() => updatePassportData()}
                                />
                              </TableCell>
                            </TableRow>
                          ) : (
                            <TableRow
                              key={key}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>{item.passportNumber}</TableCell>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.dob}</TableCell>
                              <TableCell>{item.birthPlace}</TableCell>
                              <TableCell>{item.issuePlace}</TableCell>
                              <TableCell>{item.nationality}</TableCell>
                              <TableCell>{item.doi}</TableCell>
                              <TableCell>{item.doe}</TableCell>
                              <TableCell>
                                <EditIcon
                                  style={{ cursor: "pointer" }}
                                  onClick={() => onEditPassport(item.id)}
                                />
                              </TableCell>
                              <TableCell>
                                <DeleteIcon
                                  style={{ cursor: "pointer" }}
                                  onClick={() => onDeletePassport(item.id)}
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0" className="mt-5">
              <Accordion.Item>
                <Accordion.Header>Visa Data</Accordion.Header>
                <Accordion.Body>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <b>Visa Number</b>
                          </TableCell>
                          <TableCell>
                            <b>Passport Number</b>
                          </TableCell>
                          <TableCell>
                            <b>Name</b>
                          </TableCell>
                          <TableCell>
                            <b>DOB</b>
                          </TableCell>
                          <TableCell>
                            <b>Visa Date</b>
                          </TableCell>
                          <TableCell>
                            <b>Nationality</b>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {visaData.map((item, key) => {
                          return item.id === editVisaData.id ? (
                            <TableRow>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="visaNumber"
                                  onChange={(e) => {
                                    changeVisaEditVal(e);
                                  }}
                                  value={editVisaData.visaNumber}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="passportNumber"
                                  onChange={(e) => {
                                    changeVisaEditVal(e);
                                  }}
                                  value={editVisaData.passportNumber}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="name"
                                  onChange={(e) => {
                                    changeVisaEditVal(e);
                                  }}
                                  value={editVisaData.name}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="date"
                                  name="dob"
                                  onChange={(e) => {
                                    changeVisaEditVal(e);
                                  }}
                                  value={editVisaData.dob}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="date"
                                  name="visaDate"
                                  onChange={(e) => {
                                    changeVisaEditVal(e);
                                  }}
                                  value={editVisaData.visaDate}
                                />
                              </TableCell>

                              <TableCell>
                                <TextField
                                  variant="standard"
                                  type="text"
                                  name="nationality"
                                  onChange={(e) => {
                                    changeVisaEditVal(e);
                                  }}
                                  value={editVisaData.nationality}
                                />
                              </TableCell>
                              <TableCell>
                                <SaveIcon
                                  style={{ cursor: "pointer" }}
                                  onClick={() => updateVisaData()}
                                />
                              </TableCell>
                            </TableRow>
                          ) : (
                            <TableRow
                              key={key}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>{item.visaNumber}</TableCell>
                              <TableCell>{item.passportNumber}</TableCell>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.dob}</TableCell>
                              <TableCell>{item.visaDate}</TableCell>
                              <TableCell>{item.nationality}</TableCell>
                              <TableCell>
                                <EditIcon
                                  style={{ cursor: "pointer" }}
                                  onClick={() => onEditVisa(item.id)}
                                />
                              </TableCell>
                              <TableCell>
                                <DeleteIcon
                                  style={{ cursor: "pointer" }}
                                  onClick={() => onDeleteVisa(item.id)}
                                />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}
