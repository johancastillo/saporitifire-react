


const TestimonialsSection = () => {
    return (
        <section className="section bg-testimonial" id="testimonial">
            <div className="bg-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-title text-center">
                            <h2 className="text-uppercase text-white">Testimonials</h2>
                            <div className="title-border mt-3" />
                            <p className="title-desc text-white-50 mt-3">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-2">
                    <div className="col-lg-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="testi-border active">
                                    <img src="images/users/img-1.jpg" alt="" className="testi-img  img-fluid rounded mx-auto d-block" />
                                </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} className="testi-border">
                                    <img src="images/users/img-2.jpg" alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
                                </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                                    <img src="images/users/img-3.jpg" alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
                                </li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial-box text-center mt-4">
                                        <div className="testimonial-title p-2 rounded">
                                            <p className=" text-white mt-4">The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words.</p>
                                        </div>
                                        <i className="mdi mdi-format-quote-close text-primary display-3" />
                                        <h5 className="text-white f-18">Jennifer Shapiro</h5>
                                        <p className="text-white-50 mb-0">Frontend</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-box text-center mt-4">
                                        <div className="testimonial-title p-2 rounded">
                                            <p className=" text-white mt-4">The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words.</p>
                                        </div>
                                        <i className="mdi mdi-format-quote-close text-primary display-3" />
                                        <h5 className="text-white f-18">Brandon Carney</h5>
                                        <p className="text-white-50 mb-0">Designer</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-box text-center mt-4">
                                        <div className="testimonial-title p-2 rounded">
                                            <p className=" text-white mt-4">The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their languages common words.</p>
                                        </div>
                                        <i className="mdi mdi-format-quote-close text-primary display-3" />
                                        <h5 className="text-white f-18">William Mooneyhan</h5>
                                        <p className="text-white-50 mb-0">Developer</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default TestimonialsSection

