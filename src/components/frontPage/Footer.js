import React from "react";

function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <p className="copyright">Copyrights &copy; All Reserved by <a href="/">Multiple</a></p>
                        </div>
                    </div>
                </div>
                <a href="/" className="back-to-top show" title="Move to top"><i className="glyphicon glyphicon-arrow-up"></i></a>
            </div>
        </div>
    )
}

export default Footer;