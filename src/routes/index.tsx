import { menuList } from '../data/data'
import Menu from '../components/menu'
import ContactForm from '../components/contactForm'
import About from '../components/about'
import Projects from '../components/projects'
import Hero from '../components/hero'
import Footer from '../components/footer';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import '../index.css';
import { useLocation } from "react-router";
import CaseStudies from './caseStudies/caseStudies'

export default function Index() {

  const location = useLocation();

  return (
    <div className='snap-y'>
    <Menu />
    {location.pathname === '/' && (
      <>
    <Hero 
      anchor={menuList[0].anchor}
    />
    <About 
    title= {menuList[1].title}
    anchor={menuList[1].anchor}
    />
     <Projects
    title= {menuList[2].title}
    anchor={menuList[2].anchor}
    />
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_GOOGLE_RECAPTCHA}>
    <ContactForm title="Contact Me" anchor="contact" />
  </GoogleReCaptchaProvider>
  </>
    )}

  {location.pathname.includes('case-studies') && (
    <>
    <CaseStudies />
    </>
  )}

    <Footer />
    </div>
  )
}