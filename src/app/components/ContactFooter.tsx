import { useState } from 'react';
import { Check } from 'lucide-react';

export function ContactFooter() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [emailCopyFailed, setEmailCopyFailed] = useState(false);
  const [emailExpanded, setEmailExpanded] = useState(false);

  async function handleCopyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText('jon@sendpep.com');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = 'jon@sendpep.com';
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (!copied) throw new Error('Clipboard copy command was rejected');
      }

      setEmailCopied(true);
      setEmailCopyFailed(false);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
      setEmailCopyFailed(true);
    }
  }

  return (
    <>
      <style>{`
        .contact-email-anchor { position: relative; width: 112px; height: 46px; flex: 0 0 46px; }
        .contact-email-pill {
          position: absolute; z-index: 2; top: 0; right: 0; width: 112px; height: 46px;
          overflow: hidden; border: 1.5px solid transparent; border-radius: 9999px;
          background: #171412; direction: rtl; transition: width 200ms ease-out;
        }
        .contact-email-inner { position: relative; display: flex; align-items: center; width: 100%; height: 100%; direction: ltr; }
        .contact-email-icon { position: relative; display: flex; width: 52px; height: 52px; flex: 0 0 52px; align-items: center; justify-content: center; }
        .contact-email-envelope path { stroke: white; }
        .contact-email-label {
          position: absolute; top: 50%; left: 45px; transform: translateY(-50%);
          color: white; font: 500 16px 'Poppins', sans-serif; text-decoration: none; white-space: nowrap;
        }
        .contact-email-copy {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          padding: 0; border: 0; background: transparent; color: white; cursor: pointer;
          opacity: 0; pointer-events: none;
        }
        .contact-email-text {
          position: absolute; top: 50%; left: 45px; color: white; font: 500 16px 'Poppins', sans-serif;
          white-space: nowrap; text-decoration: none; opacity: 0; transform: translate(40px, -50%);
          pointer-events: none;
        }
        .contact-email-pill.is-expanded { width: 222px; }
        .contact-email-pill.is-expanded .contact-email-envelope,
        .contact-email-pill.is-expanded .contact-email-label { opacity: 0; }
        .contact-email-pill.is-expanded .contact-email-label { pointer-events: none; }
        .contact-email-pill.is-expanded .contact-email-copy { opacity: 1; pointer-events: auto; }
        .contact-email-pill.is-expanded .contact-email-text { opacity: 1; transform: translate(0, -50%); pointer-events: auto; }
        @media (hover: none) {
          .contact-email-pill { position: relative; }
        }
        @media (max-width: 639px) {
          .contact-email-pill { position: relative; right: auto; left: auto; width: 112px; }
        }
        @media (min-width: 640px) {
          .contact-email-anchor { flex-basis: 112px; }
        }
      `}</style>
      <footer className="w-full font-['Poppins',sans-serif]" id="contact">
        <div className="flex flex-col items-start gap-6 rounded-t-[32px] bg-[#F3F0ED] p-6 sm:p-10 lg:p-15">
          <h2 className="mb-0 mt-0 text-[28px] font-semibold leading-[1.3] text-[#0f1629]">Contact</h2>
          <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:gap-6">
            <img src="/images/jonathan.png" alt="Jonathan Warrecker" className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20" />
            <div className="flex min-w-0 flex-col items-start gap-4">
            <p className="m-0 max-w-[620px] text-[22px] font-normal leading-[1.4] text-[#0f1629] sm:text-[29px]">
              Have an idea or project in mind? Let&apos;s connect—I&apos;d love to hear from you.
            </p>
            <nav aria-label="Contact and social links" className="flex w-full flex-col items-stretch gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <div className="contact-email-anchor h-[46px] min-h-[46px] w-[112px] shrink-0 self-start sm:self-auto">
                <div
                  className={`contact-email-pill${emailExpanded ? ' is-expanded' : ''}`}
                  style={{ width: emailExpanded ? 222 : 112 }}
                  onPointerEnter={event => { if (event.pointerType === 'mouse') setEmailExpanded(true); }}
                  onPointerLeave={event => { if (event.pointerType === 'mouse') setEmailExpanded(false); }}
                  onFocus={() => setEmailExpanded(true)}
                  onBlur={() => setEmailExpanded(false)}
                >
                  <div className="contact-email-inner">
                    <div className="contact-email-icon">
                      <svg className="contact-email-envelope" width="22" height="20" viewBox="0 0 22.3333 19.6667" fill="none" aria-hidden="true">
                        <path d="M21.8333 4.5V15.1667C21.8333 17.3758 20.0425 19.1667 17.8333 19.1667H4.5C2.29086 19.1667 0.5 17.3758 0.5 15.1667V4.5M21.8333 4.5C21.8333 2.29086 20.0425 0.5 17.8333 0.5H4.5C2.29086 0.5 0.5 2.29086 0.5 4.5M21.8333 4.5L13.1241 11.4714C12.4188 12.036 12.0662 12.3182 11.6827 12.4276C11.3438 12.5241 10.9895 12.5241 10.6507 12.4276C10.2671 12.3182 9.91449 12.036 9.20925 11.4714L0.5 4.5" stroke="#616873" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <button
                        type="button"
                        className="contact-email-copy"
                        onClick={() => {
                          setEmailExpanded(true);
                          void handleCopyEmail();
                          window.setTimeout(() => setEmailExpanded(false), 500);
                        }}
                        aria-label="Copy email address"
                      >
                        {emailCopied ? <Check size={18} strokeWidth={3} /> : (
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                            <path d="M10.6387 4.7373V1.89453H1.93457V11.3682H5.42676V6.63184C5.42676 5.5854 6.29303 4.7373 7.36133 4.7373H10.6387ZM7.36133 16.1055H16.0654V6.63184H7.36133V16.1055ZM16.0654 4.7373C17.1337 4.7373 18 5.5854 18 6.63184V16.1055C17.9999 17.1518 17.1336 18 16.0654 18H7.36133C6.29311 18 5.42689 17.1518 5.42676 16.1055V13.2627H1.93457C0.866271 13.2627 0 12.4146 0 11.3682V1.89453C0.000113385 0.848191 0.866341 0 1.93457 0H10.6387C11.7069 0 12.5731 0.848191 12.5732 1.89453V4.7373H16.0654Z" fill="currentColor" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <a className="contact-email-label" href="mailto:jon@sendpep.com">Email</a>
                    <a className="contact-email-text" href="mailto:jon@sendpep.com">jon@sendpep.com</a>
                  </div>
                </div>
              </div>
              <span className="sr-only" role="status" aria-live="polite">
                {emailCopied ? 'Email address copied' : emailCopyFailed ? 'Could not copy email address' : ''}
              </span>
              <div className="flex max-w-full flex-wrap items-center gap-1.5 sm:gap-3">
                <a href="https://www.linkedin.com/in/jonathan-w123" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D6D3D1] transition-colors hover:border-[#171412] hover:bg-[#171412] min-[361px]:h-10 min-[361px]:w-10 sm:h-12 sm:w-12">
                  <img src="/images/linked-in.svg" alt="" aria-hidden="true" className="h-6 w-6 transition group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="sms:+18054551090" aria-label="Send a text message" className="group inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D6D3D1] transition-colors hover:border-[#171412] hover:bg-[#171412] min-[361px]:h-10 min-[361px]:w-10 sm:h-12 sm:w-12">
                  <img src="/images/message.svg" alt="" aria-hidden="true" className="h-6 w-6 transition group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="https://www.pinterest.com/jwfromsb/" target="_blank" rel="noreferrer" aria-label="Pinterest" className="group inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D6D3D1] transition-colors hover:border-[#171412] hover:bg-[#171412] min-[361px]:h-10 min-[361px]:w-10 sm:h-12 sm:w-12">
                  <img src="/images/pinterest.svg" alt="" aria-hidden="true" className="h-6 w-6 transition group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="https://github.com/boris-the-designosaurus" target="_blank" rel="noreferrer" aria-label="GitHub" className="group inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D6D3D1] transition-colors hover:border-[#171412] hover:bg-[#171412] min-[361px]:h-10 min-[361px]:w-10 sm:h-12 sm:w-12">
                  <img src="/images/gitHub.svg" alt="" aria-hidden="true" className="h-6 w-6 transition group-hover:brightness-0 group-hover:invert" />
                </a>
                <a href="https://drive.google.com/file/d/1EIUMdy99xj87axLYL6pCSGpiR5WfdyWd/view?usp=sharing" target="_blank" rel="noreferrer" aria-label="View resume" className="group inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D6D3D1] transition-colors hover:border-[#171412] hover:bg-[#171412] min-[361px]:h-10 min-[361px]:w-10 sm:h-12 sm:w-12">
                  <img src="/images/cv.svg" alt="" aria-hidden="true" className="h-6 w-6 transition group-hover:brightness-0 group-hover:invert" />
                </a>
              </div>
            </nav>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
