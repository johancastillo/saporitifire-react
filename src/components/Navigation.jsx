import logoLight from "../images/logo-white.png"
import logoDark from "../images/logo-color.png"
import { useState } from "react"





const Navigation = () => {
    const [link, setLink] = useState('home')

    const changeLink = (data) => setLink(data)

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">

                <a className="navbar-brand logo text-uppercase" href="index.html">
                    <img src={logoLight} className="logo-light" alt="" />
                    <img src={logoDark} className="logo-dark" alt="" />
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                        
                        <li className={link == 'home' ? 'nav-item active' : 'nav-item'}
                            onClick={() => changeLink('home')}
                        >
                            <a href="#home" className="nav-link text-white">
                                Inicio
                            </a>
                        </li>

                        <li className={link == 'about' ? 'nav-item active' : 'nav-item'}
                            onClick={() => changeLink('about')}
                        >
                            <a href="#about" className="nav-link text-white">
                                Nosotros
                            </a>
                        </li>

                        <li className={link == 'portfolio' ? 'nav-item active' : 'nav-item'}
                            onClick={() => changeLink('portfolio')}
                        >
                            <a href="#portfolio" className="nav-link text-white">
                                Portafolio
                            </a>
                        </li>

                        <li className={link == 'benefits' ? 'nav-item active' : 'nav-item'}
                            onClick={() => changeLink('benefits')}
                        >
                            <a href="#team" className="nav-link text-white">
                                Beneficios
                            </a>
                        </li>

                        <li className={link == 'contact' ? 'nav-item active' : 'nav-item'}
                            onClick={() => changeLink('contact')}
                        >
                            <a href="#testimonial" className="nav-link text-white">
                                Contacto
                            </a>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navigation