//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/menu'
import ContactForm from './components/contactForm'
import About from './components/about'
import { menuList } from './data/data'
import Projects from './components/projects'
import Hero from './components/hero'
import Footer from './components/footer';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function App() {  
    
  return (
    <div className='snap-y'>
    <Menu />
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
    {/* <ContactForm 
       title= {menuList[3].title}
       anchor={menuList[3].anchor}
    /> */}
    <Footer />
    </div>
  )
}

export default App
