const teamYouLogo = "/images/Logo-teamYou.svg";
const thumbSelfScheduling = "/images/thumb-selfScheduling.png";
const thumbInbox = "/images/Thumb-inbox.png";
const thumbInbox1 = "/images/Thumb-inbox.png";
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
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#FBFAF9', minHeight: '100vh', color: '#111111' }}>
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

      {/* Nav */}
      <nav>
        <div className="wf-container flex items-end justify-end px-[24px] py-[16px] lg:py-0 lg:h-[64px]" style={{ maxWidth: 1248, margin: '0 auto' }}>
          <div className="inline-flex flex-col lg:flex-row lg:items-end lg:gap-[40px] gap-[8px] items-start border-b border-solid border-[#f0f0ef] ml-auto">
            <div className="content-stretch flex flex-col items-start justify-end pb-[4px] relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-['Poppins',sans-serif] font-normal justify-end leading-none not-italic relative shrink-0 text-[#0f1629] text-[26px] whitespace-nowrap">
                <p className="leading-[32px]">Jonathan Warrecker</p>
              </div>
            </div>
            <div className="flex flex-row items-end gap-[24px] lg:contents">
              <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0">
                <div aria-hidden className="absolute border-[#ff4f01] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                <p className="[word-break:break-word] font-['Poppins',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#e15a26] text-[18px] whitespace-nowrap">Work</p>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0">
                <p className="[word-break:break-word] font-['Poppins',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[#0f1629] text-[18px] whitespace-nowrap">About</p>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0">
                <p className="[word-break:break-word] font-['Poppins',sans-serif] font-normal leading-[27px] not-italic relative shrink-0 text-[#0f1629] text-[18px] whitespace-nowrap">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="wf-container" style={{ maxWidth: 1248, margin: '0 auto' }}>

        {/* Hero */}
        <div className="px-[24px] pt-[80px] pb-[60px]" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-center w-full">
            <div className="flex w-full lg:flex-[1_0_0] flex-col items-start justify-center leading-[1.5] min-w-px not-italic text-[#0f1629] [word-break:break-word]">
              <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-[36px] lg:text-[48px] w-full">Jonathan Warrecker</p>
              <p className="font-['Poppins',sans-serif] font-light relative shrink-0 text-[22px] w-full">I&apos;m a product designer driven by a love of craft—creating products that are effortless to use, and deliver measurable growth.</p>
            </div>
            <div className="hidden lg:block flex-[1_0_0] min-w-px relative self-stretch" />
          </div>
        </div>

        {/* Project grid */}
        <div className="px-[24px] pb-[80px]">

          <div className="wf-grid grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            {cards.map((card, i) => i === 0 ? (
                <div key={i} className="flex flex-col gap-6 rounded-[24px] bg-[#F4F2EF] p-6 sm:rounded-[32px] sm:p-10" style={{ fontFamily: "'Poppins', sans-serif" }}
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

  <div className="overflow-hidden rounded-[12px] shadow-md">
    <img
      src="/images/thumb-teamyou.png"
      alt="TeamYou application preview"
      className="block h-auto w-full"
    />
  </div>

  <div className="flex justify-end">
    <button
      onClick={() => window.location.href = "/draft/teamyou"}
      className="flex cursor-pointer items-center gap-2 rounded-full bg-[#3D3D3D] px-6 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#222]"
    >
      View
      <span aria-hidden="true">›</span>
    </button>
  </div>
</div>
              ) : (
                <div key={i} className="wf-card" style={{ backgroundColor: '#F3F0ED', gap: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 42, height: 42, flexShrink: 0 }}><img
  src="/images/Logo-ON.svg"
  alt="Ontraport"
  style={{ width: 42, height: 42, display: "block" }}
/></div>
                  </div>
                  <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.5, margin: 0, color: '#222' }}>{card.title}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {card.tags.map(tag => (
                      <span key={tag} className="wf-tag">{tag}</span>
                    ))}
                  </div>
                                    <div style={{ position: 'relative', width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 0 2px rgba(0,0,0,0.08), 0 1px 0.75px rgba(0,0,0,0.08)' }}>
                    <img src={i === 1 ? thumbSelfScheduling : i === 2 ? thumbInbox1 : thumbInbox} alt="Product screenshot" style={{ width: '100%', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.5)', pointerEvents: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={() => {if (i === 1) window.location.href = "/self-scheduling";}} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#222', color: '#fff', border: 'none', borderRadius: 100, padding: '10px 20px', fontSize: 16, fontFamily: "'Poppins', sans-serif", fontWeight: 500, cursor: 'pointer' }}>
                      View
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M1 1L4.95033 4.88215C5.01656 4.94724 5.01656 5.05276 4.95033 5.11785L1 9" stroke="#ED5625" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>

      </div>

     

      {/* Footer placeholder */}
      <div style={{ borderTopWidth: '1.5px', borderTopStyle: 'solid', borderTopColor: '#C8C8C8' }}>
        <div className="wf-container" style={{ maxWidth: 1248, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ fontSize: 10, color: '#999', letterSpacing: 1, marginBottom: 16 }}>FOOTER</div>
          <div className="wf-placeholder" style={{ width: 180, height: 16, marginBottom: 12 }} />
          <div style={{ display: 'flex', gap: 16 }}>
            <div className="wf-placeholder" style={{ width: 40, height: 40, borderRadius: '50%' }} />
            <div className="wf-placeholder" style={{ width: 40, height: 40, borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
