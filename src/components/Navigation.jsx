import logoLight from "../images/logo-white.png"
import logoDark from "../images/logo-color.png"


const Navigation = () => {
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
                        
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>

                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">Portfolio</a>
                        </li>

                        <li className="nav-item">
                            <a href="#team" className="nav-link">Team</a>
                        </li>

                        <li className="nav-item">
                            <a href="#testimonial" className="nav-link">Testimonial</a>
                        </li>

                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Pricing</a>
                        </li>

                        <li className="nav-item">
                            <a href="#blog" className="nav-link">Blog</a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navigation