

const HomeSection = () => {
    return(
        <section className="home-section" id="home">
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" style={{backgroundImage: 'url("images/bg-1.jpg")'}}>
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="home-content text-white">
                    <div className="watch-video mt-5">
                      <a href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <i className="mdi mdi-play play-icon-circle play play-icon f-30" />
                      </a>
                    </div>
                    <h5 className="sub-title mt-4 text-white pt-2 text-uppercase">Xeril Template</h5>
                    <h1 className="title mt-4 text-white text-uppercase">We're Giving Design <br /> Solution &amp; Idea.</h1>
                    <div className="pt-4 mt-1">
                      <a href="#" className="btn btn-outline-white mt-2 mr-3">Get Started</a>
                      <a href="#" className="btn btn-primary mt-2">Purchase Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" style={{backgroundImage: 'url("images/bg-2.jpg")'}}>
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="home-content text-right">
                    <div className="watch-video mt-5">
                      <a href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <i className="mdi mdi-play play-icon-circle play play-icon f-30" />
                      </a>
                    </div>
                    <h1 className="title mt-4 pt-3 text-white text-uppercase">Why Wait? Xeril<br />Right Now!</h1>
                    <p className="text-white mt-4 f-18">Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis pulvinar
                      <br /> laoreet Nulla facilisi Maecenas eget velit laoreet.</p>
                    <div className="pt-4 mt-1">
                      <a href="#" className="btn btn-outline-white mt-2 mr-3">Get Started</a>
                      <a href="#" className="btn btn-primary mt-2">Purchase Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" style={{backgroundImage: 'url("images/bg-4.jpg")'}}>
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="home-content text-center text-white">
                    <div className="watch-video mt-5">
                      <a href="http://vimeo.com/99025203" className="video-play-icon-trigger text-white">
                        <i className="mdi mdi-play play-icon-circle play play-icon f-30" />
                      </a>
                    </div>
                    <h1 className="title mt-4 text-white text-uppercase">We Are a Web Agency <br /> Focused On Quality</h1>
                    <p className="text-white mt-4 f-18">Vivamus sodales eleifend odio eget mollis Cras consectetur nisi quis pulvinar
                      <br /> laoreet Nulla facilisi Maecenas eget velit laoreet.</p>
                    <div className="pt-4 mt-1">
                      <a href="#" className="btn btn-outline-white mt-2 mr-3">Get Started</a>
                      <a href="#" className="btn btn-primary mt-2">Purchase Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</section>

    )
}


export default HomeSection


