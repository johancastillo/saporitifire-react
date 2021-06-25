
import product1 from "./../images/products/01.png"
import product2 from "./../images/products/02.png"
import product3 from "./../images/products/03.png"
import service1 from "./../images/services/01.png"
import service2 from "./../images/services/02.png"
import service3 from "./../images/services/03.png"

const Portfolio2 = () => {
    return(
        <div className="container" id="portfolio">
            <h3 className="text-center text-uppercase">
                Portafolio
            </h3>

            <p className="text-center">
                ¿Qué ofrecemos?
            </p>


            <h5>Productos</h5>
            
            <div className="row-grid">

                <div className="tarjet" style={{background:`linear-gradient(180deg, rgba(193, 28, 58, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(${product1})`}}>
                    <h6>Motores</h6>
                </div>

                <div className="tarjet" style={{background:`linear-gradient(180deg, rgba(193, 28, 58, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(${product2})`}}>
                    <h6>Suministros</h6>
                </div>

                <div className="tarjet" style={{background:`linear-gradient(180deg, rgba(193, 28, 58, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(${product3})`}}>
                    <h6>Partes</h6>
                </div>
                

            </div>

            <br/>

            <h5>Servicios</h5>
            
            <div className="row-grid">

                <div className="tarjet" style={{background:`linear-gradient(180deg, rgba(193, 28, 58, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(${service1})`}}>
                    <h6>Arranque y puesta <br/> en marcha</h6>
                </div>

                <div className="tarjet" style={{background:`linear-gradient(180deg, rgba(193, 28, 58, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(${service2})`}}>
                    <h6>Inspección, prueba <br/> y mantenimiento</h6>
                </div>

                <div className="tarjet" style={{background:`linear-gradient(180deg, rgba(193, 28, 58, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), url(${service3})`}}>
                <h6>Asesorias</h6>
                </div>
                

            </div>

        </div>
    )
}




export default Portfolio2





