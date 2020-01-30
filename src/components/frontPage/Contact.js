import React from "react";

function Contact() {
  return (
    <div>
      <section className="section contact-title" id="contact">
        <div className="container">
          <div
            className="row wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="col-lg-12">
              <div className="sec-heading sec-heading-center sec-heading-black">
                {" "}
                <img src="img/contact-us.png" alt="" />
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cs-section blue-background">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div className="contact phone">
                <i className="fa fa-phone"></i>
                <h3>Phone</h3>
                <p className="num">+ 234 806 895 0220 , + 234 802 454 9560.</p>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".6s"
            >
              <div className="contact email">
                <i className="fa fa-envelope"></i>
                <h3>E-mail Address</h3>
                <p className="num">
                    <span mailto="sebigsolutions@gmail.com">sebigsolutions@gmail.com</span>
                    </p>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".8s"
            >
              <div className="contact map">
                <i className="fa fa-map-o"></i>
                <h3>Office Address</h3>
                <p className="num">23 Cole Street Lawanson, Surulere, Lagos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row text-center">
        <div className="container">
          <form
            className="form-inline wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="form-group ">
              <input
                type="text"
                className="form-control red"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control yellow"
                placeholder="Enter your E-mail"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control green"
                placeholder="Enter your message"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
