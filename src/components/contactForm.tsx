import { useState } from "react";
import { MenuListI } from "../types/types";
import { serverTimestamp} from "firebase/firestore";
import { CreateContact } from "../utils/firestoreFunctions";
import TransitionSending from "./transistions/transistionSending";
import TransitionSuccess from "./transistions/transistionSuccess";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


export default function ContactForm({title, anchor}:MenuListI){
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const[transitionMode, setTransitionMode] = useState<string>('form');

  const resetForm = () => {
    
    const form = document.getElementById('contactForm') as HTMLFormElement;
    setTimeout(()=> {
      form.reset();
      setTransitionMode("form");
    },3000)

  }

  const handleContact = async(event:React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!executeRecaptcha) {
      console.error('Execute Recaptcha not Available');
      return;
    }
    
    //get the form info
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      name: {value:string},
      email: {value:string},
      message: {value:string},
    }

    const contactInfo = {
      name: formElements.name.value,
      email: formElements.email.value,
      message:formElements.message.value,
      date: serverTimestamp()
    }
    
    try {      
      await executeRecaptcha('submitForm');
     
      setTransitionMode('sending');
      const result = await CreateContact(contactInfo);
      
      if (result.success) {
        setTransitionMode("success");
        resetForm();
    
      }
      
    } catch(error) {
      setTransitionMode("failed");
      console.error("Error sending email", error);
    }

  }

  return (
    <>
      <div className="snap-start sectionScrollMarginTop bg-springlawn w-full flex flex-col items-center mt-16 h-dvh" id={anchor}>
        <section className=" text-midnightblue my-4 text-base w-10/12 md:w-8/12 xl:w-1/2 pt-16">
          <h1 className="font-heading text-3xl">{title}</h1>
          <p className="ml-16 w-2/3 my-4">Let me know what you want to talk about? I'm available for consultation, questions and networking.</p>
          
          <form className="flex flex-col" id="contactForm" onSubmit={handleContact}>
            
            <div className="flex flex-col md:flex-row w-full">
              <input
                className="form-control rounded-lg pl-4 w-full md:w-1/2 mr-2 md:mr-0 md:my-4 focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                // onChange={onFieldChange}
                required
              />
              <input
                className="form-control rounded-lg w-full md:w-1/2 pl-4 my-4 ml-0 md:ml-2 focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                // onChange={onFieldChange}
                required
              />
            </div>
            
            <textarea
              className="form-control rounded-lg w-full mb-4 pl-4 focus:outline-none"
              rows={5}
              name="message"
              id="message"
              placeholder="Your Message"
              // onChange={onFieldChange}
              required
            ></textarea>
            <div className="flex flex-col items-center mb-16">
              <button className="bg-orangebeard w-40 rounded-lg text-beach" type="submit">Submit</button>
              {transitionMode === "failed" && (
                <p className="text-burgandy pt-4">Oh No! Something went wrong. Please Try Hitting Submit Again!</p>
              )}
            
            </div>
            <div className="text-center font-thin text-sm pb-4">
                 This site is protected by reCAPTCHA and the Google <a className="underline text-burgandy" href="https://policies.google.com/privacy">Privacy Policy</a> and <a className="underline text-burgandy" href="https://policies.google.com/terms">Terms of Service</a> apply.
            </div>
          </form>
        </section>
      </div>
      <>
        
        {transitionMode === 'sending' && (
          <TransitionSending />
        )} 
        
        {transitionMode === "success" && (
          <TransitionSuccess />
        )}

      </>

    </>
  )
}
