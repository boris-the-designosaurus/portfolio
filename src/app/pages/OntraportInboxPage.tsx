import { ContactFooter } from '../components/ContactFooter';
import { SiteNavigation } from '../components/SiteNavigation';

const tags = ['Messaging', 'CRM', 'B2B'];

export function OntraportInboxPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FBFAF9] font-['Poppins',sans-serif] text-[#0f1629]">
      <SiteNavigation />

      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-20 px-4 pb-0 pt-16 sm:pt-20">
        <header>
          <img src="/images/Logo-op.svg" alt="Ontraport" className="mb-5 block h-[82px] w-[82px]" />
          <h1 className="m-0 text-[48px] font-semibold leading-none">Ontraport Inbox</h1>
          <div className="mt-1 max-w-[700px]">
            <p className="m-0 text-[30px] font-normal leading-[1.4]">
              Helping customers get answers faster while helping businesses manage conversations without missed opportunities.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="rounded-full border border-[#D6D3D1] px-4 py-2 text-sm text-[#59524d]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <figure className="m-0 overflow-hidden rounded-t-[32px] bg-[#6AB2FF] p-3 pb-0 sm:p-8 sm:pb-0">
          <img
            src="/images/screenShot-Inbox.png"
            alt="Ontraport Inbox showing customer conversations alongside a message thread"
            className="block h-auto w-full"
          />
        </figure>

        <section className="grid gap-6 lg:grid-cols-[363px_minmax(0,1fr)] lg:gap-10">
          <h2 className="m-0 text-[24px] font-regular leading-[40px] text-[#616873]">Background</h2>
          <div className="flex flex-col gap-4">
            <h2 className="mb-1 mt-0 text-[30px] font-medium leading-[1.3]">
              Businesses rely on customer communication to build relationships, resolve issues, and move opportunities forward.
            </h2>
            <p className="m-0 text-[24px] font-regular leading-[1.5] tracking-[0]">
              At the time, many teams relied on shared inboxes and separate messaging tools. Ontraport wanted to centralize those conversations and route them to the right person or team, while connecting communication directly to customer data such as purchase history and contact activity.
            </p>
            <div className="mt-4 grid gap-6 border-t border-[#E5E7EB] pt-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <h3 className="mb-1 mt-0 text-[20px] font-semibold">Role</h3>
                <p className="m-0 text-[20px] font-light leading-[1.5]">Design lead</p>
              </div>
              <div>
                <h3 className="mb-1 mt-0 text-[20px] font-semibold">Team</h3>
                <p className="m-0 text-[20px] font-light leading-[1.5]">
                  Product designer<br />
                  Product manager<br />
                  Research<br />
                  Engineers (Backend and frontend)
                </p>
              </div>
              <div>
                <h3 className="mb-1 mt-0 text-[20px] font-semibold">Responsibilities</h3>
                <p className="m-0 text-[20px] font-light leading-[1.5]">
                  Research<br />
                  Interaction Design<br />
                  Prototyping<br />
                  Usability Testing<br />
                  Visual Design<br />
                  Design system
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[363px_minmax(0,1fr)] lg:gap-10">
          <h2 className="m-0 text-[24px] font-regular leading-[40px] text-[#616873]">Problem</h2>
          <div>
            <p className="m-0 text-[30px] font-medium leading-[1.3]">
              Teams lacked a single place to see complete customer conversations alongside contact history and customer details. They also had no integrated way to chat with website visitors in real time.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[363px_minmax(0,1fr)] lg:gap-10">
          <h2 className="m-0 text-[24px] font-regular leading-[40px] text-[#616873]">The solution</h2>
          <div>
            <p className="mb-4 mt-0 text-[30px] font-medium leading-[1.3]">
              Central hub for managing one-on-one conversations with leads and clients.
            </p>
            <p className="m-0 text-[24px] font-regular leading-[1.5] tracking-[0]">
            We created a centralized inbox for email, SMS, and web chat, with filters and routing to get conversations to the right team or person. Customer context lived alongside each conversation, while automation handled follow-up, business hours, escalation, and website chat.            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-[28px] bg-[#EEEBE9]">
          <div className="flex min-h-[254px] flex-col items-center justify-center p-6 text-center sm:p-[60px]">
            <h2 className="mb-4 mt-0 text-[32px] font-medium leading-[1.3]">A shared view of every conversation</h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              Review customer conversations in a single list, then open a thread to see messages and related activity together. This keeps the conversation and its context close at hand.
            </p>
          </div>
          <figure className="m-0 px-6 pb-6 sm:px-[60px] sm:pb-[60px]">
            <img
              src="/images/screenShot-Inbox-rightPanel.png"
              alt="Inbox conversation list and selected customer message thread"
              className="block h-auto w-full rounded-[14px]" style={{ width: '100%', display: 'block', borderRadius: '22px 22px 22px 22px', boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }}
            />
          </figure>
        </section>


         <section className="overflow-hidden rounded-[28px] bg-[#EEEBE9]">
          <div className="flex min-h-[254px] flex-col items-center justify-center p-6 text-center sm:p-[60px]">
            <h2 className="mb-4 mt-0 text-[32px] font-medium leading-[1.3]">Bring the conversation to your website</h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              Web Chat lets visitors ask questions directly from your website while your team responds from a centralized Inbox. Custom business hours let visitors know when your team is available.
            </p>
          </div>
          <figure className="m-0 px-6 pb-6 sm:px-[60px] sm:pb-[60px]">
            <img
              src="/images/screenShot-Inbox-webchat.png"
              alt="Inbox conversation list and selected customer message thread"
              className="block h-auto w-full rounded-[14px]" style={{ width: '100%', display: 'block', }}
            />
          </figure>
        </section>


                <section className="overflow-hidden rounded-[28px] bg-[#EEEBE9]">
          <div className="flex min-h-[254px] flex-col items-center justify-center p-6 text-center sm:p-[60px]">
            <h2 className="mb-4 mt-0 text-[32px] font-medium leading-[1.3]">Answers after hours</h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              AI answers customer questions when the team is offline. Two new automation elements support the workflow: Conversation is created starts the automation, and Chatbot message delivers the response generated by the existing AI Assistant.
            </p>
          </div>
          <figure className="m-0 px-6 pb-6 sm:px-[60px] sm:pb-[60px]">
            <img
              src="/images/screenShot-Inbox-autoHours.png"
              alt="Inbox conversation list and selected customer message thread"
              className="block h-auto w-full rounded-[14px]" style={{ width: '100%', display: 'block', }}
            />
          </figure>
        </section>


        <section className="grid gap-6 lg:grid-cols-[363px_minmax(0,1fr)] lg:gap-10" aria-labelledby="self-scheduling-results-heading">
          <h2 id="self-scheduling-results-heading" className="m-0 text-[24px] font-regular leading-[40px] text-[#616873]">
            Results
          </h2>
          <div className="flex flex-col gap-12">
            <p className="m-0 text-[32px] font-medium leading-[1.4]">
              Inbox centralized text and email conversations across channels, helping businesses turn customer messages into sales opportunities. It also generated additional revenue for Ontraport through upgrades from existing customers and helped attract new customers seeking shared messaging.
            </p>
            <div className="grid gap-5 rounded-[24px] bg-[#F3F0ED] p-8 sm:grid-cols-3 sm:p-10">
              {[
                { value: '1.2m', label: 'Additional revenue in the first year.', icon: 'up' },
                { value: '4.2%', label: 'Existing self-serve users upgraded to premium within 90 days.', icon: 'up' },
                { value: '8mo', label: 'Time for Inbox to pay for itself.', icon: 'calendar' },
              ].map(({ value, label, icon }) => (
                <div key={value} className="flex min-w-0 flex-col gap-1">
                  <p className="m-0 flex items-center gap-1 text-[36px] font-medium leading-[1.2] text-[#0f1629]">
                    <img
                      src={icon === 'calendar' ? '/images/cal.svg' : '/images/upRight-arr.svg'}
                      alt=""
                      aria-hidden="true"
                      className="h-[22px] w-[22px] shrink-0"
                    />
                    {value}
                  </p>
                  <p className="m-0 text-[14px] font-normal leading-[1.5]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactFooter />
      </div>
    </main>
  );
}
