
import product1 from "./../images/products/01.png"

const Portfolio2 = () => {
    return(
        <div className="container">
            <h3 className="text-center text-uppercase">
                Portafolio
            </h3>

            <p className="text-center">
                ¿Qué ofrecemos?
            </p>

            <h5>Productos</h5>
            
            <div className="row">

                <div className="col-md-4 tarjet">
                    <img src={product1} alt="" />
                </div>
                
                <div className="col-md-4 tarjet">
                    <img src={product1} alt="" />
                </div>

                <div className="col-md-4 tarjet">
                    <img src={product1} alt="" />
                </div>

            </div>

            <br />

            <h5>Servicios</h5>
            
            <div className="row">

                <div className="col-md-4 tarjet">
                    <img src={product1} alt="" />
                </div>
                
                <div className="col-md-4 tarjet">
                    <img src={product1} alt="" />
                </div>

                <div className="col-md-4 tarjet">
                    <img src={product1} alt="" />
                </div>

            </div>

        </div>
    )
}




export default Portfolio2





