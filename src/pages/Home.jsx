import AboutSection from "../components/AboutSection"
import BlogSection from "../components/BlogSection"
import CallToAction from "../components/CallToAction"
import ContactSection from "../components/ContactSection"
import Counter from "../components/Counter"
import Footer from "../components/Footer"
import FooterAlt from "../components/FooterAlt"
import HomeSection from "../components/HomeSection"
import Navigation from "../components/Navigation"
import Portfolio from "../components/Portfolio"
import Preloader from "../components/Preloader"
import Pricing from "../components/Pricing"
import ProgressSection from "../components/ProgressSection"
import SkillsSection from "../components/SkillsSection"
import TeamSection from "../components/TeamSection"
import TestimonialsSection from "../components/TestimonialsSection"



const Home = () => {
    return(
       <>
        <Preloader />
        <Navigation />
        <HomeSection />
        <AboutSection />
        {/*  <SkillsSection /> */}
        <ProgressSection />
        <Portfolio />
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



