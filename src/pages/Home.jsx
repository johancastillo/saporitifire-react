import AboutSection from "../components/AboutSection"
import Banner from "../components/Banner"
import Benefits from "../components/Benefits"
import BlogSection from "../components/BlogSection"
import CallToAction from "../components/CallToAction"
import ContactSection from "../components/ContactSection"
import Counter from "../components/Counter"
import Footer from "../components/Footer"
import FooterAlt from "../components/FooterAlt"
import Slider from "../components/Slider"
import Navigation from "../components/Navigation"
import Portfolio2 from "../components/Portfolio2"
import Preloader from "../components/Preloader"
import Pricing from "../components/Pricing"
import ProgressSection from "../components/ProgressSection"
import SkillsSection from "../components/SkillsSection"
import TeamSection from "../components/TeamSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Move from "../components/Move"
import Contacts from "../components/Contacts"



const Home = () => {
    return(
       <>
        {/*  <Preloader /> */}
        <Navigation />
        <Slider />
        <AboutSection />
        <Banner 
            title="Más de 30 años de experiencia y profesionalismo
            en protección contra incendios."
            img=""
        />
        {/*  <SkillsSection /> */}
        
        <br/>
        <br/>
        <Move />
        <br/>

        {/*  <Portfolio /> */}
        <Portfolio2 />

        <Banner 
            title="DONDE NOS NECESITES ALLÍ ESTAREMOS"
            description="Cobertura nacional en sistemas contra incendios"
            img=""
        />

        <ProgressSection />

        <Benefits />

        <Banner 
            title="Contáctanos para realizar el mantenimiento de tus motores diesel"
        />

        <br/>
        <br/>
        <Contacts />
        <br/>
        <br/>

        {/* <Counter /> */}

        {/* <TeamSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <Pricing /> */}
        {/* <BlogSection /> */}
        {/* <CallToAction /> */}
        {/* <ContactSection /> */}
        <Footer />
        <FooterAlt />
       </>
    )
}



export default Home



