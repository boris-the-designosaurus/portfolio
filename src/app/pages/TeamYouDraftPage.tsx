const teamYouScreenshot = "/images/TeamYou-1.png";
const thumbSelfScheduling = "/images/thumb-selfScheduling.png";
const specContentImg = "/images/Spec content.png";
const editorImg = "/images/editor.png";
const reportImg = "/images/report.png";
const patternsImg = "/images/31.png";
const patterns1Img = "/images/today-screen.png";

const TY_LOGO_PATH = "M48.1945 29.8434L75.2021 26.349L39.3316 74.2926L35.8549 61.6512L28.2249 67.5042L33.3263 82H19.4748L6.79825 25.641L47.5205 19.1865L48.1945 29.8434ZM16.9191 35.2523L24.5534 57.0306L41.4147 48.9159L42.3432 56.9935L61.8457 33.8134L41.7164 39.1067L41.1246 29.7624L16.9191 35.2523Z";
const TAGS = ['AI agent', 'MCP Server', 'Design workflow'];

function Tag({ label }: { label: string }) {
  return (
    <div style={{ position: 'relative', borderRadius: 100, flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: -1, border: '1px solid rgba(214,211,209,0.6)', borderRadius: 101, pointerEvents: 'none' }} />
      <div style={{ padding: '6px 16px' }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: 1.4, color: '#59524d', whiteSpace: 'nowrap', margin: 0 }}>{label}</p>
      </div>
    </div>
  );
}

