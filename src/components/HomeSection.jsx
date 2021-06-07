
import image1 from "./../images/slide/01.png"
import image2 from "./../images/slide/02.png"
import image3 from "./../images/slide/03.png"


const HomeSection = () => {
  return (
    <section className="home-section" id="home">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ backgroundImage: `url(${image1})` }}>
            <div className="bg-overlay" />
            <div className="home-center">
              <div className="home-desc-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="home-content text-white">

                        <br />
                        <br />
                        <br />

                        <h1 className="title mt-4 text-white text-uppercase">
                          Motores contra incendios <br />
                    Clarke para Venezuela.
                    </h1>

                        <p className="text-white mt-4 f-18">
                          Saporiti Fire, representantes exclusivos de CLARKE FIRE para Venezuela, empresa número uno en la fabricación y certificación de motores contra incendios.
                        </p>

                        {/* 
                        <div className="pt-4 mt-1">
                          <a href="#" className="btn btn-outline-white mt-2 mr-3">Get Started</a>
                          <a href="#" className="btn btn-primary mt-2">Purchase Now</a>
                        </div>
                        */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${image2})` }}>
            <div className="bg-overlay" />
            <div className="home-center">
              <div className="home-desc-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="home-content text-right">

                        <h1 className="title mt-4 pt-3 text-white text-uppercase">
                          Equipo de expertos <br />
                        en sistemas contra incendios. <br />
                        Nuestra gente, nuestro orgullo.

                        </h1>

                        <p className="text-white mt-4 f-18">
                          Contamos con un equipo certificado para inspeccionar,
                          mantener y realizar pruebas de los motores contra incendios.

                        </p>

                        {/* 
                        <div className="pt-4 mt-1">
                          <a href="#" className="btn btn-outline-white mt-2 mr-3">Get Started</a>
                          <a href="#" className="btn btn-primary mt-2">Purchase Now</a>
                        </div>
                        */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${image3})` }}>
            <div className="bg-overlay" />
            <div className="home-center">
              <div className="home-desc-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="home-content text-center text-white">

                        <h1 className="title mt-4 text-white text-uppercase">
                          Nuestro propósito es ayudar
                          proteger vidas <br /> y los activos
                          de nuestros clientes
                          .
                        </h1>

                        <p className="text-white mt-4 f-18">
                          Nuestro objetivo es mitigar el riesgo mediante
                          la protección contra incendios.
                        </p>

                        {/* 
                        <div className="pt-4 mt-1">
                          <a href="#" className="btn btn-outline-white mt-2 mr-3">Get Started</a>
                          <a href="#" className="btn btn-primary mt-2">Purchase Now</a>
                        </div>
                        */}

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


