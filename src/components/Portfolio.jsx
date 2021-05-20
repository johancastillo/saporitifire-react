

const Portfolio = () => {
    return (
        <section className="section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-title text-center">
                            <p className="text-uppercase text-muted mb-2">Portfolio</p>
                            <h2 className="text-uppercase">Our Works</h2>
                            <div className="title-border mt-3" />
                            <p className="title-desc text-muted mt-3">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>
                        </div>
                    </div>
                </div>
                {/* portfolio menu */}
                <div className="row mt-5 pt-2">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <ul className="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                                <li><a className="categories active" data-filter="*">All</a></li>
                                <li><a className="categories" data-filter=".Brand">Brand</a></li>
                                <li><a className="categories" data-filter=".Design">Design</a></li>
                                <li><a className="categories" data-filter=".Graphic">Graphic</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End portfolio  */}
                <div className="port portfolio-masonry mt-5">
                    <div className="portfolioContainer row">
                        <div className="col-lg-4 col-md-4 Brand p-3">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/img-1.jpg" title="Project Name">
                                    <img className="item-container rounded" src="images/portfolio/img-1.jpg" alt="work-img" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="f-18">Consumer Insights</h5>
                                            <p className="text-primary">Business Improve</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 Design p-3">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/img-2.jpg" title="Project Name">
                                    <img className="item-container rounded" src="images/portfolio/img-2.jpg" alt="work-img" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="f-18">Financial Service</h5>
                                            <p className="text-primary">Business Improve</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 Design p-3">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/img-3.jpg" title="Project Name">
                                    <img className="item-container rounded" src="images/portfolio/img-3.jpg" alt="work-img" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="f-18">Latest Technology</h5>
                                            <p className="text-primary">Business Improve</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 Graphic p-3">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/img-4.jpg" title="Project Name">
                                    <img className="item-container rounded" src="images/portfolio/img-4.jpg" alt="work-img" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="f-18">Business Growth</h5>
                                            <p className="text-primary">Business Improve</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 Brand p-3">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/img-5.jpg" title="Project Name">
                                    <img className="item-container rounded" src="images/portfolio/img-5.jpg" alt="work-img" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="f-18">International Business</h5>
                                            <p className="text-primary">Business Improve</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 Design Brand p-3">
                            <div className="item-box">
                                <a className="cbox-gallary1 mfp-image" href="images/portfolio/img-6.jpg" title="Project Name">
                                    <img className="item-container rounded" src="images/portfolio/img-6.jpg" alt="work-img" />
                                    <div className="item-mask">
                                        <div className="item-caption">
                                            <h5 className="f-18">Consumer Products</h5>
                                            <p className="text-primary">Business Improve</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio

