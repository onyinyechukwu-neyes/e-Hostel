import React, { useState, useEffect, useRef } from "react";
import { Form, Col, Button, FormGroup, Label, Input } from "reactstrap";
import { schools } from "../../API/Details";

const SchoolDetail = props => {
  const [state, setState] = useState({
    school: {},
    firstName: "",
    lastName: "",
    email: "",
    number: ""
  });

  const error = useRef(props.history.location.state).current;
  console.log(error);
  useEffect(
    () => {
      const schoolId = parseInt(props.match.params.id);

      let schoolInfo = schools.find(sch => sch.id === schoolId);
      if (schoolInfo !== undefined) {
        setState({
          ...state,
          school: schoolInfo
        });
      } else {
        props.history.push("/");
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
  };

  const { firstName, lastName, email, number, school } = state;

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
                Welcome To {school.school}
              </h1>
              <p
                className="sec-heading sec-heading-center sec-heading-white hero-tag wow fadeInUp animated"
                data-wow-duration="900ms"
                data-wow-delay="200ms"
              >
                Enter your details to proceed
              </p>
              <p
                className="alert-warning text-center"
                style={{
                  width: "50%",
                  height: "10%",
                  marginLeft: "30%",
                  color: "red"
                }}
              >
                {error !== undefined ? error : null}
              </p>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label sm="2" className="column">
                FirstName:
              </Label>
              <Col sm="10" className="column">
                <Input
                  placeholder="Firstname"
                  type="text"
                  name="firstName"
                  defaultValue={firstName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label sm="2" className="column">
                LastName:
              </Label>
              <Col sm="10" className="column">
                <Input
                  placeholder="LastName"
                  type="text"
                  name="lastName"
                  defaultValue={lastName}
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label sm="2" className="column">
                Email:
              </Label>
              <Col sm="10" className="column">
                <Input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Enter EmailAddress"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label sm="2" className="column">
                Reg/Id number:
              </Label>
              <Col sm="10" className="column">
                <Input
                  type="text"
                  name="number"
                  defaultValue={number}
                  placeholder="Reg Number"
                  onChange={handleChange}
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label sm="10" className="column"></Label>
              <Col sm="2" className="column">
                <Button
                  variant="outline-success"
                  type="submit"
                  onClick={() => {
                    props.history.push({
                      pathname: "/verify",
                      state: { state }
                    });
                  }}
                >
                  PROCEED
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
