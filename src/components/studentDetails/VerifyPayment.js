import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import { students } from "../../API/Details";

const VerifyPayment = props => {
  const [state, setState] = useState({
    recieptNumber: "",
    EmailAddress: "",
    RegNo: "",
    student: {}
  });
  const stateRef = useRef(props.location.state.state).current; //to persist the data from route, i used USEREF

  useEffect(
    () => {
      let studentInfo = students.find(s => s.firstName === stateRef.firstName);

      if (studentInfo !== undefined) {
        setState({
          ...state,
          student: studentInfo,
          RegNo: studentInfo.regNo,
          EmailAddress: studentInfo.email
        });
      } else {
        alert("Not a member of the school ");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { student, ...rest } = state;
    console.log(rest);
  };
  const { recieptNumber, student, EmailAddress, RegNo } = state;
  console.log("STATE", student);
  return (
    <div className="head-background">
      <div className="container">
        <div className="header-section">
          <div className="row text-center">
            <div className="col-sm-12">
              <h1
                className="hero-heading wow fadeInDown animated animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="200ms"
              >
                Dear {student !== undefined ? student.firstName : ""}
              </h1>
              <p
                className="sec-heading sec-heading-center sec-heading-white hero-tag wow fadeInUp animated"
                data-wow-duration="900ms"
                data-wow-delay="200ms"
              >
                Please verify your payment to proceed
              </p>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <h2>Payment Verification</h2>
            <FormGroup controlId="formBasicTitle">
              <Input
                type="hidden"
                defaultValue={EmailAddress}
                onChange={handleChange}
              />
              <Input
                type="hidden"
                defaultValue={RegNo}
                onChange={handleChange}
              />
              <Label>Reciept No.:</Label>
              <Input
                type="text"
                placeholder="00000"
                name="recieptNumber"
                defaultValue={recieptNumber}
                onChange={handleChange}
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VerifyPayment;
