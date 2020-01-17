import React from 'react'

function Contact(){
    return(
        <div>
            <section className="section contact-title" id="contact">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="col-lg-12">
                            <div className="sec-heading sec-heading-center sec-heading-black"> <img src="img/contact-us.png" alt=""/>
                                <h2>Contact Us</h2>
                                <p><em>Massa massa aliquip sequi, quas mollitia corrupti officia.</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cs-section blue-background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="contact phone"><i className="fa fa-phone"></i>
                                <h3>Phone</h3>
                                <p className= "num">+ 91 254 254 254 , + 91 254 254 254.</p>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div className="contact email"><i className="fa fa-envelope"></i>
                                <h3>E-mail Address</h3>
                                <p className= "num">hello@educave.com , help@educave.com</p>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                            <div className="contact map"><i className="fa fa-map-o"></i>
                                <h3>Office Address</h3>
                                <p className= "num">121 , King Street,Melbourn,India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row text-center">
                <div className="container">
                    <form className="form-inline wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className="form-group ">
                            <input type="text" className="form-control red" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control yellow" placeholder="Enter your E-mail" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control green" placeholder="Enter your message" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-default">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;