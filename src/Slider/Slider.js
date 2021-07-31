import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div>
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
    {/* <!-- About Start --> */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width:'60px',height:'60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                    <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                </div>
                <div className="col-lg-5" style={{minheight:'500px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="public/img/about.jpg" style={{objectfit: 'cover'}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}
            </div>
        )
    }
}

export default Slider
