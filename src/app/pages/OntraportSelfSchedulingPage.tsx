import { ContactFooter } from '../components/ContactFooter';
import { SiteNavigation } from '../components/SiteNavigation';
import { UpNextSection } from '../components/UpNextSection';

const tags = ['Invoicing', 'Automation', 'CRM'];

export function OntraportSelfSchedulingPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF9] font-['Poppins',sans-serif] text-[#0f1629]">
      <SiteNavigation />

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-4 pb-0 pt-16 sm:pt-20">
        <header>
          <img src="/images/Logo-ON.svg" alt="Ontraport" className="mb-5 block h-[82px] w-[82px]" />
          <h1 className="m-0 text-[48px] font-semibold leading-none">Ontraport</h1>
          <div className="mt-1 max-w-[700px]">
            <p className="m-0 text-[30px] font-normal leading-[1.4]">
              Helping coaches and consultants automate the entire appointment workflow—from booking to payment.
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
            src="/images/self-Scheduling.png"
            alt="Ontraport self-scheduling experience showing a calendar and available appointment times"
            className="block h-auto w-full rounded-t-[18px] object-cover object-top"
          />
        </figure>

        <section className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
          <h2 className="m-0 text-[24px] font-medium leading-[47px] text-[#616873]">Background</h2>
          <div className="flex flex-col gap-4">
            <p className="m-0 text-[32px] font-normal leading-[1.35]">
              For coaches and consultants to grow their business, every new appointment should bring more opportunity—not more administrative work.
            </p>
            <p className="m-0 text-[20px] font-light leading-[1.5]">
              Self-scheduling evolved across several releases, connecting calendar availability, online booking, confirmations, reminders, appointment management, invoicing, and payment into one workflow.
            </p>
            <div className="mt-1 grid gap-6 sm:grid-cols-3 sm:gap-8">
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

        <section className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
          <h2 className="m-0 text-[24px] font-medium leading-[47px] text-[#616873]">Problem</h2>
          <div>
            <p className="m-0 text-[32px] font-normal leading-[1.35]">
              Every appointment created administrative work.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
          <h2 className="m-0 text-[24px] font-medium leading-[47px] text-[#616873]">The solution</h2>
          <div>
            <p className="mb-4 mt-0 text-[32px] font-normal leading-[1.4]">
              Automate the workflow from booking to payment.
            </p>
            <p className="m-0 text-[20px] font-light leading-[1.5]">
              Ontraport connected availability, self-scheduling, calendar sync, reminders, appointment records, invoicing, and payment so the workflow could move forward automatically with minimal intervention.
            </p>
          </div>
        </section>

        <div className="overflow-hidden rounded-[28px] bg-[#EEEBE8]">
          <section className="flex min-h-[254px] flex-col items-center justify-center px-6 py-10 text-center">
            <h2 className="mb-1 mt-0 text-[30px] font-medium leading-[1.3]">Google Calendar sync</h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              Ontraport keeps each coach’s availability in sync with Google Calendar, so clients only see times that are actually open. Bookings appear in Ontraport’s calendar, and time slots automatically close when no coaches are available.
            </p>
          </section>
          <figure className="m-0 px-6 pb-10 sm:px-[38px]">
            <img
              src="/images/Calendar-sync.png"
              alt="Ontraport booking confirmation synced with the Ontraport calendar"
              className="block h-auto w-full rounded-[14px]"
            />
          </figure>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-[#EEEBE8]">
          <section className="flex min-h-[254px] flex-col items-center justify-center px-6 py-10 text-center">
            <h2 className="mb-1 mt-0 text-[30px] font-medium leading-[1.3]">
              Automated reminders added to the workflow
            </h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              We added an SMS reminder step that automatically sends clients a personalized message before their appointment, helping confirm attendance and reduce no-shows.
            </p>
          </section>
          <figure className="m-0 px-6 sm:px-[38px]">
            <img
              src="/images/Auto-reminders.png"
              alt="Automated appointment reminder workflow and example SMS reminder"
              className="block h-auto w-full rounded-[14px]"
            />
          </figure>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-[#EEEBE8]">
          <section className="flex min-h-[254px] flex-col items-center justify-center px-6 py-10 text-center">
            <h2 className="mb-1 mt-0 text-[30px] font-medium leading-[1.3]">
              Automated invoicing added to the workflow
            </h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              We added a new Request Payment automation step that generates a client invoice and sends a ready-to-pay invoice email after the appointment.
            </p>
          </section>
          <figure className="m-0 px-[60px] pb-[60px]">
            <img
              src="/images/Invoice-reminders.png"
              alt="Automated invoice workflow and ready-to-pay client invoice"
              className="block h-auto w-full rounded-[14px]"
            />
          </figure>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-[#EEEBE8]">
          <section className="flex min-h-[254px] flex-col items-center justify-center px-6 py-10 text-center">
            <h2 className="mb-1 mt-0 text-[30px] font-medium leading-[1.3]">
              Modernized payments and invoicing
            </h2>
            <p className="m-0 max-w-[800px] text-[20px] font-normal leading-[1.5]">
              We upgraded the payment system to separate invoices from payments, making billing easier to track after each appointment and simpler to connect with third-party accounting systems.
            </p>
          </section>
          <figure className="m-0 px-[60px] pb-[60px]">
            <img
              src="/images/Modern-payments.png"
              alt="Modernized payment dashboard and invoice payment details"
              className="block h-auto w-full rounded-[14px]"
            />
          </figure>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10" aria-labelledby="self-scheduling-results-heading">
          <h2 id="self-scheduling-results-heading" className="m-0 text-[24px] font-medium leading-[47px] text-[#616873]">
            Results
          </h2>
          <div className="flex flex-col gap-4">
            <p className="m-0 text-[32px] font-normal leading-[1.4]">
              Self-scheduling reduced the friction of getting an appointment on the calendar while automating the work around it. Clients booked more successfully, appointments were scheduled faster, and automated reminders helped reduce no-shows.
            </p>
            <div className="grid gap-5 rounded-[24px] bg-[#F3F0ED] p-8 sm:grid-cols-3 sm:p-10">
              {[
                { value: '24%', label: 'Increased booking completion', trend: 'up' },
                { value: '38%', label: 'Reduced time-to-book', trend: 'down' },
                { value: '50%', label: 'Helped cut no-shows by 50%', trend: 'down' },
              ].map(({ value, label, trend }) => (
                <div key={value} className="flex min-w-0 flex-col gap-1">
                  <p className="m-0 flex items-center gap-1 text-[36px] font-medium leading-[1.2] text-[#0f1629]">
                    <img
                      src={trend === 'up' ? '/images/upRight-arr.svg' : '/images/downLeft-arr.svg'}
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

        <UpNextSection
          title="Ontraport"
          description="Giving teams one shared inbox for every customer conversation."
          tags={['Messaging', 'CRM', 'B2B']}
          href="/draft/inbox"
          imageSrc="/images/Thumb-inbox.png"
          imageAlt="Ontraport Inbox project preview"
        />

        <ContactFooter />

      </div>
    </main>
  );
}
