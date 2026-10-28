import { ContactFooter } from "../components/ContactFooter";
import { SiteNavigation } from "../components/SiteNavigation";

const teamYouLogo = "/images/Logo-teamYou.svg";
const thumbSelfScheduling = "/images/thumb-selfScheduling.png";
const thumbInbox = "/images/Thumb-inbox.png";
const thumbweekdayCommish = "/images/thumb-weekdayCommish.png";


export function NewHomePageDraft() {
  const cards = [
    {
      icon: 'TY',
      iconBg: '#FF4F01',
      title: 'Enabling designers to keep product decisions aligned from idea through build.',
      tags: ['AI agent', 'MCP Server', 'Design workflow'],
    },
    {
      icon: 'ON',
      iconBg: '#1285FF',
      title: 'Enabling businesses to turn more interest into booked appointments.',
      tags: ['Scheduling', 'Chat', 'B2B'],
    },
    {
      icon: 'ON',
      iconBg: '#1285FF',
      title: 'Giving teams one shared inbox for every customer conversation.',
      tags: ['Messaging', 'CRM', 'B2B'],
    },
    {
      icon: '✦',
      iconBg: '#FF4F01',
      title: 'Enabling businesses to turn more interest into booked appointments.',
      tags: ['Scheduling', 'Process', 'B2B'],
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#FBFAF9', minHeight: '100vh', color: '#111111', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        * { box-sizing: border-box; }
        .nav-links { display: flex; gap: 40px; align-items: flex-end; }
        @media (max-width: 640px) {
          .nav-links { display: none; }
          .nav-name { font-size: 20px !important; }
        }
        .wf-border { border-width: 1px; border-style: solid; border-color: #C8C8C8; }
        .wf-dashed { border-width: 1px; border-style: dashed; border-color: #C8C8C8; }
        .wf-placeholder { background: #E0E0DC; border-radius: 4px; }
        .wf-tag { border-width: 1px; border-style: solid; border-color: #C8C8C8; border-radius: 100px; padding: 4px 12px; font-size: 13px; color: #555; background: transparent; }
        .wf-btn { border-width: 2px; border-style: solid; border-color: #111111; border-radius: 100px; padding: 10px 20px; font-size: 14px; font-weight: 600; background-color: #111111; color: #fff; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
        .wf-nav-link { font-size: 15px; color: #555; text-decoration: none; }
        .wf-nav-link.active { color: #FF4F01; border-bottom-width: 2px; border-bottom-style: solid; border-bottom-color: #FF4F01; padding-bottom: 2px; }
        .wf-card { background: #EFEDE8; border-radius: 16px; padding: 40px; display: flex; flex-direction: column; gap: 16px; }
        .wf-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: white; flex-shrink: 0; }
        @media (max-width: 1023px) {
          .wf-card { padding: 32px !important; }
        }
        @media (max-width: 767px) {
          .wf-grid { grid-template-columns: 1fr !important; }
          .wf-hero-title { font-size: 36px !important; }
          .wf-nav-links { display: none !important; }
        }
      `}</style>

      <SiteNavigation />

      <div className="wf-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', flex: 1 }}>

        {/* Hero */}
        <div className="pt-[80px] pb-[60px]" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-center w-full">
            <div className="flex w-full lg:flex-[1_0_0] flex-col items-start justify-center leading-[1.5] min-w-px not-italic text-[#0f1629] [word-break:break-word]">
              <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-[36px] lg:text-[48px] w-full">Hi I'm Jon,</p>
              <p className="font-['Poppins',sans-serif] font-medium relative shrink-0 text-[28px] w-full">I&apos;m a product designer driven by a love of craft—creating products that are effortless to use, and deliver measurable growth.</p>
            </div>
            <div className="hidden lg:block flex-[1_0_0] min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Project grid */}
        <div className="pb-[80px]">

          <div className="wf-grid grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            {cards.map((_, i) => i === 0 ? (
                <div key={i} className="flex flex-col gap-6 rounded-[24px] bg-[#F2EFEB] p-6 sm:rounded-[32px] sm:p-10" style={{ fontFamily: "'Poppins', sans-serif" }}
    >
  <div className="flex flex-col gap-1">
    <img
      src={teamYouLogo}
      alt="TeamYou logo"
      className="mb-1 h-[52px] w-[52px]"
    />

    <h3 className="m-0 text-[28px] leading-tight font-semibold text-[#252B3A]">
      TeamYou
    </h3>

    <p className="m-0 text-[18px] leading-[1.5] font-normal text-[#252B3A] sm:text-[20px]">
      Enabling designers to keep product decisions aligned from idea through build.
    </p>
  </div>

  <div className="flex flex-wrap gap-2">
    {["AI agent", "MCP Server", "Design workflow"].map(tag => (
      <span
        key={tag}
        className="rounded-full border border-[#E3DFDA] px-4 py-2 text-[14px] leading-none text-[#686661]"
      >
        {tag}
      </span>
    ))}
  </div>

  <div className="overflow-hidden rounded-[12px]">
    <img
      src="/images/thumb-teamyou.png"
      alt="TeamYou application preview"
      className="block h-auto w-full"
    />
  </div>

  <div className="flex justify-end">
    <button
      onClick={() => window.location.href = "/draft/teamyou"}
      className="flex cursor-pointer items-center gap-2 rounded-full bg-[#3D3D3D] px-6 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#ED5625]"
    >
      View
      <span aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4L9.95033 7.88215C10.0166 7.94724 10.0166 8.05276 9.95033 8.11785L6 12" stroke="#EFEDEB" stroke-width="2" stroke-linecap="round"/>
</svg>
</span>
    </button>
  </div>
</div>
              ) : i === 1 ? (
                <div key={i} className="flex flex-col gap-6 rounded-[24px] bg-[#F2EFEB] p-6 sm:rounded-[32px] sm:p-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <div className="flex flex-col gap-1">
                    <img
                      src="/images/Logo-op.svg"
                      alt="Ontraport logo"
                      className="mb-1 h-[52px] w-[52px]"
                    />
                    <h3 className="m-0 text-[28px] font-semibold leading-tight text-[#252B3A]">
                      Ontraport
                    </h3>
                    <p className="m-0 text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                      Enabling businesses to turn more interest into booked appointments.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Scheduling", "Chat", "B2B"].map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E3DFDA] px-4 py-2 text-[14px] leading-none text-[#686661]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src={thumbSelfScheduling}
                      alt="Ontraport self-scheduling calendar preview"
                      className="block h-auto w-full"
                    />
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="/self-scheduling"
                      className="inline-flex items-center gap-2 rounded-full bg-[#3D3D3D] px-6 py-3 text-[16px] font-medium text-white no-underline transition-colors hover:bg-[#1285FF]"
                    >
                      View
                      <span aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 4L9.95033 7.88215C10.0166 7.94724 10.0166 8.05276 9.95033 8.11785L6 12" stroke="#EFEDEB" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              ) : i === 2 ? (
                <div key={i} className="flex flex-col gap-6 rounded-[24px] bg-[#F2EFEB] p-6 sm:rounded-[32px] sm:p-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <div className="flex flex-col gap-1">
                    <img
                      src="/images/Logo-op.svg"
                      alt="Ontraport logo"
                      className="mb-1 h-[52px] w-[52px]"
                    />
                    <h3 className="m-0 text-[28px] font-semibold leading-tight text-[#252B3A]">
                      Ontraport
                    </h3>
                    <p className="m-0 text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                      Giving teams one shared inbox for every customer conversation.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Messaging", "CRM", "B2B"].map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E3DFDA] px-4 py-2 text-[14px] leading-none text-[#686661]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src={thumbInbox}
                      alt="Ontraport inbox showing customer conversations"
                      className="block h-auto w-full"
                    />
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="/inbox"
                      className="inline-flex items-center gap-2 rounded-full bg-[#3D3D3D] px-6 py-3 text-[16px] font-medium text-white no-underline transition-colors hover:bg-[#1285FF]"
                    >
                      View
                      <span aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 4L9.95033 7.88215C10.0166 7.94724 10.0166 8.05276 9.95033 8.11785L6 12" stroke="#EFEDEB" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex flex-col gap-6 rounded-[24px] bg-[#F2EFEB] p-6 sm:rounded-[32px] sm:p-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <div className="flex flex-col gap-1">
                    <img
                      src="/images/Logo-WeekDayCommish.svg"
                      alt="Ontraport logo"
                      className="mb-1 h-[52px] w-[52px]"
                    />
                    <h3 className="m-0 text-[28px] font-semibold leading-tight text-[#252B3A]">
                      Current project
                    </h3>
                    <p className="m-0 text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                      AI-first league management. Less admin, more leagues.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["AI Agents", "Workflow Automation", "B2B2C"].map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E3DFDA] px-4 py-2 text-[14px] leading-none text-[#686661]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src={thumbweekdayCommish}
                      alt="Ontraport inbox showing customer conversations"
                      className="block h-auto w-full"
                    />
                  </div>

                  <div className="flex justify-end">
                    <span
                      aria-disabled="true"
                      className="inline-flex cursor-default items-center gap-2 rounded-full bg-[#3D3D3D] px-6 py-3 text-[16px] font-medium text-white opacity-50"
                    >
                      View
                      <span aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 4L9.95033 7.88215C10.0166 7.94724 10.0166 8.05276 9.95033 8.11785L6 12" stroke="#EFEDEB" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>

     

      <section
        aria-labelledby="at-a-glance-heading"
        className="mx-auto mb-8 w-full max-w-[1280px] px-4 "
      >
        <div className="bg-[#F3F0ED] p-6 sm:p-10 gap-6 rounded-[32px] sm:p-10 lg:p-15">
          <h2 id="at-a-glance-heading" className="font-['Poppins',sans-serif] mb-6 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">
            At a glance
          </h2>
          <dl className="m-0">
            <div className="grid gap-3 border-t border-[#E3DFDA] py-6 sm:grid-cols-2 sm:gap-8">
              <dt className="font-['Poppins',sans-serif] text-[18px] font-medium leading-[1.5] text-[#252B3A] sm:text-[20px]">What I do</dt>
              <dd className="m-0 font-['Poppins',sans-serif] text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                Senior Product Designer making complex B2B SaaS workflows clear and intuitive through strategy, visual craft, and technical understanding.
              </dd>
            </div>
            <div className="grid gap-3 border-t border-[#E3DFDA] py-6 sm:grid-cols-2 sm:gap-8">
              <dt className="font-['Poppins',sans-serif] text-[18px] font-medium leading-[1.5] text-[#252B3A] sm:text-[20px]">My experience</dt>
              <dd className="m-0 font-['Poppins',sans-serif] text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                Led design from concept through implementation for CRM, payments and invoicing, scheduling, messaging, drag-and-drop editors, and marketing automation.
              </dd>
            </div>
            <div className="grid gap-3 border-t border-[#E3DFDA] py-6 sm:grid-cols-2 sm:gap-8">
              <dt className="font-['Poppins',sans-serif] text-[18px] font-medium leading-[1.5] text-[#252B3A] sm:text-[20px]">Proven results</dt>
              <dd className="m-0 font-['Poppins',sans-serif] text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                <strong>20+ initiatives shipped</strong> over 15 years at Ontraport. Inbox: <strong>~$1M additional annual revenue.</strong> Self-Scheduling: <strong>24% higher booking completion.</strong>
              </dd>
            </div>
            <div className="grid gap-3 border-y border-[#E3DFDA] py-6 sm:grid-cols-2 sm:gap-8">
              <dt className="font-['Poppins',sans-serif] text-[18px] font-medium leading-[1.5] text-[#252B3A] sm:text-[20px]">Now and next</dt>
              <dd className="m-0 font-['Poppins',sans-serif] text-[18px] font-normal leading-[1.5] text-[#252B3A] sm:text-[20px]">
                Freelancing and developing TeamYou, an independent project exploring AI-assisted design. Seeking a hands-on senior role with a small SaaS team. Open to contracts.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <div style={{ paddingTop: 32, marginTop: 'auto' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <ContactFooter />
        </div>
      </div>
    </div>
  );
}
