import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div>
                 <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="public/img/carousel-1.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxwidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="public/img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxwidth: '900px'}}>
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            </div>
                        </div>
                    </div>
                </div> 
                 <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> 
            {/* <!-- Full Screen Search Start --> */}
            <div className="modal fade" id="searchModal" tabIndex={-1}>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{background: 'rgba(9, 30, 62, .7)'}}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{maxwidth: '600px'}}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Full Screen Search End --> */}
            {/* <!-- Facts Start --> */}
            <div className="container-fluid facts py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height:'150px'}}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width:'60px',height:'60px'}}>
                                    <i className="fa fa-users text-primary"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Happy Clients</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height:'150px'}}>
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width:'60px',height:'60px'}}>
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-primary mb-0">Projects Done</h5>
                                    <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height:'150px'}}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width:'60px',height:'60px'}}>
                                    <i className="fa fa-award text-primary"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Win Awards</h5>
                                    <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    {/* <!-- Facts End --> */}
            </div>
        )
    }
}

export default Slider
