const ProgressSection = () => {
  return (
    <section className="bg-progress section">
      <div className="bg-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-title text-center">
              <h2 className="text-uppercase text-white">
              PROCESO DE COMPRAS
              </h2>

              <div className="title-border mt-3" />
              {/* 
              <p className="title-desc text-white-50 mt-3">
                Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor
                commodo sed Pellentesque hendrerit pellentesque libero nec
                sollicitudin.
              </p>
              */}

            </div>
          </div>
        </div>
        <div className="row mt-5 pt-2">
          <div className="col-md-4 progress-border">
            <div className="text-center">
              <div className="progress-count text-white mt-4">
                <h3>01</h3>
              </div>
              <div className="progress-content bg-white mt-5 rounded p-4">
                <h5 className="f-18">CONTÁCTANOS</h5>
                <p className="text-muted mb-0">
                  Comunícate a través de los distintos canales: WhatsApp,
                  Instagram, LinkedIn y correo
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 progress-border">
            <div className="text-center">
              <div className="progress-count text-white mt-4">
                <h3>02</h3>
              </div>
              <div className="progress-content bg-white mt-5 rounded p-4">
                <h5 className="f-18">INFÓRMANOS</h5>
                <p className="text-muted mb-0">
                  Indica el modelo y serial de tu motor para identificar el
                  producto o servicio que necesitas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 progress-border">
            <div className="text-center">
              <div className="progress-count text-white mt-4">
                <h3>03</h3>
              </div>
              <div className="progress-content bg-white mt-5 rounded p-4">
                <h5 className="f-18">ADQUIERE</h5>
                <p className="text-muted mb-0">
                  Disfruta los productos y los servicios que Saporiti Fire tiene
                  para ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
