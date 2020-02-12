import React from "react";

function About() {
  return (
    <div>
      <div className="cs-section grey-background">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="sec-heading">About us</h2>
              <p className="about-text">
                Over time, from experience and information gathered, students
                (especially tertiary school students) face difficulties in
                securing a space in school hostels due to the strainous process
                involved . Also, school managements encounter problems in the
                process of allocating hostels to students. Therefore, E-SCHOOL
                HOSTEL ALLOCATION provides a way to ease the allocation process.
              </p>
              <p className="about-text">
                E-SCHOOL HOSTEL ALLOCATION is a platform aimed at making the
                process of allocating hostels easy for school managements and
                also making it easy for students to get their hostels quickly
                and with ease.
              </p>
              <p className="about-text">
                It serves for both secondary and tertiary school students
                covering major secondary schools and tertiary
                institutions in Nigeria.
              </p>
            </div>
            <div
              className="col-sm-6 wow fadeInRight animated animated"
              data-wow-duration="500ms"
              data-wow-delay="300ms"
            >
              <div className="abt-img">
                <img
                  src="images/hostel@.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
