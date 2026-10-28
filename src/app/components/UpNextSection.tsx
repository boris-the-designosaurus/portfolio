type UpNextSectionProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  logoSrc?: string;
};

export function UpNextSection({
  title,
  description,
  tags,
  href,
  imageSrc,
  imageAlt,
  logoSrc = '/images/Logo-op.svg',
}: UpNextSectionProps) {
  return (
    <section aria-labelledby="up-next-heading" className="font-['Poppins',sans-serif]">
        <div className="flex flex-col gap-6 rounded-[32px] bg-[#F3F0ED] p-6 lg:p-15">

       <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <img src={logoSrc} alt="" aria-hidden="true" className="h-[62px] w-[63px]" />
          <div className="flex flex-col gap-1">
            <h3 className="m-0 text-[26px] font-semibold leading-tight text-[#0f1629] sm:text-[31px]">
              Up Next: {title}
            </h3>
            <p className="m-0 text-[17px] leading-[1.5] text-[#0f1629] sm:text-[20px]">
              {description}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map(tag => (
              <span key={tag} className="rounded-full border border-[#D6D3D1] px-[14px] py-[5px] text-[14px] text-[#59524d]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-end">
            <a
              href={href}
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

        <div className="w-full min-w-0 overflow-hidden lg:mb-[-60px] lg:w-[542px] lg:max-w-[50%] lg:shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="block h-auto w-full rounded-[16px] object-cover object-bottom shadow-[0_2px_4px_rgba(0,0,0,0.08)] lg:h-full lg:rounded-b-none"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
