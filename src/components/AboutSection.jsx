
const AboutSection = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-title text-center">
                            <p className="text-uppercase text-muted mb-2">Who We Are?</p>
                            <h2 className="text-uppercase">About Agency</h2>
                            <div className="title-border mt-3" />
                            <p className="title-desc text-muted mt-3">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-2">
                    <div className="col-lg-4">
                        <div className="about-box bg-light rounded text-center mt-4">
                            <i className="mdi mdi-monitor text-primary" />
                            <h5 className="f-18 mt-3">Web design</h5>
                            <div className="lighlight-border mt-3" />
                            <p className="text-muted mt-3 mb-0">Aliquam tempor an tidunt liberonon feugiat quam risu tortor.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-box box-shadow rounded text-center mt-4">
                            <i className="mdi mdi-nfc-variant text-primary" />
                            <h5 className="f-18 mt-3">Development</h5>
                            <div className="lighlight-border mt-3" />
                            <p className="text-muted mt-3 mb-0">Aliquam tempor an tidunt liberonon feugiat quam risu tortor.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-box bg-light rounded text-center mt-4">
                            <i className="mdi mdi-lightbulb-on-outline text-primary" />
                            <h5 className="f-18 mt-3">Branding</h5>
                            <div className="lighlight-border mt-3" />
                            <p className="text-muted mt-3 mb-0">Aliquam tempor an tidunt liberonon feugiat quam risu tortor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutSection