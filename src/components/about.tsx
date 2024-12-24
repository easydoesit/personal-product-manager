import { menuList } from "../data/data";
import { MenuListI } from "../types/types";
import { handleScrollClick } from "../utils/helpers";
//import { sectionScrollMarginStyles } from "../data/data";

export default function About({title, anchor}:MenuListI) {
  const sectionScrollMarginStyles = 'scroll-mt-20'
  
  return (
    <section className={`${sectionScrollMarginStyles} snap-start w-full flex flex-col items-center my-16`} id={anchor}>
      <article className=" text-darkpoop my-4 text-base w-11/12 sm:w-10/12 md:w-8/12 xl:w-1/2">
        <h1 className="font-heading text-3xl">
          {title}
        </h1>
        <div className="ml-4 mt-4 font-reading">
          <div  className="flex flex-col md:flex-row w-full"> 
            <div className="bg-[url(./img/Michael_Grills_HeadShot.jpg)] bg-no-repeat bg-cover bg-center float-left h-48 w-2/5 md:h-auto md:w-1/2 "> </div>
            <div className="w-full md:w-3/5">
              <p className="my-4 md:ml-4">
                  Hey there,
                </p>
                <p className="my-4 leading-8 md:ml-4">
                  I'm a multidisciplinary, cross-industry product leader with 20+ years of experience leading teams across various B2C, B2B, entertainment and marketing industries. <strong>My strengths lie in User Experience, where the product both delivers and delights the customer.</strong> Here's a 
                  <b> summary</b> of my career:
                </p>
              </div>
          </div>
          <ul className="ml-10 my-6 leading-8 list-disc">
            
            <li className="">
            I have a deep understanding of MVP requirements, design documentation, and project management. I have led teams from concept to implementation on various entertainment products, including video games, mobile apps, Web3 tokens, and AI.
            </li>
            <li className="my-4">
            I've managed small teams(7 or less) and large teams(60+), improving efficiency by over %200 while maintaining quality across departments.
            </li>
            <li className="my-4">
            I've worked with world-class brands, including Google, Honda, Sirius XM, Bioware Corp. and Embracer Group, as a part of their creative or product teams, bringing first-class products, advertising and entertainment to consumers worldwide.
            </li>
          </ul>
          <p className="my-4 leading-8">There is more details below and you can also <a href="https://www.linkedin.com/in/michaelgrills/" className="text-orangebeard underline">view my work history on LinkedIn.</a> Soon, my <b>Branding Asset Management Side Project</b> will be listed here. <a onClick={() => handleScrollClick(menuList[3])} className="text-orangebeard cursor-pointer underline" >Ask me About it.</a></p>
        </div>
      </article>

      <article className="text-darkpoop my-4 w-11/12  sm:w-10/12 lg:w-1/2">
        <h1 className="font-heading text-3xl">
          How I Work
        </h1>
        <div className="ml-4 mt-4 font-reading text-base">
          <p className="my-4 leading-8">
          I use my experience in art and creative direction, along with leadership development and a large helping of technical knowledge, to develop strategies and tactics, branding, and marketing for existing and new products and services.
          </p>
          <ul className="ml-10 my-6 leading-8">
            <li className="">
              <strong>Branding:</strong> Developing strong brand pillars requires looking at the business from the inside out. Product offerings, company culture and the desired consumer experience, are all considered when developing a product or a service, and those pillars are what I use to help the entire team understand the company's mission and values and how to communicate them to the customer.
            </li>
            <li className="my-4">
              <strong>Product Management:</strong> Starting with a strategic look at where the product is today and where it needs to be tomorrow, I use roadmaps, MVPs, and technical design documents to align the team behind the its vision. Planning like this keeps stakeholders in the loop and the team focused on execution. 
            </li>
            <li className="my-4">
            <strong>Leadership:</strong>  I have a delegative leadership style and rely on clear and constant communication with the team to ensure we are on the same page. I have a vast respect for specialization and expertise and want team members to bring their skills and experience to each and every problem so that they feel like their contributions matter.
            </li>
          </ul>
        </div>
      </article>

      <article className="text-darkpoop my-4 w-11/12  sm:w-10/12 lg:w-1/2">
      <h1 className="font-heading text-3xl">
          Work History
        </h1>
        
        <div className="mt-4 border-slate-200 border-2 rounded-md p-8">
          <h2 className="text-base">Matrix Labs</h2>
          <p>Sept 2022 - Current</p>
          <h3 className="text-xl mt-4"> Product Director</h3>
          <p className="ml-4 mt-4 font-reading text-base">
          I started as the Art Director at Matrix Labs, a company that is still learning via <i>Design Thinking</i> about what it would offer in Web3 products and services. However, I was quickly moved into Product Direction because the executive team felt they could leverage my product and design experience on two significant products:
          </p>
          <ul className="ml-10 my-6 leading-8 font-reading text-base">
            <li>
              <span className="font-bold">Matrix World:</span> I led the team in creating Matrix World's first MVP and provided the roadmap, MVP requirements, and short and long-term success measures.
             </li>
             <li className="mt-4">
             <span className="font-bold">Matrix Intelligence:</span> I provided the initial design work, Roadmap and MVP before handing the project to the technical team. 
             </li>
            </ul>
        </div>

        <div className="mt-4 border-slate-200 border-2 rounded-md p-8">
          <h2 className="text-base">New World Interactive</h2>
          <p>July 2020 - Feb 2022</p>
          <h3 className="text-xl mt-4">Creative Director</h3>
          <p className="ml-4 mt-4 font-reading text-base">
          I started as the Art Director at New World Interactive and, during COVID, also took on the roles of Design Director and Product Director until we could hire suitable replacements. At that point, I was moved into Creative Direction for the company. I was responsible for the following key initiatives at the company:
          </p>
          <ol type="1" className="ml-10 my-6 leading-8 font-reading text-base">
            <li>
              <span className="font-bold">1.</span> Partnering with our Marketing Director, we initiated a visual rebranding of New World Interactive into a modern-looking games studio.
             </li>
             <li className="mt-4">
              <span className="font-bold">2.</span> I was responsible for the new IP roadmap, narrative design, and art direction.  
             </li>
             <li className="mt-4">
              <span className="font-bold">3.</span> Assisted in the Sale of the company to Embracer Group.
             </li>
             <li className="mt-4">
              <span className="font-bold">4.</span> Building the team from 19 to 65, hiring key roles, including production, product, design, and technical directors.
             </li>
            </ol>
        </div>

        <div className="mt-4 border-slate-200 border-2 rounded-md p-8">
          <h2 className="text-base">Union Illustration Co</h2>
          <p>Oct 2005 - Feb 2023</p>
          <h3 className="text-xl mt-4">Creative Direction | Art Direction | Illustration | Product Direction</h3>
          <p className="ml-4 mt-4 font-reading text-base">
          I started my illustration company to learn how to run my own business and spend more time with my family. Starting this business is an example of my entrepreneurial spirit and my ability to manage clients and stakeholders and quickly partner with developers, designers and other partners. Clients included Google, Sirius XM, Virgin, Honda and many high-profile marketing firms worldwide. While the business led with Illustration, I was also responsible for the following:
          </p>
          <ol type="1" className="ml-10 my-6 leading-8 font-reading text-base">
            <li>
              <span className="font-bold">Creative/Art Direction:</span> I was responsible for the overall creative output of multiple video advertisements and many video games, which included leading other writers, artists, and developers.
             </li>
             <li className="mt-4">
              <span className="font-bold">Product Direction</span> I was often hired by many start-ups and mid-level companies to reorganize and help the product team figure out their product fit, MVP, and roadmaps.
             </li>
             <li className="mt-4">
              <span className="font-bold">Storyboards:</span> I have created hundreds of storyboards at different levels for Video, UI/UX, and customer roadmaps.
             </li>
             <li className="mt-4">
              <span className="font-bold">Illustration:</span> Amongst all that, I also drew thousands of pictures for my corporate and entertainment clients.
             </li>
            </ol>
            <p className="ml-4 mt-4 font-reading text-base">
            I closed the business to focus on my work in product on larger teams.
            </p>
        </div>
      
      
      
      </article>

    </section>
  )
}