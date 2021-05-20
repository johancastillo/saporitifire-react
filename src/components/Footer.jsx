


const Footer = () => {
    return (
        <footer className="bg-footer">
            <div className="container">
                <div className="footer-subscribe py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <dov className="mt-3">
                                <h5 className="text-white mt-2 pt-1">Be in the know with the letest and greatest from <span className="text-primary text-uppercase">Xeril</span></h5>
                            </dov>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-subcribe text-right">
                                <form action="#">
                                    <input placeholder="Your Email Address" type="text" />
                                    <button type="submit" className="btn btn-primary"><i className="mdi mdi-bell-ring" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-3">
                        <div className="mt-2">
                            <h6 className="text-white text-uppercase f-16">Xeril</h6>
                            <p className="text-white-50 mt-3 pt-2 mb-0 ">Semper nibh a dignissim Integer cursus tempsed quis justo molis starm the consectetur.</p>
                            <div className="mt-4">
                                <ul className="list-inline footer-social mb-0">
                                    <li className="list-inline-item">
                                        <a href="#" className="rounded">
                                            <i className="mdi mdi-facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="rounded">
                                            <i className="mdi mdi-linkedin" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="rounded">
                                            <i className="mdi mdi-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="rounded">
                                            <i className="mdi mdi-twitter" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="mt-2 pl-0 pl-lg-5">
                            <h6 className="text-white text-uppercase f-16">Resources</h6>
                            <ul className="list-unstyled footer-link mt-3 mb-0">
                                <li><a href>Monitoring Grader </a></li>
                                <li><a href>Video Tutorial</a></li>
                                <li><a href>Term &amp; Service</a></li>
                                <li><a href>Tulsy API</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="mt-2">
                            <h6 className="text-white text-uppercase f-16">Help</h6>
                            <ul className="list-unstyled footer-link mt-3 mb-0">
                                <li><a href>Sign Up </a></li>
                                <li><a href>Login</a></li>
                                <li><a href>Terms of Services</a></li>
                                <li><a href>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mt-2">
                            <h6 className="text-white text-uppercase f-16">Latest news</h6>
                            <div className="mt-3 mb-0">
                                <div className>
                                    <div className="media">
                                        <i className="mdi mdi-twitter text-white-50 float-left" />
                                        <div className="media-body">
                                            <p className="text-white-50 pl-3">Pleasures have to repudiated annoyances accepted therefore always holds chooses enjoy a pleasure consequences.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="media">
                                        <i className="mdi mdi-twitter text-white-50 float-left" />
                                        <div className="media-body">
                                            <p className="text-white-50 pl-3">Greater pleasures el esndures pains avoid welcomed avoided pariatu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer



