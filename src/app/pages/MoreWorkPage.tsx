import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ContactFooter } from '../components/ContactFooter';
import { SiteNavigation } from '../components/SiteNavigation';

type Project = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};

const crmProjects: Project[] = [
  {
    title: 'From request to focused view',
    description:
      'An AI assistant let users describe the contacts they needed, then applied the relevant filters and sorting.',
    image: '/images/imgOPRedesignAiAssist.png',
    imageAlt: 'Ontraport redesign showing the AI Assist experience',
  },
  {
    title: 'Edit records without losing your place',
    description:
      'Inline editing let users update details without opening each contact record, reducing context switching.',
    image: '/images/imgOPRedesignInlineEdit.png',
    imageAlt: 'Ontraport redesign showing inline editing for contact records',
  },
  {
    title: 'View details without leaving the collection',
    description:
      'The side panel let users review contact details and take common actions without navigating away or losing their place.',
    image: '/images/imgOPRedesignContactRecord.png',
    imageAlt: 'Ontraport redesign showing contact details in a side panel',
  },
  {
    title: 'Take action without leaving the collection',
    description:
      'Users could compose emails with AI assistance and send or schedule them from a side panel, keeping selected contacts in view.',
    image: '/images/imgOPRedesignEmail.png',
    imageAlt: 'Ontraport redesign showing email composition in a side panel',
  },
  {
    title: 'A consistent workspace across views',
    description:
      'I aligned the Kanban board with the new design system for greater consistency and predictability.',
    image: '/images/imgOPRedesignCardview.png',
    imageAlt: 'Ontraport redesign showing the updated contact Kanban board',
  },
  {
    title: 'A clearer path to getting started',
    description:
      'The AI-powered Today screen simplified setup with tailored guidance, clear next steps, and progress tracking.',
    image: '/images/imgOPRedesignToday.png',
    imageAlt: 'Ontraport redesign showing the AI-powered Today screen',
  },
  {
    title: 'Step-by-step setup with AI',
    description:
      'The AI assistant eased setup with clear instructions, direct task links, and a shared checklist showing progress and next steps.',
    image: '/images/imgOPRedesignOnboarding.png',
    imageAlt: 'Ontraport redesign showing AI-guided onboarding and setup checklist',
  },
];

const featureProjects: Project[] = [
  {
    title: 'Ontraport Mail— Feature Image',
    image: '/images/ImgFeatureImgMail.png',
    imageAlt: 'Ontraport Mail feature image',
  },
  {
    title: 'Ontraport Sites — Feature Image',
    image: '/images/ImgFetaureImgSites.png',
    imageAlt: 'Ontraport Sites feature image',
  },
  {
    title: 'Ontraport Payments— Feature Image',
    image: '/images/ImgFeatureImgInvoice.png',
    imageAlt: 'Ontraport Payments feature image',
  },
  {
    title: 'Login Images - Wordpress',
    image: '/images/login-images-wordpress.png',
    imageAlt: 'WordPress login image',
  },
  {
    title: 'Login Images - LinkedIn',
    image: '/images/login-images-linkedin.png',
    imageAlt: 'LinkedIn login image',
  },
  {
    title: 'Login Images - Inbox',
    image: '/images/login-images-inbox.png',
    imageAlt: 'Inbox login image',
  },
];

const illustrationProjects: Project[] = [
  {
    title: 'Illustration - TeamYou',
    image: '/images/Illustration-badges.png',
    imageAlt: 'TeamYou achievement badge illustrations',
  },
  {
    title: 'Illustration - Bug',
    image: '/images/Illustration-tshirt.png',
    imageAlt: 'Bug-finding contest T-shirt illustration',
  },
];

function ProjectCarousel({
  title,
  intro,
  projects,
  imageHeight,
  captionPaddingTop,
}: {
  title: string;
  intro?: string;
  projects: Project[];
  imageHeight?: number;
  captionPaddingTop?: number;
}) {
  const [activeProject, setActiveProject] = useState(0);
  const imageScrollerRef = useRef<HTMLDivElement>(null);
  const projectImagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const projectSlidesRef = useRef<(HTMLElement | null)[]>([]);
  const captionDockRef = useRef<HTMLDivElement>(null);
  const captionTrackRef = useRef<HTMLDivElement>(null);
  const projectCaptionTextRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const imageScroller = imageScrollerRef.current;
    const dock = captionDockRef.current;
    const track = captionTrackRef.current;
    if (!imageScroller || !dock || !track) return;

    const updateCarouselState = () => {
      const scrollerRect = imageScroller.getBoundingClientRect();
      const scrollerCenter = scrollerRect.left + imageScroller.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      projectSlidesRef.current.forEach((slide, index) => {
        if (!slide) return;
        const slideRect = slide.getBoundingClientRect();
        const distance = Math.abs(slideRect.left + slideRect.width / 2 - scrollerCenter);
        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }

        // Fade the text in as its slide arrives; the panel behind it never fades.
        const offset = Math.min(1, Math.abs(slideRect.left - scrollerRect.left) / slideRect.width);
        const opacity = 0.3 + 0.7 * (1 - offset) ** 2;
        const text = projectCaptionTextRef.current[index];
        Array.from(text?.children ?? []).forEach(child => {
          const element = child as HTMLElement;
          element.style.transition = 'opacity 3200ms cubic-bezier(0.22, 1, 0.36, 1)';
          element.style.opacity = String(opacity);
        });
      });
      setActiveProject(closestIndex);

      // Captions ride along with the carousel's horizontal scroll.
      track.style.transform = `translate3d(${-imageScroller.scrollLeft}px, 0, 0)`;

      // Vertical floating is pure CSS sticky; this only fills the corners while it is pinned.
      const pinned = Math.abs(dock.getBoundingClientRect().bottom - window.innerHeight) < 1;
      dock.style.backgroundColor = pinned ? '#FBFAF9' : 'transparent';

      const nav = document.querySelector('.site-nav-sticky');
      const navBottom = nav ? nav.getBoundingClientRect().bottom : 0;
      const imageTop = imageScroller.getBoundingClientRect().top;
      const closestSlide = projectSlidesRef.current[closestIndex];
      // The slide's top padding can scroll under the nav, so only the image itself has to fit.
      const slideHeight = closestSlide
        ? closestSlide.offsetHeight - parseFloat(getComputedStyle(closestSlide).paddingTop)
        : 0;
      const fitsViewport = slideHeight + dock.offsetHeight <= window.innerHeight - navBottom;
      // The caption stays in its normal spot beneath the image. It only floats once the image
      // wrapper has reached the nav and image + caption can't both fit in the window.
      const shouldFloat = !fitsViewport && imageTop <= navBottom;
      dock.style.position = shouldFloat ? '' : 'relative';
    };

    imageScroller.addEventListener('scroll', updateCarouselState, { passive: true });
    window.addEventListener('scroll', updateCarouselState, { passive: true });
    window.addEventListener('resize', updateCarouselState);
    projectImagesRef.current.forEach(image => {
      image?.addEventListener('load', updateCarouselState);
    });
    updateCarouselState();

    return () => {
      imageScroller.removeEventListener('scroll', updateCarouselState);
      window.removeEventListener('scroll', updateCarouselState);
      window.removeEventListener('resize', updateCarouselState);
      projectImagesRef.current.forEach(image => {
        image?.removeEventListener('load', updateCarouselState);
      });
    };
  }, [projects]);

  return (
        <section className="relative rounded-[32px] border border-[#EAE7E5] px-0 pb-0 pt-14 sm:px-0 sm:pb-0 sm:pt-16">
      <h2 className="absolute left-1/2 top-0 m-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#FBFAF9] px-6 text-[30px] font-medium leading-[1.3] sm:text-[30px]">
        {title}
      </h2>
      {intro ? (
        <p className="mx-auto mb-8 mt-0 max-w-[1000px] px-2 text-center text-[24px] font-regular leading-[1.35] sm:mb-12 sm:px-8 sm:text-[24px]">
          {intro}
        </p>
      ) : null}
      <div className="-mx-px -mb-px overflow-clip rounded-[32px] bg-[#EEEBE9]">

        <div className="group/carousel relative">
        <div className="pointer-events-none absolute inset-0 z-10 box-border pt-16">
        <div className="relative h-full">
        {[-1, 1].map(direction => {
          const target = activeProject + direction;
          if (target < 0 || target >= projects.length) return null;
          const Icon = direction < 0 ? ChevronLeft : ChevronRight;
          return (
            <button
              key={direction}
              type="button"
              aria-label={direction < 0 ? 'Previous image' : 'Next image'}
              onClick={() => {
                const scroller = imageScrollerRef.current;
                scroller?.scrollTo({ left: target * scroller.clientWidth, behavior: 'smooth' });
              }}
              className={`pointer-events-auto absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/50 text-[#0f1629] opacity-0 transition-[opacity,background-color,color] duration-200 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white focus-visible:opacity-100 group-hover/carousel:opacity-100 ${direction < 0 ? 'left-4' : 'right-4'}`}
            >
              <Icon size={24} strokeWidth={2} aria-hidden />
            </button>
          );
        })}
        </div>
        </div>
        <div
          ref={imageScrollerRef}
          aria-label="Ontraport project images. Scroll horizontally to view more."
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          tabIndex={0}
        >
          {projects.map((project, index) => (
            <figure
              key={project.image}
              ref={element => {
                projectSlidesRef.current[index] = element;
              }}
              data-project-index={index}
              className="m-0 box-border w-full shrink-0 snap-start px-6 pt-16 sm:px-[60px]"
            >
              <img
                ref={element => {
                  projectImagesRef.current[index] = element;
                }}
                src={project.image}
                alt={project.imageAlt}
                className={`block rounded-[22px] ${imageHeight ? 'mx-auto w-auto max-w-full object-contain' : 'h-auto w-full'}`}
                  style={imageHeight ? { height: imageHeight } : undefined}
              />
            </figure>
          ))}
        </div>
        </div>
        <div ref={captionDockRef} className="relative z-20 md:sticky md:bottom-0">
          <div className="bg-[#EEEBE9] [clip-path:inset(0_round_0_0_32px_32px)]">
          <div ref={captionTrackRef} className="flex will-change-transform">
            {projects.map((project, index) => (
              <figcaption
                key={project.image}
                aria-live={activeProject === index ? 'polite' : undefined}
                className="flex w-full shrink-0"
              >
                <div
                  ref={element => {
                    projectCaptionTextRef.current[index] = element;
                  }}
                  className="flex w-full flex-col items-center justify-start px-6 pb-8 pt-3 text-center"
                  style={captionPaddingTop ? { paddingTop: captionPaddingTop } : undefined}
                >
                  <h3 className="mb-3 mt-0 text-[24px] font-medium leading-[1.3]">
                    {project.title}
                  </h3>
                  {project.description ? (
                    <p className="m-0 max-w-[800px] text-[18px] font-normal leading-[1.5]">
                      {project.description}
                    </p>
                  ) : null}
                </div>
              </figcaption>
            ))}
          </div>
          </div>
        </div>
        <div aria-hidden className="h-7" />
      </div>
    </section>
  );
}

export function MoreWorkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FBFAF9] font-['Poppins',sans-serif] text-[#0f1629]">
      <SiteNavigation activePage="more-work" />

      


        <div className="wf-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', flex: 1 }}>

        {/* Hero */}
        <div className="pt-[80px] pb-[200px]" style={{ position: 'relative' }}>
          <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-center w-full">
            <div className="flex w-full lg:flex-[1_0_0] flex-col items-start justify-center leading-[1.5] min-w-px not-italic text-[#0f1629] [word-break:break-word]">
              <p className="font-['Poppins',sans-serif] font-semibold relative shrink-0 text-[36px] lg:text-[48px] w-full">More work</p>
              <p className="font-['Poppins',sans-serif] font-medium relative shrink-0 text-[28px] w-full">More interface explorations, product visuals, and illustrations.</p>
            </div>
            <div className="hidden lg:block flex-[1_0_0] min-w-px relative self-stretch" />
          </div>
        </div>

        

        <ProjectCarousel
          title="CRM Redesign"
          intro="A CRM redesign aimed to accommodate an AI assistant and create a cleaner, more consistent workspace—with less context switching and more predictable interactions"
          projects={crmProjects}
        />

        <div className="mt-[200px]">
          <ProjectCarousel
            title="Feature Images"
            intro="A collection of feature visuals created to communicate product capabilities, simplify complex workflows, and bring consistency to the Ontraport brand across marketing and product experiences."
            projects={featureProjects}
            imageHeight={588}
            captionPaddingTop={24}
          />
        </div>

        <div className="mt-[200px]">
          <ProjectCarousel
            title="Illustration"
            intro="I never turn down a chance to illustrate—from achievement badges for TeamYou to a playful T-shirt for a bug-finding contest."
            projects={illustrationProjects}
            imageHeight={788}
            captionPaddingTop={24}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 pt-8 mt-[100px]">
        <ContactFooter />
      </div>
    </main>
  );
}
