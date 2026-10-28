import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export function SiteNavigation({ activePage = 'work' }: { activePage?: 'work' | 'about' }) {
  const [contactOpen, setContactOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const closeMenuTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    function updateScrollState() {
      setHasScrolled(window.scrollY > 0);
    }

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!contactOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!contactRef.current?.contains(event.target as Node)) {
        setContactOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setContactOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [contactOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('jon@sendpep.com');
      setCopyStatus('Email address copied');
    } catch {
      setCopyStatus('Could not copy email address. You can select and copy jon@sendpep.com.');
    }
  }

  function openContactMenu() {
    window.clearTimeout(closeMenuTimer.current);
    setContactOpen(true);
  }

  function scheduleContactMenuClose() {
    window.clearTimeout(closeMenuTimer.current);
    closeMenuTimer.current = window.setTimeout(() => setContactOpen(false), 180);
  }

  const navLinkClass =
    "site-nav-link [word-break:break-word] grid font-['Poppins',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0f1629] no-underline whitespace-nowrap";

  return (
    <>
      <style>{`
        .site-nav-sticky { position: sticky; top: 0; z-index: 40; pointer-events: none; }
        .site-nav-panel {
          box-sizing: border-box; width: min(100%, 648px); margin-left: auto;
          padding: 0 24px 24px; border-radius: 0 0 16px 16px;
          background: #FBFAF9; pointer-events: auto;
        }
        .site-nav-panel.is-scrolled { filter: drop-shadow(0 1px 0.75px rgba(0, 0, 0, 0.06)); }
        .site-nav-link,
        .site-nav-contact { font-size: 18px; }
        .site-nav-header { display: flex; flex-direction: column; gap: 12px; padding: 12px 0; background: transparent; pointer-events: auto; }
        .site-nav-links { display: flex; width: 100%; align-items: center; justify-content: space-between; }
        .site-nav-item { position: relative; display: flex; align-items: center; }
        .site-nav-item.is-active::after {
          position: absolute; right: 0; bottom: -5px; left: 0; z-index: 1;
          border-bottom: 2px solid #0f1629; content: "";
        }
        .site-nav-contact-menu {
          position: absolute; top: calc(100% + 4px); right: 0; z-index: 50;
        }
        .site-nav-contact-card {
          display: flex; flex-direction: column; border-radius: 6px 0 6px 6px;
          background: #fff; padding: 24px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }
        .site-nav-contact:hover,
        .site-nav-contact[aria-expanded="true"],
        .site-nav-contact:focus-visible { background: #FFEEDB; }
        .site-nav-menu-item {
          display: flex; min-height: 40px; align-items: center; gap: 20px;
          border-radius: 8px; padding: 8px;
        }
        .site-nav-menu-item:hover,
        .site-nav-menu-item:focus-visible { background: #FEEBD8; }
        .site-nav-menu-item-label { min-width: 0; flex: 1; white-space: nowrap; }
        .site-nav-email-row { gap: 0; }
        .site-nav-email-icon { margin-right: 20px; }
        .site-nav-copy-button { width: 16px; height: 16px; margin-left: 8px; }
        .site-nav-copy-button svg { width: 16px; height: 16px; }
        .site-nav-chevron { position: relative; top: -1px; width: 16px; height: 16px; flex: none; }
        @media (min-width: 640px) {
          .site-nav-contact {
            position: relative; display: inline-flex; width: 112px; height: 35px;
            box-sizing: border-box; align-items: flex-end; justify-content: flex-end;
            gap: 4px; border-radius: 4px 4px 0 0; padding: 4px 6px 0 12px;
          }
        }
        @media (min-width: 640px) {
          .site-nav-header { position: relative; height: 64px; flex-direction: row; align-items: center; gap: 40px; padding: 0; }
          .site-nav-header > a { position: absolute; bottom: 2px; left: 0; }
          .site-nav-links { position: absolute; right: 0; bottom: 4px; width: auto; height: auto; align-items: baseline; gap: 40px; }
          .site-nav-about-item { margin-right: -12px; }
          .site-nav-item { height: auto; align-items: baseline; }
        }
      `}</style>
      <nav aria-label="Main navigation" className="site-nav-sticky">
        <div className="mx-auto w-full max-w-[1280px] px-4">
          <div className={`site-nav-panel ${hasScrolled ? 'is-scrolled' : ''}`}>
            <div
              className="site-nav-header ml-auto w-full border-b border-[#f0f0ef]"
              style={{ width: 'min(100%, 600px)', marginLeft: 'auto' }}
            >
            <a
              href="/"
              className="shrink-0 whitespace-nowrap font-['Poppins',sans-serif] text-[26px] font-medium leading-[1.2] text-[#0f1629] no-underline"
            >
              Jonathan Warrecker
            </a>

            <div className="site-nav-links sm:shrink-0">
              <div className={`site-nav-item ${activePage === 'work' ? 'is-active' : ''}`}>
                <a
                  href="/"
                  aria-current={activePage === 'work' ? 'page' : undefined}
                  className={`${navLinkClass} ${activePage === 'work' ? 'font-bold' : 'font-normal'}`}
                >
                  <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">Work</span>
                  <span className="col-start-1 row-start-1">Work</span>
                </a>
              </div>

              <div className={`site-nav-item site-nav-about-item ${activePage === 'about' ? 'is-active' : ''}`}>
                <a
                  href="/about"
                  aria-current={activePage === 'about' ? 'page' : undefined}
                  className={`${navLinkClass} ${activePage === 'about' ? 'font-bold' : 'font-normal'}`}
                >
                  <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">About</span>
                  <span className="col-start-1 row-start-1">About</span>
                </a>
              </div>

              <div
                className="site-nav-item relative"
                ref={contactRef}
                onMouseEnter={openContactMenu}
                onMouseLeave={scheduleContactMenuClose}
              >
                <button
                  type="button"
                  aria-expanded={contactOpen}
                  aria-controls="contact-menu"
                  onFocus={openContactMenu}
                  onBlur={event => {
                    if (!contactRef.current?.contains(event.relatedTarget as Node | null)) {
                      scheduleContactMenuClose();
                    }
                  }}
                  className="site-nav-contact inline-flex items-baseline gap-2 border-0 bg-transparent p-0 font-['Poppins',sans-serif] font-normal leading-[1.2] text-[#0f1629]"
                >
                  Contact
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className={`site-nav-chevron h-4 w-4 shrink-0 text-[#616873] transition-transform ${contactOpen ? 'rotate-180' : ''}`}
                    fill="none"
                  >
                    <path d="M4.75 6.375 8 9.625l3.25-3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {contactOpen && (
                  <div
                    id="contact-menu"
                      onMouseEnter={openContactMenu}
                      className="site-nav-contact-menu"
                  >
                      <div className="site-nav-contact-card">
                        <div className="site-nav-menu-item site-nav-email-row">
                          <img src="/images/Email.svg" alt="" aria-hidden="true" className="site-nav-email-icon h-6 w-6 shrink-0" />
                          <a
                            href="mailto:jon@sendpep.com"
                            className="site-nav-menu-item-label font-['Poppins',sans-serif] text-[16px] text-[#0f1629] no-underline"
                          >
                            jon@sendpep.com
                          </a>
                          <button
                            type="button"
                            onClick={() => void copyEmail()}
                            aria-label="Copy email address"
                            className="site-nav-copy-button inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-0 bg-transparent p-0 text-[#616873]"
                          >
                            {copyStatus === 'Email address copied' ? (
                              <Check aria-hidden="true" className="h-4 w-4" />
                            ) : (
                              <img src="/images/Copy.svg" alt="" aria-hidden="true" className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <a
                          href="https://www.linkedin.com/in/jonathan-w123/"
                          target="_blank"
                          rel="noreferrer"
                          className="site-nav-menu-item font-['Poppins',sans-serif] text-[16px] text-[#0f1629] no-underline"
                        >
                          <img src="/images/linkedin.svg" alt="" aria-hidden="true" className="h-6 w-6 shrink-0" />
                          <span className="site-nav-menu-item-label">LinkedIn</span>
                        </a>
                        <span className="sr-only" role="status" aria-live="polite">{copyStatus}</span>
                      </div>
                    </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
