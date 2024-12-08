import { SectionI } from "../types/types";

export default function ContactForm({title, anchor, topOffset}:SectionI){
  const cssReplace = `pb-96 scroll-mt-${topOffset} snap-start`

  return (
      <div className={cssReplace} id={anchor}>
      <form action="" id="contactForm">
        <h1>{title}</h1>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          id="message"
          className="form-control"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}