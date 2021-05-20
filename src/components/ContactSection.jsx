



const ContactSection = () => {
    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-title text-center">
                            <p className="text-uppercase text-muted mb-2">Contact</p>
                            <h2 className="text-uppercase">Get In Touch</h2>
                            <div className="title-border mt-3" />
                            <p className="title-desc text-muted mt-3">Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-2">
                    <div className="col-lg-5">
                        <div className="contact-info">
                            <div style={{ backgroundImage: 'url("images/features/map.png")', backgroundRepeat: 'no-repeat' }}>
                                <div className="media">
                                    <i className="mdi mdi-map-marker text-primary h4" />
                                    <div className="media-body ml-4">
                                        <p className="text-muted">2276 Lynn Ogden Lane Beaumont
                  <br />Lodgeville Road TX 77701</p>
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <i className="mdi mdi-phone text-primary h4" />
                                    <div className="media-body ml-4">
                                        <p className="text-muted">Phone: +71 612-234-4023
                  <br />Fax: +954-627-9727</p>
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <i className="mdi mdi-calendar-clock text-primary h4" />
                                    <div className="media-body ml-4">
                                        <p className="text-muted">Monday-friday: 9.00-19.00
                  <br />Saturday-Sunday: Holiday</p>
                                    </div>
                                </div>
                                <div className="media mt-4">
                                    <i className="mdi mdi-email text-primary h4" />
                                    <div className="media-body ml-4">
                                        <p className="text-muted">Email: FredVWeaver@rhyta.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="custom-form">
                            <div id="message" />
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-3">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-3">
                                            <input name="number" id="number" type="number" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-3">
                                            <textarea name="comments" id="comments" rows={5} className="form-control" placeholder="Your message" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mt-3">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" defaultValue="Send Message" />
                                            <div id="simple-msg" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default ContactSection

