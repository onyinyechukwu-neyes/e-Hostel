import React, { useState, useEffect } from "react";
import { Form, Button, Input, Label, FormGroup } from "reactstrap";
import { students } from "../../API/Details";

const VerifyPayment = props => {
  const [state, setState] = useState({
    number: "",
    student: {}
  });
  useEffect(() => {
    console.log(props.location.state);
    const { location } = props;
    const { state } = location;
    let studentInfo = students.find(
      s => s.firstname === state.firstname && s.regNo === state.number
    );
    console.log(studentInfo)
    if (studentInfo !== undefined) {
      setState({
        ...state,
        student: studentInfo
      });
    } else {
      alert("Not a member of the school ");
      props.history.push("/");
    }
  }, []);

  const handleChange = e => {
    const { name, defaultValue } = e.target;
    setState({
      ...state,
      [name]: defaultValue
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  const { number, student } = state;
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
                Dear {student.firstname}
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
              <Label>Reciept No.:</Label>
              <Input
                type="number"
                placeholder="00000"
                name="number"
                defaultValue={number}
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
