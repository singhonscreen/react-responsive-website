import React from 'react'
import { NavLink } from 'react-router-dom';
// import asb from "../src/images/family.svg"

const Common = (props) => {
    return (
        <>
      
            <section id="header" className ="d-flex  align-items-center ">
                <div className="container-fluid nav_bg "> 
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center ">
                            <h1>Grow your business with <strong className="brand-name" >ASB</strong> </h1>
                            <h2 className="my-3">We are the team of talented developer making websites</h2>
                            <div className="mt-3">
                                <NavLink to={props.link} className=" btn-get-started ">{props.btntitle}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt ="img" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;
