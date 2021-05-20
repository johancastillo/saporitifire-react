


const SkillsSection = () => {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="row vertical-content">
                    <div className="col-lg-6 p-0">
                        <div className="skill-box bg-white p-4 rounded box-shadow">
                            <h5>Best Skills.</h5>
                            <p className="text-muted">Quisque semper nulla euismod tempor sodales eleifend libero velit Proin pulvinar non rutrum elementum.</p>
                            <div className="skills">
                                <div className="mt-4">
                                    <p className="font-weight-bold mb-2">Web Design</p>
                                    <div className="progress">
                                        <div className="progress-bar rounded" style={{ width: '80%' }}>
                                            <p className="progress-value f-15 font-weight-bold">80%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-weight-bold mb-2">Development</p>
                                    <div className="progress">
                                        <div className="progress-bar rounded" style={{ width: '60%' }}>
                                            <div className="progress-value f-15 font-weight-bold">60%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-weight-bold mb-2">Branding</p>
                                    <div className="progress">
                                        <div className="progress-bar rounded" style={{ width: '40%' }}>
                                            <div className="progress-value f-15 font-weight-bold">40%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-weight-bold mb-2">Code</p>
                                    <div className="progress">
                                        <div className="progress-bar rounded" style={{ width: '75%' }}>
                                            <div className="progress-value f-15 font-weight-bold">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 about-img">
                        <img src="images/features/img-1.jpg" className="img-fluid rounded box-shadow" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}



export default SkillsSection

