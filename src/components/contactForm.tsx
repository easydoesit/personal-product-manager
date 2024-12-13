import { ChangeEvent, useState } from "react";
import { MenuListI } from "../types/types";
import { serverTimestamp} from "firebase/firestore";
import { CreateContact } from "../utils/firestoreFunctions";

interface ContactI {
  name: string;
  email: string;
  message:string;
}

export default function ContactForm({title, anchor}:MenuListI){
  const[transitionMode, setTransitionMode] = useState<string>('form');

  const contactInfoInitialState:ContactI = {
    name:'',
    email:'',
    message:''
  }

  const [contactForm, setContactForm] = useState<ContactI>(contactInfoInitialState);

  const resetForm = () => {
    setContactForm(contactInfoInitialState);
    setTransitionMode("form");
    (document.getElementById('contactForm') as HTMLFormElement).reset();
  }

  const onFieldChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const value: typeof contactForm[keyof typeof contactForm] = event.target.value;
    setContactForm({...contactForm, [event.target.id]: value});
  }

  const handleContact = async(event:React.FormEvent) => {
    event.preventDefault();

    const contactInfo = {
      name: contactForm.name,
      email: contactForm.email,
      message:contactForm.message,
      date: serverTimestamp()
    }
    
    try {
      
      setTransitionMode('transition');
      await CreateContact(contactInfo)
      .then(() => {
        console.log("It worked!!!");
        setTransitionMode("success");
        resetForm();
      });
    

    } catch(error) {
      setTransitionMode("failed");
      console.error(error);
    }

  }

  return (
      <div className="snap-start sectionScrollMarginTop bg-springlawn w-full flex flex-col items-center mt-16" id={anchor}>
      <section className=" text-midnightblue my-4 text-base w-10/12 md:w-8/12 xl:w-1/2">
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
            onChange={onFieldChange}
            required
          />
          <input
            className="form-control rounded-lg w-full md:w-1/2 pl-4 my-4 ml-0 md:ml-2 focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={onFieldChange}
            required
          />
        </div>
        
        <textarea
          className="form-control rounded-lg w-full mb-4 pl-4 focus:outline-none"
          rows={5}
          name="message"
          id="message"
          placeholder="Your Message"
          onChange={onFieldChange}
          required
        ></textarea>
        <div className="flex justify-center mb-16">
          <button className="bg-orangebeard w-40 rounded-lg text-beach" type="submit">Submit</button>
        </div>
      </form>
      </section>
    </div>
  )
}