export function TeamYouDraftPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#FBFAF9', minHeight: '100vh', color: '#0f1629' }}>
      <style>{`
        * { box-sizing: border-box; }
        .ty-nav-links { display: flex; flex-direction: row; align-items: flex-end; gap: 24px; }
        @media (min-width: 1024px) { .ty-nav-links { display: contents; } }
        .ty-hero { display: flex; flex-direction: column; gap: 40px; }
        @media (min-width: 1024px) { .ty-hero { flex-direction: row; align-items: flex-start; } }
        .ty-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .ty-results { display: flex; align-items: flex-start; gap: 40px; width: 100%; }
        .ty-results-label { flex: 1 1 0; min-width: 0; }
        .ty-results-content { flex: 2 1 0; min-width: 0; display: flex; flex-direction: column; gap: 16px; }
        .ty-results-summary { margin: 0; font-size: 31px; font-weight: 400; line-height: 1.4; }
        .ty-results-card { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: center; gap: 20px; padding: 40px; border-radius: 24px; background: #F3F0ED; }
        .ty-result-item { min-width: 0; }
        .ty-result-title { display: flex; align-items: center; gap: 8px; margin: 0; font-size: 36px; font-weight: 500; line-height: 1.2; }
        .ty-result-check { flex: none; color: #62BE79; }
        .ty-result-description { margin: 0; font-size: 14px; font-weight: 400; line-height: 1.5; }
        @media (max-width: 767px) {
          .ty-results { flex-direction: column; gap: 20px; }
          .ty-results-summary { font-size: 25px; }
          .ty-results-card { grid-template-columns: 1fr; gap: 24px; padding: 28px; }
          .ty-result-title { font-size: 30px; }
        }
      `}</style>

      {/* Nav */}
      <nav>
        <div className="flex items-end justify-end px-[24px] py-[16px] lg:py-0 lg:h-[64px]" style={{ maxWidth: 1248, margin: '0 auto' }}>
          <div className="inline-flex flex-col lg:flex-row lg:items-end lg:gap-[40px] gap-[8px] items-start border-b border-solid border-[#f0f0ef] ml-auto">
            <div className="flex flex-col items-start justify-end pb-[4px]">
              <a href="/draft" style={{ textDecoration: 'none' }}>
                <p style={{ fontWeight: 400, fontSize: 26, lineHeight: '32px', color: '#0f1629', whiteSpace: 'nowrap', margin: 0 }}>Jonathan Warrecker</p>
              </a>
            </div>
            <div className="ty-nav-links">
              <div className="flex flex-col items-start pb-[4px] relative">
                <div aria-hidden className="absolute border-[#ff4f01] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
                <a href="/draft" style={{ textDecoration: 'none', fontWeight: 500, fontSize: 18, lineHeight: '27px', color: '#e15a26', whiteSpace: 'nowrap' }}>Work</a>
              </div>
              <div className="flex flex-col items-start pb-[4px]">
                <p style={{ fontWeight: 400, fontSize: 18, lineHeight: '27px', color: '#0f1629', whiteSpace: 'nowrap', margin: 0 }}>About</p>
              </div>
              <div className="flex flex-col items-start pb-[4px]">
                <p style={{ fontWeight: 400, fontSize: 18, lineHeight: '27px', color: '#0f1629', whiteSpace: 'nowrap', margin: 0 }}>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content — 60px gap between sections */}
      <div style={{ maxWidth: 1248, margin: '0 auto', padding: '80px 24px 120px', display: 'flex', flexDirection: 'column', gap: 80 }}>

        {/* Hero: logo + title + subtitle + tags */}
        <div>
          {/* Logo */}
          <div style={{ width: 82, height: 82, borderRadius: 10.58, backgroundColor: '#ED5625', marginBottom: 8, flexShrink: 0 }}>
            <svg width="82" height="82" viewBox="0 0 82 82" fill="none">
              <path clipRule="evenodd" d={TY_LOGO_PATH} fill="white" fillRule="evenodd" />
            </svg>
          </div>

          <div className="ty-hero" style={{ paddingTop: 20 }}>
            <div style={{ flex: '1 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h1 style={{ fontWeight: 600, fontSize: 48, lineHeight: '70px', color: '#0f1629', margin: 0 }}>TeamYou</h1>
              <p style={{ fontWeight: 400, fontSize: 30, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
                Empowering designers to solve the right problem through integrated AI workflows.
              </p>
              <div className="ty-tags">
                {TAGS.map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
            <div className="hidden lg:block" style={{ flex: '1 0 0', minWidth: 0 }} />
          </div>
        </div>

        {/* Product screenshot */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '40px 38px 0px', gap: 10, background: '#FFC586', borderRadius: '32px 32px 0px 0px', width: '100%' }}>
          <img
            src={teamYouScreenshot}
            alt="TeamYou product — AI-assisted problem framing workflow"
            style={{ width: '100%', display: 'block', borderRadius: '12px 12px 0 0' }}
          />
        </div>

        {/* Background section */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', width: '100%' }}>
          {/* Label */}
          <div style={{ flex: '1 0 0', minWidth: 0, overflow: 'hidden' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 24, lineHeight: 'normal', color: '#0f1629', whiteSpace: 'nowrap', margin: 0 }}>Background</p>
          </div>
          {/* Content */}
          <div style={{ flex: '2 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16, }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 31, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              When anyone can build with a prompt, staying anchored to the user's real context, behavior, and desired outcome becomes more important than ever.
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
              As I began using AI throughout my own design process, I noticed it was especially useful when it had the full context behind the work. It could challenge assumptions, keep decisions aligned with business goals and requirements, surface relevant research and patterns, and catch drift before it became rework.
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
              I designed and built the concept end-to-end, including:<br />
              Product strategy · UX workflow · AI coach behavior · Decision system · Interface &amp; design system · Figma/MCP integration · Claude/Codex prototyping
            </p>
          </div>
        </div>

        {/* Problem section */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', width: '100%', paddingb: '32px' }}>
          <div style={{ flex: '1 0 0', minWidth: 0, overflow: 'hidden' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 24, lineHeight: 'normal', color: '#0f1629', whiteSpace: 'nowrap', margin: 0 }}>Problem</p>
          </div>
          <div style={{ flex: '2 0 0', minWidth: 0, }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 31, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Moving fast makes it easy to solve the wrong thing. Designers struggle to hold user needs, business goals, constraints, and decisions in context while designing—making drift and rework easy to miss.
            </p>
          </div>
        </div>

        {/* Solution section */}
        <div className="px-[0px] pt-[0px]" style={{ display: 'flex', gap: 40, width: '100%' }}>
          <div style={{ flex: '1 0 0', minWidth: 0, overflow: 'hidden' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 24, lineHeight: 'normal', color: '#0f1629', whiteSpace: 'nowrap', margin: 0 }}>Solution</p>
          </div>
          <div style={{ flex: '2 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 31, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Keep decisions connected to the work
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
              TeamYou turns project context into a persistent decision spine—capturing the user problem, business goals, constraints, and key decisions alongside the design. As the work evolves, the AI coach uses that context to challenge assumptions and flag drift before it becomes rework.
            </p>
          </div>
        </div>

        {/* Introduction callout + spec image */}
        <div style={{ backgroundColor: 'rgba(241,238,236,0.8)', textAlign: 'center', borderRadius: '32px 32px 32px 32px', width: '100%', overflow: 'hidden' }}>
          <div style={{ padding: '60px 60px 60px', display: 'flex', flexDirection: 'column',  alignItems: 'center', gap: '8px' }}>
            <p style={{ flex: '1 0 0', minWidth: 0, maxWidth: 800, textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 29, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Key decisions preserved alongside the final design
            </p>
            <p style={{ flex: '1 0 0', minWidth: 0, textAlign: 'center', width: '800px', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 20, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              The completed spec keeps the problem, decisions, and requirements visible alongside the final design, making it easy to see how the solution stays aligned.
            </p>
          </div>
          <div style={{ padding: '0 60px 60px' }}>
            <img src={specContentImg} alt="TeamYou spec content" style={{ width: '100%', display: 'block', borderRadius: '22px 22px 22px 22px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }} />
          </div>
        </div>

        {/* Confidence before handoff + editor image */}
        <div style={{ backgroundColor: 'rgba(241,238,236,0.8)', textAlign: 'center', borderRadius: '32px 32px 32px 32px', width: '100%', overflow: 'hidden' }}>
          <div style={{ padding: '60px 60px 60px', display: 'flex', flexDirection: 'column',  alignItems: 'center',  gap: '8px' }}>
            <p style={{ flex: '1 0 0', minWidth: 0, maxWidth: 800, textAlign: 'center', width: '800px', fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 29, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Confidence before handoff
            </p>
            <p style={{ flex: '1 0 0', minWidth: 0, maxWidth: 800, fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 20, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              TeamYou reviews the design against the decision spine and key quality checks, surfacing alignment, accessibility, interaction, and design-system issues before handoff.
            </p>
          </div>
          <div style={{ padding: '0 60px 60px' }}>
            <img src={editorImg} alt="TeamYou editor review" style={{ width: '100%', display: 'block', borderRadius: '22px 22px 22px 22px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }} />
          </div>
        </div>

        {/* Turn raw data into the right report */}
        <div style={{ backgroundColor: 'rgba(241,238,236,0.8)', textAlign: 'center', borderRadius: '32px 32px 32px 32px', width: '100%', overflow: 'hidden' }}>
          <div style={{ padding: '60px 60px 60px', display: 'flex', flexDirection: 'column',  alignItems: 'center', gap: '8px' }}>
            <p style={{ flex: '1 0 0', minWidth: 0, maxWidth: 800, textAlign: 'center', width: '800px', fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 29, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Turn raw data into the right report
            </p>
            <div style={{ flex: '1 0 0', minWidth: 0 }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", minWidth: 0, maxWidth: 800, fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
                TeamYou analyzes uploaded data and uses the project context to decide what's most relevant—then turns it into a focused, readable report with key metrics, trends, comparisons, and cited sources.
                <br /><br />
                In this example, that happens to be an opportunity brief because that's what best supports the decision being made.
              </p>
            </div>
          </div>
           <div style={{ padding: '0 60px 60px' }}>
            <img src={reportImg} alt="TeamYou report" style={{ width: '100%', display: 'block', borderRadius: '22px 22px 22px 22px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }} />
          </div>
        </div>

        {/* Patterns section — centered layout */}
        <div style={{ backgroundColor: 'rgba(241,238,236,0.8)', textAlign: 'center', borderRadius: '32px 32px 32px 32px', width: '100%', overflow: 'hidden' }}>
          <div style={{ padding: '60px 60px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <p style={{ textAlign: 'center', maxWidth: 800, fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 29, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Turn raw data into the right report
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", minWidth: 0, maxWidth: 800, fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
              TeamYou analyzes uploaded data and uses the project context to decide what's most relevant—then turns it into a focused, readable report with key metrics, trends, comparisons, and cited sources.
              <br /><br />
              In this example, that happens to be an opportunity brief because that's what best supports the decision being made.
            </p>
          </div>
          <div style={{ padding: '0 40px 40px' }}>
            <img src={patternsImg} alt="TeamYou patterns" style={{ width: '100%', display: 'block', borderRadius: '22px 22px 22px 22px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }} />
          </div>
        </div>

        {/* Know what to work on next */}
 <div style={{ backgroundColor: 'rgba(241,238,236,0.8)', textAlign: 'center', borderRadius: '32px 32px 32px 32px', width: '100%', overflow: 'hidden' }}>
          <div style={{ padding: '60px 60px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <p style={{ textAlign: 'center', maxWidth: 800, fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 29, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>
              Know what to work on next
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", minWidth: 0, maxWidth: 800, fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
              The Today view uses AI to prioritize and organize to-dos, showing what needs to get done each day to stay on track. It also tracks progress and celebrates milestones and accomplishments.
            </p>
          </div>
         



          
          <div style={{ padding: '0 40px 40px' }}>
            <img src={patterns1Img} alt="TeamYou today view" style={{ width: '100%', display: 'block', borderRadius: '22px 22px 22px 22px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }} />
          </div>
        </div>

        {/* Results */}
        <section className="ty-results" aria-labelledby="ty-results-heading">
          <div className="ty-results-label">
            <h2 id="ty-results-heading" style={{ fontWeight: 500, fontSize: 24, lineHeight: 'normal', color: '#0f1629', margin: 0 }}>Results</h2>
          </div>
          <div className="ty-results-content">
            <p className="ty-results-summary">
              I built TeamYou to improve my own process by integrating AI where it could add leverage—helping me frame the right problem, challenge weak assumptions, surface user pain points, catch contextual errors, and stay honest about whether the work was actually solving what it set out to solve.
            </p>
            <div className="ty-results-card">
              {[
                { title: 'AI UX', description: 'End-to-end AI workflow' },
                { title: 'TECH', description: 'Builder + systems fluency' },
                { title: 'HCD', description: 'Human-centered judgment' },
              ].map(({ title, description }) => (
                <div className="ty-result-item" key={title}>
                  <h3 className="ty-result-title">
                    <svg className="ty-result-check" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="m4 12.5 5.2 5.2L20 6.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {title}
                  </h3>
                  <p className="ty-result-description">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Up next */}
        <div style={{ width: '100%' }}>

          <div style={{ flex: '1 0 0', minWidth: 0, overflow: 'hidden' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 24, lineHeight: 'normal', color: '#0f1629', whiteSpace: 'nowrap', margin: 4 }}>Up Next</p>
          </div>
       
      
   
          <div style={{ backgroundColor: '#F3F0ED', borderRadius: 24, padding: 40, display: 'flex', gap: 40, }}>
            {/* Left: project info */}
            <div style={{ flex: '1 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <svg width="52" height="52" viewBox="0 0 42 42" fill="none" style={{ display: 'block', flexShrink: 0 }}>
                <rect fill="#1285FF" height="42" rx="8" width="42" />
                <path d="M13.3253 13.6504C17.5066 13.6506 20.3779 16.4509 20.3781 20.5821C20.3779 24.6858 17.5066 27.5145 13.3253 27.5147C9.17177 27.5147 6.30014 24.6858 6.29996 20.5821C6.30015 16.4508 9.17178 13.6504 13.3253 13.6504ZM29.9054 13.6504C33.6454 13.6505 35.6681 15.9315 35.6681 19.9688V27.5147H33.716L33.7287 20.043C33.7287 16.987 32.2598 15.3887 29.4894 15.3887C26.6635 15.3888 24.8634 17.4074 24.8634 20.6035V26.4629C24.8634 26.5741 24.8654 27.4197 24.8449 27.5147H22.9513C22.9306 27.4198 22.9513 26.5741 22.9513 26.4629L22.9416 14.8985H24.8634V16.0616H24.9181C25.9153 14.5477 27.6335 13.6504 29.9054 13.6504ZM13.3244 15.3682C10.314 15.3684 8.25113 17.4758 8.25113 20.5811C8.25134 23.6866 10.3141 25.7938 13.3244 25.794C16.3628 25.794 18.4257 23.6868 18.4259 20.5811C18.4259 17.4756 16.3629 15.3682 13.3244 15.3682Z" fill="white" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8  }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 31, color: '#0f1629', margin: 0 }}>Ontraport</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: '#0f1629', margin: 0 }}>
                  Enabling businesses to turn more interest into booked appointments.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                {['Scheduling', 'Chat', 'B2B'].map(tag => (
                  <span key={tag} style={{ padding: '5px 14px', border: '1px solid rgba(214,211,209,0.8)', borderRadius: 100, fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 14, color: '#59524d' }}>{tag}</span>
                ))}
              </div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', backgroundColor: '#171412', borderRadius: 100, border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 16, color: 'white' }}>View</span>
                <span style={{ color: 'white', fontSize: 16 }}>›</span>
              </button>
            </div>
            {/* Right: thumbnail */}
            <div style={{ flex: '1 0 0', minWidth: 0, }}>
              <img src={thumbSelfScheduling} alt="Self scheduling project thumbnail" style={{ width: '100%', display: 'block', borderRadius: 16, boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)'}} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
