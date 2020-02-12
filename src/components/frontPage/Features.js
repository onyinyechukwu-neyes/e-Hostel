import React from "react";

function Features() {
  return (
    <div>
      <div className="cs-section">
        <div className="container">
          <div className="col-lg-12"><h2 className="sec-heading sec-heading-center">Features</h2></div>
          <div className="row">
            <div
              className="col-sm-7 wow fadeInLeft animated animated"
              data-wow-duration="500ms"
              data-wow-delay="300ms"
            >
              <div >
                <img
                  src="images/hostel.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-5">
              
              <div
                className="feature wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <div className="media-left">
                  <div
                    className="icn wow scaleIn"
                    data-wow-duration="500ms"
                    data-wow-delay="300ms"
                  >
                    <i className="icon icon-map"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h3>Access School</h3>
                  <p>
                    Instantly access your school's hostel to secure a space for
                    yourself(as student) or your child(as a parent).
                  </p>
                </div>
              </div>
              <div
                className="feature wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="media-left">
                  <div
                    className="icn wow scaleIn"
                    data-wow-duration="500ms"
                    data-wow-delay="600ms"
                  >
                    <i className="icon icon-bulb"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h3>Manage Details</h3>
                  <p>
                    Automatically keep track of student details, including dates
                    & contact information, & keep students instantly updated
                    with any changes.
                  </p>
                </div>
              </div>
              <div
                className="feature wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                <div className="media-left">
                  <div
                    className="icn wow scaleIn"
                    data-wow-duration="500ms"
                    data-wow-delay="900ms"
                  >
                    <i className="icon icon-settings"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h3>Communication</h3>
                  <p>
                    Communication tools such as emails and phone numbers will be
                    used to ensure that clarity is maintained throughout the
                    process of securing a hostel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
