import image1 from "./../images/icons/rompecabezas.svg"
import image2 from "./../images/icons/innovacion.svg"
import image3 from "./../images/icons/aprobado.svg"
import image4 from "./../images/icons/rendimiento.svg"


const Benefits = () => {
    return (
        <div className="container">
            <div className="row benefits">
                <div className="col-md-6">
                    <div className="card card-benefit">
                        <img src={image1} alt="" />

                        <h4>
                            PERSONALIZACIÓN
                    </h4>

                        <p>
                            Podemos ofrecer productos y servicios personalizados de acuerdo a sus requerimientos sin importar las circunstancias, cumpliendo con las normas NFPA.

                    </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card card-benefit">
                        <img src={image2} alt="" />

                        <h4>
                        INNOVACIÓN
                    </h4>

                        <p>
                        Ofrecemos una solución confiable, con prácticas de ingeniería innovadoras, mejores procesos de instalación, garantía y procedimientos de pruebas integrales que cumplen con una gama de regulaciones. 

                    </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card card-benefit">
                        <img src={image3} alt="" />

                        <h4>
                        CALIDAD
                    </h4>

                        <p>
                        Cumplimos con la certificación para realizar la puesta en marcha de nuestros motores contra incendios, así como realizar mantenimiento preventivo y correctivo del sistema.


                    </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card card-benefit">
                        <img src={image4} alt="" />

                        <h4>
                        RENDIMIENTO
                    </h4>

                        <p>
                        Se afianza la relación comercial entre la aseguradora y nuestro cliente, al permitir establecer pólizas proporcionales al riesgo de incendio, aumentando la confianza entre ambas partes.


                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Benefits


