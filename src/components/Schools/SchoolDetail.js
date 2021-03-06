import React, { useState, useEffect, useRef } from "react";
import { Form, Col, Button, FormGroup, Label, Input } from "reactstrap";
import * as SchoolAction from "../../redux/Schools/action";
import { connect } from "react-redux";

const SchoolDetail = ({ match, history, LoadSchool, school }) => {
  const [state, setState] = useState({
    SchoolId: 0,
    firstName: "",
    lastName: "",
    email: "",
    number: ""
  });

  const error = useRef(history.location.state).current;

  //using email Regular Expression
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const schoolId = useRef(match.params.id).current;
  console.log(schoolId)

  useEffect(
    () => {
      let schl = LoadSchool(parseInt(schoolId));
      if (schl !== undefined) {
        setState({
          ...state,
          SchoolId: schl.id
        });
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

  const { firstName, lastName, email, number } = state;

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
                  disabled={
                    number.length > 5 &&
                    firstName !== "" &&
                    lastName !== "" &&
                    email.length >= 6 &&
                    re.test(email)
                      ? false
                      : true
                  }
                  type="submit"
                  onClick={() => {
                    history.push({
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

function mapStateToProps({ school }) {
  return {
    school: school.school
  };
}

const mapDispatchToProps = {
  LoadSchool: SchoolAction.LoadSchool
};
export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetail);
