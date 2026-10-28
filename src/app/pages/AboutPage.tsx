import { ContactFooter } from '../components/ContactFooter';
import { SiteNavigation } from '../components/SiteNavigation';

export function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FBFAF9] font-['Poppins',sans-serif] text-[#0f1629]">
      <SiteNavigation activePage="about" />



      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-20 px-4 pb-0 pt-16 sm:pt-20">
        <header>
          <img
            src="/images/jonathan-square.png"
            alt="Jonathan Warrecker"
            className="mb-5 block h-[82px] w-[82px] rounded-12 object-cover"
          />
          <h1 className="m-0 text-[48px] font-semibold leading-none">About</h1>
          <p className="mt-1 w-full max-w-[724px] text-[30px] font-medium leading-[1.5] text-[#252B3A] sm:text-[30px]">
            For over 15 years, I've worked with teams from tiny startups to midsize companies, designing workflows and visual systems that help people get things done and businesses grow.
          </p>


        </header>



        <section className="grid gap-1 lg:gap-1">
        <h2 className="m-0 font-['Poppins',sans-serif] mb-6 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">
          Where it all began
        </h2>
        <div className="flex w-full max-w-[724px] flex-col gap-4">

          <p className="m-0 text-[20px] font-regular leading-[1.7]">
            I&apos;ve always loved bringing an idea to life. In high school, I started a business painting murals and later customized denim jackets. I put myself through college by waiting tables and building websites for the restaurants where I worked.
            </p>
            <p className="m-0 text-[20px] font-regular leading-[1.7]">
            Being able to design and code let me bring those websites to life myself. But building a restaurant reservation system introduced something more: guests could request tables online, and staff had fewer phone calls to manage. Working there meant I could see how the software fit into the restaurant&apos;s routines and improve it through feedback. I became interested in how the whole thing worked together.
          </p>
        </div>
      </section>

      <section className="grid gap-1 lg:gap-1">
        <h2 className="m-0 font-['Poppins',sans-serif] mb-6 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">
          Seeing the whole system
        </h2>
        <div className="flex w-full max-w-[724px] flex-col gap-4">

          <p className="m-0 text-[20px] font-regular leading-[1.7]">
            After college, I worked as a webmaster at UCSB and UCSC. Working with interfaces and configuring servers gave me a view of the entire experience—from someone browsing courses to enrolling and completing a payment. I loved seeing how much a small server could handle, and watching registrations come in made the value of what I was building tangible.
          </p>
          <p className="m-0 text-[20px] font-regular leading-[1.7]">
            I began to see visual design as part of that larger system. Color, typography, icons, and spacing each had a role in helping people understand what to do next. I became fascinated with how those individual choices could come together to make an experience feel clear and predictable.
          </p>
        </div>
      </section>


       <section className="grid gap-1 lg:gap-1">
        <h2 className="m-0 font-['Poppins',sans-serif] mb-6 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">
          Putting it into practice
        </h2>
        <div className="flex w-full max-w-[724px] flex-col gap-4">

          <p className="m-0 text-[20px] font-regular leading-[1.7]">
           I moved back to Santa Barbara to join Commission Junction as its sole designer. Its affiliate platform connected advertisers and publishers through relationships, transactions, and commissions. Working in a rapidly growing business expanded my perspective: the interface needed to make those connections understandable and useful to the people on either side.
           </p>
          <p className="m-0 text-[20px] font-regular leading-[1.7]">
        That path eventually led to 15 years at Ontraport, where I was trusted with design across the product—from drag-and-drop editors and memberships to CRM, automation, and a complete redesign.
        </p>
        <p className="m-0 text-[20px] font-regular leading-[1.7]">
        The challenge was making that breadth feel like one product. Shared components and interaction patterns helped customers carry what they learned from one workflow into the next. Working with engineering taught me to consider how those components would be built and maintained. Understanding the business helped me decide where design could make the greatest difference.
        </p>
        </div>
      </section>

      <section className="grid gap-1 lg:gap-1">
        <h2 className="m-0 font-['Poppins',sans-serif] mb-6 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">
          Where I am today
        </h2>
        <div className="flex w-full max-w-[724px] flex-col gap-4">

          <p className="m-0 text-[20px] font-regular leading-[1.7]">
           Today, I’m applying that same thinking to the way I work. Through TeamYou, I’m exploring how to keep the problem, decisions, and progress connected—and give AI the context to help throughout the design process.
           </p>

<p className="m-0 text-[20px] font-regular leading-[1.7]">
          Building with AI brings back the excitement of those first websites: I can take an idea further myself. My focus is on moving faster while keeping the work grounded in a clear problem, useful outcomes, and thoughtful craft.
          </p>
<p className="m-0 text-[20px] font-regular leading-[1.7]">
          Away from the screen, I’ve designed furniture and restored a Porsche 356 and customized a Ducati Scrambler. I also make time for mountain biking, yoga, and walks with Joey. The satisfaction of making something work beautifully has stayed with me.
        </p>
        </div>
      </section>




      <section aria-labelledby="experience-heading" className="w-full">
        <div className="sm:p-10 gap-6 rounded-[32px] bg-[#F3F0ED] p-6 sm:p-10 lg:p-15">
          <h2 id="experience-heading" className="mb-6 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">
            Experience
          </h2>
          <dl className="m-0">
            <div className="grid gap-2 border-t border-[#E3DFDA] py-6 text-[18px] leading-[1.5] text-[#252B3A] sm:grid-cols-3 sm:gap-8 sm:text-[20px]">
              <dt>Team you</dt>
              <dd className="m-0">Founding designer</dd>
              <dd className="m-0 sm:text-right">2025 - Present</dd>
            </div>
            <div className="grid gap-2 border-t border-[#E3DFDA] py-6 text-[18px] leading-[1.5] text-[#252B3A] sm:grid-cols-3 sm:gap-8 sm:text-[20px]">
              <dt>Ontraport</dt>
              <dd className="m-0">Lead product designer</dd>
              <dd className="m-0 sm:text-right">2011-2025</dd>
            </div>
            <div className="grid gap-2 border-t border-[#E3DFDA] py-6 text-[18px] leading-[1.5] text-[#252B3A] sm:grid-cols-3 sm:gap-8 sm:text-[20px]">
              <dt>JogHop</dt>
              <dd className="m-0">Founding designer</dd>
              <dd className="m-0 sm:text-right">2009-2011</dd>
            </div>
            <div className="grid gap-2 border-t border-[#E3DFDA] py-6 text-[18px] leading-[1.5] text-[#252B3A] sm:grid-cols-3 sm:gap-8 sm:text-[20px]">
              <dt>Mindflash</dt>
              <dd className="m-0">Visual Design Director</dd>
              <dd className="m-0 sm:text-right">2006-2009</dd>
            </div>
            <div className="grid gap-2 border-y border-[#E3DFDA] py-6 text-[18px] leading-[1.5] text-[#252B3A] sm:grid-cols-3 sm:gap-8 sm:text-[20px]">
              <dt>Commission Junction</dt>
              <dd className="m-0">Senior designer</dd>
              <dd className="m-0 sm:text-right">2000-2006</dd>
            </div>
          </dl>
        </div>
      </section>

        <ContactFooter />
      </div>
    </main>
  );
}
