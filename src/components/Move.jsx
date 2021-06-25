
import image1 from "../images/icons/pasion.svg"
import image2 from "../images/icons/manos.svg"
import image3 from "../images/icons/medal.svg"


const Move = () => {
    return(
        <div className="container">
            <h3 className="text-center text-uppercase">
                LO QUE NOS MUEVE
            </h3>

            <p className="text-center">
                Como parte de nuestro ADN empresarial, lo que nos mueve, inspira, complementa y hace garantizar <br/>
                que todas las expectativas de nuestros grupos de interés, sean cubiertas y superadas.
            </p>

            <br/>
            <br/>

            <div className="row">

                <div className="col-md-4 flex-center">
                    <div className="circle">
                        <img src={image1} alt=""/>
                    </div>
                </div>
                
                <div className="col-md-4 flex-center">
                    <div className="circle">
                        <img src={image2} alt=""/>
                    </div>
                </div>
                
                <div className="col-md-4 flex-center">
                    <div className="circle">
                        <img src={image3} alt=""/>
                    </div>
                </div>

            </div>

            <div className="row">
                
            </div>

            <br/>
            <br/>

        </div>
    )
}


export default Move




