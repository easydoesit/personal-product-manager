import { Link } from "react-router"



export default function AIAgents() {
  return (
    <article className="w-full flex flex-col items-center">
      <div className="w-full bg-midnightblue text-grasshopper flex flex-col items-center py-8">
      <h1 className="font-heading text-3xl w-11/12 sm:w-10/12 md:w-8/12 xl:w-1/2">How I Used Narrative Design, NeuroScience and Improv Theatre To Develop an MVP AI Agent that Stayed Entertaining 12X Longer than the Competition for Matrix Labs</h1>
      </div>
      <div className=" text-darkpoop my-4 text-base w-11/12 sm:w-10/12 md:w-8/12 xl:w-1/2">
      <div className="w-full flex flex-row">
        <div className="w-2/3">
          
          <h2 className="font-heading text-xl bg-beach my-8 pl-4">At a Glance</h2>
          <ul className="text-base">
            <li className="border-b-2 border-b-beach pl-2 my-2 py-2"><b>Industry:</b> Web3</li>
            <li className="border-b-2 border-b-beach pl-2 my-2 py-2"><b>Location:</b>  East Asia and North America</li>
            <li className="border-b-2 border-b-beach pl-2 my-2 py-2"><b>Organization:</b>  1 Location in China, 1 in Canada, remote workers across multiple countries.</li>
            <li className="border-b-2 border-b-beach pl-2 my-2 py-2"><b>Challenge:</b>  Create an AI agent that would be entertaining for Web3 users, was able to maintain a pg13 level discussion, tell a story and remember long-term user reactions. All of these are beyond current LLM capabilities.
            </li>
            <li className="pl-2 my-2 py-2"><b>Solution:</b>  Combine Narrative Design Principles from Video Games and neuroscience and Improve Theatre to Develop AI Agents that remember their interactions.
            </li>
            <li className="border-b-2 border-b-beach  bg-beach p-4 mt-2">
              <ul ><b>Result:</b>
                <li className="ml-8 list-disc py-2">AI agents that remembered the story with almost no off-brand/story hallucinations.</li>
                <li className="ml-8 list-disc py-2">Agents remembered long-term key story points and users' reactions 12 times longer than the competition.</li>
                <li className="ml-8 list-disc py-2">Agents maintained PG-13 level interactions.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-[url('/img/AIAgents-BG.png')] bg-cover bg-center h-auto rounded-lg ml-2 mt-8">
        </div>
      </div>
     
     <h2 className="font-heading text-2xl mt-8">Introduction</h2>
     <div className="flex flex-row w-full">
      <div className="flex content-center w-1/4 mr-8"><img src="/img/Matrix Labs_logo_light.svg"/></div>
        <p className="my-4 leading-8 mt-4 font-reading w-3/4">
          Matrix Labs is a Web3 AI company known for exceptional integrations of well-known brands into the Web3 ecosystem. They asked me to develop a design for an AI agent that could compete with existing AI agents on the market.
        </p>
      </div>

      <h2 className="font-heading text-2xl mt-8">Step 1: Research</h2>
      <div className="font-reading leading-8 my-4">
      <p className="mt-4">
        Our team researched a few different competitor products, but as team leader, <b>I focused on two significant areas:</b>
      </p>
      <p className="my-4">
         The first was the leader in the space <Link to='https://character.ai/' className="text-orangebeard underline">Character.ai</Link>, whose simple interface and interactions had given them a $1B valuation.
      </p>
      <p className="my-4">
         The second was to dive into <Link to='https://chatgpt.com/' className="text-orangebeard underline">ChatGPT</Link> and learn how it handled interactions from an entertainment point of view.
      </p>
      <p className="my-4">
        <b>I found the following limitations of the LLMs and the products leveraging the technology.</b>
      </p>
      <ul>
        <li className="ml-12 list-decimal py-2">
        <b>The length of memory of the interactions was severely limited.</b> Most Competitor Agents could not remember what had happened after approximately 20 interactions or less than 10 minutes.
        </li>
        <li className="ml-12 list-decimal py-2">
          <b>It was easy to get the agents to change the subject.</b> I could <b>“break”</b> the agent out of the PG13 interactions with simple commands forcing the AI out of its safeguards, making the conversation turn R-rated quickly. After enough practice, I was able to do it in just two commands.
        </li>
        <li className="ml-12 list-decimal py-2">
          <b>Characters began to modify their responses to patronize the user, which goes against the principles simple storytelling.</b> For example, because I did a lot of R-rated testing. Eventually, all the new characters I met would try to have R-rated conversations with me, even when I wanted wholesome superhero stories.
        </li>
      </ul>
      </div>
      
      <h2 className="font-heading text-2xl mt-8">Step 2: Summarize Conclusions</h2>
        <div className="font-reading leading-8 my-4">
          <p className="mt-4 font-semibold">	I used what I know about gaming and narrative design, sociology and brain science to come to the following conclusions:
          </p>
            <ul>
              <li className="ml-12 list-decimal py-2">
              Since human memory is flawed, we can make agents with a believable, flawed memory, but they have to feel like they remembered key events, even if they didn’t remember them perfectly.
              </li>
              <li className="ml-12 list-decimal py-2">
               We can’t rely on the AI agent for guardrails in PG-13 content. It would require an outside force, but that must also be AI.
               </li>
               <li className="ml-12 list-decimal py-2">
               The agent itself can't keep the story moving. It needs help.
               </li>
               <li className="ml-12 list-decimal py-2">
               The agent needs constant reminders of what has happened in the past.
               </li>
               <li className="ml-12 list-decimal py-2">
               The agent wants to patronize the user(make them happy) instead of focusing on the story.
               </li>
            </ul>
        </div>
        
        <h2 className="font-heading text-2xl mt-8">Step 3: Extend LLM Capabilities</h2>
        <div className="font-reading leading-8 my-4">
          <p className="mt-4">
          Each problem and conclusion had a solution that existed in <b className="underline">non-technical, established creative industries.</b> Since LLM's responses are based on the most probable outcomes and we wouldn’t know what their interactions would be like, I knew we had to guide the LLM to something the user would believe.
          </p>

          <h3 className="font-heading text-xl mt-8">Memory:</h3>
          <p className="mt-4">
            <Link className="text-orangebeard underline" to="https://pmc.ncbi.nlm.nih.gov/articles/PMC4183265/#:~:text=The%20'imperfection'%20of%20memory%20has,routinely%20become%20distorted2%2D7.">Neuroscience has proven that memories are flawed</Link> and that every time a human remembers something, it changes the memory. I knew I could use this to my advantage as even a player would not remember the details of a story.
          </p>
          <p className="my-4">
            The solution was to have the AI summarize the story every ## of interactions and save that summary to be used again in recall. The summaries allowed the AI to be refed information about the story and continue telling it as though it was starting at its 1000 interaction instead of its first.
          </p>
        
        <h3 className="font-heading text-xl mt-8">Improvising the Story:</h3>
          <p className="mt-4">
          The agent needed to improvise as the player had free agency to guide the story. I realized there was a tradition in improv theatre for cooperative storytelling where all the actors would attempt to keep the scene going by always being agreeable to the story instead of fighting against it.
          </p>
          <p className="my-4">
            Example of Good Improv:
          </p>
          <p className="my-4 ml-8">
          <b>Actor 1:</b> I’m bringing my sister over for dinner.<br />
          <b>Actor 2:</b> That’s nice. Will she bring her husband?<br />
          <b>Actor 1:</b> She will, but I don’t need his company.<br />
          </p>
          <p className="my-4">
            The example is good because both actors move the story and dialogue forward without contradiction. They even add a possible tension point by saying they don’t necessarily like the husband. This example shows the first rule of improv, “Yes And.”
          </p>
          <p className="my-4">
            So we could replace the dialogue with:
          </p>
          <p className="my-4 ml-8">
            <b>Actor 1:</b> I’m bringing my sister over for dinner.<br />
            <b>Actor 2:</b> Yes, and that’s nice. Will she bring her husband?<br />
            <b>Actor 1:</b> Yes, and she will, but I don’t need his company.<br />
          </p>
          <p className="my-4">
            Contrast this with a broken and confusing scene:
          </p>
          <p className="my-4 ml-8">
          <b>Actor 1:</b>  I’m bringing my sister over for dinner.<br />
          <b>Actor 2:</b> No, it's grandma and her husband.<br />
          <b>Actor 1:</b> Oh, my mistake…<br />
          </p>
          <p className="my-4">
            Actor 1 has to figure out what to say next, and the audience is confused. It's not the best on-stage performance.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/RkGUjMYWKv4?si=aPZNtCljERjqt6yC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="my-4">
            By adding this device to the prompt, we could always move the story forward and prevent the LLM from hallucinating as much.
          </p>
          <p className="my-4">
          To keep things on track, we added a director bot. Anytime the Agent acted negatively on the scene or created confusion, the director bot would ask it to “try again.” This helped to keep the story on track much longer.
          </p>
          <p className="my-4">
            The user was unaware of this second Director agent.
          </p>

          <h3 className="font-heading text-xl mt-8">Keeping Interactions Clean:</h3>
          <p className="my-4">
            The LLM is easily manipulated into innuendo, which can quickly lead to R-rated systems. We solved this by creating a third Agent as the censor bot. If the user used innuendo or R-rated language, the censor would reinterpret the input as something pg-13. So, the agent would never see the human’s attempt to change the story. Since we allowed a certain amount of fantasy violence, we had to tweak this bot to enable certain things to pass scrutiny. 
          </p>
          <p  className="my-4">
            The result was that getting the agent to respond with ratings above our pg-13 threshold was virtually impossible.
          </p>
          
          <h3 className="font-heading text-xl mt-8">Giving the AI Willpower:</h3>
          <p className="my-4">
            The LLMs don’t have free will; <b>they are designed to give the user a desirable response, and most products would most likely want to adhere to this philosophy, but in entertainment, you want the opposite.</b> You want Agents to feel that they have a will of their own.
          </p>
          <p className="my-4">
            The Director Agent was used here as well. If the Character began patronizing the player, the director would ask it to “try again " by reminding it of its will and desire. This caused the character to move through the story as an actor instead of delivering what the player wanted. 
          </p>
        </div>

        <h2 className="font-heading text-2xl mt-8">Conclusion</h2>
        <div className="font-reading leading-8">
          <p className="mt-4">
            By creating this overall brain that oversaw the LLM’s responses, we created different characters with different storylines that players could believe and be entertained by for over 120 minutes without rating above PG-13 or going off track.
          </p>
          <p className="my-4">To see the AI in Action go here:</p>
          <Link to="https://world3.ai/souldragons/origin" className="underline text-orangebeard text-center">
            <img src="/img/Soul_Dragons.png" alt="Image of Soul Dragon Characters found at MatrixWorld.AI"className="w-full rounded-lg"></img>
            <p>Soul Dragons</p>
          </Link>
          
          </div>
      </div>
      

    </article>
  )
}