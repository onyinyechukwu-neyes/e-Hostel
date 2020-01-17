import React from 'react';

function About(){
    return(
        <div>
            <div className="cs-section grey-background">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="sec-heading">About us</h2>
                            <p className="about-text">Outline the segments and element of your webbinar.</p>
                            <p className="about-text">Lorem ipsum dorol sit consectetur adipicing elit. Duis thncus lacer vel elementum.</p>
                            <p className="about-text">Sed quib niss nisl. Nam mauroirs nisl pharetricssed, vivere purus.</p>
                            <p className="about-text">Quisue et consequat diam fermentum arcu.Inporta quam tellus, sed porta mauris dictumet.</p>
                            <h3><a href="#" className="btn btn-primary btn-link">More Details</a></h3>
                        </div>
                        <div className="col-sm-6 wow fadeInRight animated animated" data-wow-duration="500ms" data-wow-delay="300ms">
                            <div className="abt-img">
                                <img src="images/mockup.png" className="img-responsive" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;