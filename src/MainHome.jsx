import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home(){
    return(
        <section>
        <div className="homeTopContainer">
            <div className="row ">
                <div className="col-lg-6">
                    <h1 className="dsaiScoietyh1">DSAI Society</h1>
                    <p className="IIITDWDp">Indian Institute of Information Technology Dharwad</p>
                    <button type="button" className="btn btn-lg rounded-pill btn-default" style={{paddingLeft:40,paddingRight:40,color: "white",borderColor:"#5E5D8C"}}>Know More</button>
                </div>
                <div className="col-lg-6">
                    <video src="../Videos/animation.mp4" autoPlay={true} loop={true} width={450} className="homeAnimation"/>
                </div> 
            </div>
        </div>
        </section>
    );
};

export default Home;