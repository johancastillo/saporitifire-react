import AboutSection from "../components/AboutSection"
import Banner from "../components/Banner"
import Benefits from "../components/Benefits"
import BlogSection from "../components/BlogSection"
import CallToAction from "../components/CallToAction"
import ContactSection from "../components/ContactSection"
import Counter from "../components/Counter"
import Footer from "../components/Footer"
import FooterAlt from "../components/FooterAlt"
import HomeSection from "../components/HomeSection"
import Navigation from "../components/Navigation"
import Portfolio from "../components/Portfolio"
import Portfolio2 from "../components/Portfolio2"
import Preloader from "../components/Preloader"
import Pricing from "../components/Pricing"
import ProgressSection from "../components/ProgressSection"
import SkillsSection from "../components/SkillsSection"
import TeamSection from "../components/TeamSection"
import TestimonialsSection from "../components/TestimonialsSection"



const Home = () => {
    return(
       <>
        {/*  <Preloader /> */}
        <Navigation />
        <HomeSection />
        <AboutSection />
        <Banner 
            title="Más de 30 años de experiencia y profesionalismo
            en protección contra incendios."
        />
        {/*  <SkillsSection /> */}
        <br/>
        <Benefits />
        <ProgressSection />
        {/*  <Portfolio /> */}
        <Portfolio2 />
        <Counter />
        <TeamSection />
        <TestimonialsSection />
        <Pricing />
        <BlogSection />
        <CallToAction />
        <ContactSection />
        <Footer />
        <FooterAlt />
       </>
    )
}



export default Home



