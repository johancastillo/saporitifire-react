



const Counter = () => {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="row vertical-content">
                    <div className="col-lg-6">
                        <div className="counter-box">
                            <div className="col-lg-12">
                                <h4>Our Achivements</h4>
                                <p className="text-muted mt-2">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>
                                <div className="mt-4">
                                    <div className="row" id="counter">
                                        <div className="col-lg-6">
                                            <div className="counter-box mt-4">
                                                <div className="media">
                                                    <div className="counter-icon">
                                                        <i className="mdi mdi-heart" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h4 className="counter-value" data-count={485}>0</h4>
                                                        <p className="text-muted">Happy Clients</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="counter-box mt-4">
                                                <div className="media">
                                                    <div className="counter-icon">
                                                        <i className="mdi mdi-layers" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h4 className="counter-value" data-count={536}>0</h4>
                                                        <p className="text-muted">Projects Compleated</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="counter-box mt-4">
                                                <div className="media">
                                                    <div className="counter-icon">
                                                        <i className="mdi mdi-cloud-download" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h4 className="counter-value" data-count={1652}>0</h4>
                                                        <p className="text-muted mb-0">Files Downloaded</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="counter-box mt-4">
                                                <div className="media">
                                                    <div className="counter-icon">
                                                        <i className="mdi mdi-code-not-equal-variant" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h4 className="counter-value" data-count={14652}>0</h4>
                                                        <p className="text-muted mb-0">Liens Of Code</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img">
                            <img src="images/features/img-2.jpg" className="img-fluid box-shadow-lg rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Counter

