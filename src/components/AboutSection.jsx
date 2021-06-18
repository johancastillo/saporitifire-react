const AboutSection = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-title text-center">
              <p className="text-uppercase text-muted mb-2">¿Quienes somos?</p>
              <h2 className="text-uppercase">Nuestro Norte</h2>
              <div className="title-border mt-3" />
              <p className="title-desc text-muted mt-3">
                Nuestra razón de ser es proteger las personas y los activos de
                nuestros clientes. Gracias a nuestra experiencia y
                profesionalismo, Saporiti Fire junto con su equipo, garantiza la
                resolución de los problemas más simples hasta los más complejos.
                Ofrecemos una gama de productos y servicios, donde evaluamos el
                correcto funcionamiento de los equipos ante cualquier
                contingencia, basados y fundamentados en las normas NFPA.
                Saporiti como representante exclusivo de CLARKE FIRE PROTECTION
                PRODUCTS INC para Venezuela, empresa norteamericana mundialmente
                reconocida en el rubro de motores diesel para bombas contra
                incendios, se garantiza que todos nuestros componentes, piezas y
                motores, brinden la protección contra incendios más confiable
                del mercado. Tenemos más de 30 años de experiencia en Venezuela,
                brindando una excelente calidad de servicio y precios que solo
                un representante Clarke puede tener.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mt-5 pt-2">
          <div className="col-md-6">
            <div className="about-box bg-light rounded text-center mt-4">
              {/* <i className="mdi mdi-monitor text-primary" /> */}

              <h5 className="f-18 mt-3">Nuestra Razón de ser</h5>

              <div className="lighlight-border mt-3" />
              <p className="text-muted mt-3 mb-0">
                Brindar confianza a nuestros clientes a través de las mejores
                prácticas y certificaciones que avalan la excelente calidad de
                nuestros productos y servicios para sistemas y motores contra
                incendios.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-box box-shadow rounded text-center mt-4">
                {/* <i className="mdi mdi-monitor text-primary" /> */}

              <h5 className="f-18 mt-3">
                ¿Qué queremos lograr?
              </h5>

              <div className="lighlight-border mt-3" />
              
              <p className="text-muted mt-3 mb-0">
                Consolidarnos como una compañia lider en el sector de seguridad
                industrial, al mantener relaciones estables y duraderas con
                nuestros clientes, al cumplir sus expectativas y la de nuestros
                colaboradores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
