import React from 'react';

function Features(){
    return(
        <div>
            <div className="cs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 wow fadeInLeft animated animated" data-wow-duration="500ms" data-wow-delay="300ms">
                            <div className="feature-img">
                                <img src="images/mockup2.png" className="img-responsive" alt=""/>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <h2 className="sec-heading">Features</h2>
                            <div className="feature wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <div className="media-left">
                                    <div className="icn wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms"><i className="icon icon-map"></i></div>
                                </div>
                                <div className="media-body">
                                    <h3>Highly optimized</h3>
                                    <p>A un Angleso it va semblar un simplificat Angles, quam u skeptic Cambridge amico dit me que Occidentals.</p>
                                </div>
                            </div>
                            <div className="feature wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                                <div className="media-left">
                                    <div className="icn wow scaleIn" data-wow-duration="500ms" data-wow-delay="600ms"><i className="icon icon-bulb"></i></div>
                                </div>
                                <div className="media-body">
                                    <h3>Modern specifications</h3>
                                    <p>A un Angleso it va semblar un simplificat Angles, quam u skeptic Cambridge amico dit me que Occidentals.</p>
                                </div>
                            </div>
                            <div className="feature wow fadeIn" data-wow-duration="1000ms" data-wow-delay="900ms">
                                <div className="media-left">
                                    <div className="icn wow scaleIn" data-wow-duration="500ms" data-wow-delay="900ms"><i className="icon icon-settings"></i></div>
                                </div>
                                <div className="media-body">
                                    <h3>Unlimited functionality</h3>
                                    <p>A un Angleso it va semblar un simplificat Angles, quam u skeptic Cambridge amico dit me que Occidentals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;