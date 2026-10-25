// The whole one-page site. Sections are server components styled with Tailwind utilities.
// Keep the ids, data-8b-* attributes and the plain class names (hero__aperture, case__img, …):
// lib/motion.ts finds its elements through them. Demo text is the template's: replace it with yours.
import type { ComponentProps, CSSProperties } from "react";
import { ContactForm, Motion, Navigation, NewsletterForm } from "@/components/client";
import { photoSrc, photoSrcSet, photos, type Photo as PhotoData } from "@/lib/photos";

// ---------------------------------------------------------------- content

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Services" },
  { href: "#method", label: "Approach" },
  { href: "#studio", label: "Studio" },
  { href: "#journal", label: "Journal" },
] as const;

const statementLinks = [
  { href: "#work", label: "See the work" },
  { href: "#capabilities", label: "What we do" },
  { href: "#method", label: "How we work" },
  { href: "#studio", label: "Inside the studio" },
  { href: "#journal", label: "Ideas and news" },
  { href: "#contact", label: "Start a project" },
] as const;

const cases = [
  { name: "Northwind Bikes", tag: "Brand, launch", line: "An e-bike brand launched in eleven cities in a single spring." },
  { name: "Halden Bank", tag: "Product, app", line: "A 120-year-old bank, rebuilt as the app its customers open first." },
  { name: "Copper & Oat", tag: "Commerce", line: "A neighbourhood bakery that now sells more by phone than by window." },
  { name: "Atlas Museum", tag: "Service, content", line: "A quiet collection turned into a weekly night out." },
  { name: "Sola Sound", tag: "Campaign", line: "A headphone launch that sold out its first run in nine days." },
];

const partners = [
  { year: "Year 9", name: "Vela Air", line: "From the booking flow to the boarding gate." },
  { year: "Year 4", name: "Kiln Coffee", line: "One roastery grew into a subscription habit." },
  { year: "Year 6", name: "Larch Outdoor", line: "A storefront rebuilt around the off-season." },
  { year: "Year 7", name: "Tessera Games", line: "A launch campaign for every season since day one." },
  { year: "Year 8", name: "Civic Lab", line: "Public services people can finish on a phone." },
  { year: "Year 5", name: "Marrow Health", line: "One patient app across three hospital systems." },
];

const services = [
  { title: "Brand and identity", line: "Positioning, naming and identity systems with enough range to stay interesting in year five.", tags: ["Strategy", "Naming", "Identity systems", "Guidelines"] },
  { title: "Products and apps", line: "Apps and platforms designed, engineered and measured by the same people who first sketched them.", tags: ["Product strategy", "UX and UI", "Engineering", "Design systems"] },
  { title: "Campaigns and content", line: "Ideas sized for culture and planned like a product roadmap, so the second month is better than the first.", tags: ["Campaigns", "Social", "Film and photo", "Media planning"] },
  { title: "Service design", line: "Every moment between a person and your company, mapped, prototyped and made a little easier.", tags: ["Research", "Journey mapping", "Blueprints", "Prototyping"] },
  { title: "Applied AI", line: "Tools your teams use on Monday morning, not a demo for the board.", tags: ["Opportunity mapping", "Prototypes", "Assistants", "Team training"] },
];

const steps = [
  { title: "Listen", text: "Two weeks with your customers, your data and your front line before we draw anything at all." },
  { title: "Make", text: "Small mixed teams ship real, testable things early: in days, not quarters, and in front of real people." },
  { title: "Measure", text: "We agree on what better looks like before we start, then report it honestly, good news or not." },
  { title: "Again", text: "We take what we learned and go round once more. It is not the end of the project. It is the job." },
];

// Position of each team photo in the desktop collage (stacked in two columns on phones).
const shots = [
  "col-span-2 aspect-[3/2] min-[900px]:left-0 min-[900px]:top-0 min-[900px]:w-[34%]",
  "aspect-[3/4] min-[900px]:left-[37%] min-[900px]:top-[5.5%] min-[900px]:w-[19%]",
  "aspect-[3/4] min-[900px]:left-[8%] min-[900px]:top-[47%] min-[900px]:w-[20%]",
  "col-span-2 aspect-[3/2] min-[900px]:left-[59%] min-[900px]:top-0 min-[900px]:w-[41%]",
  "col-span-2 aspect-[3/2] min-[900px]:left-[31%] min-[900px]:top-[53.3%] min-[900px]:w-[36%]",
];

const roles = [
  { title: "Senior product designer", place: "Lisbon" },
  { title: "Creative technologist", place: "Brooklyn" },
  { title: "Strategy director", place: "Remote, Europe" },
];

const stories = [
  { kind: "Event", iso: "2026-10-01", date: "1 October 2026", read: 2, title: "Open Studio Night returns to Lisbon on 14 November", text: "Talks, half-built prototypes and a long table in the old print hall. Bring a friend who makes things." },
  { kind: "Essay", iso: "2026-09-18", date: "18 September 2026", read: 6, title: "The second visit: why we design for the return, not the launch", text: "Most products are judged on day one and lost on day thirty. Notes on designing for the ordinary Tuesday." },
  { kind: "Notes", iso: "2026-08-30", date: "30 August 2026", read: 8, title: "Type, tested: a variable identity that holds up at twelve pixels", text: "How one variable family carried a bank from a forty-metre billboard to its banking app." },
  { kind: "Research", iso: "2026-08-04", date: "4 August 2026", read: 5, title: "What three hundred nurses told us about the night shift", text: "Six weeks of field research for a health partner, and the three things we changed because of it." },
];

const faq = [
  { q: "What size of company do you work with? ", a: "Mostly companies between fifty and five thousand people, plus a few public bodies. Size matters less than whether the people who decide are in the room." },
  { q: "How does a project usually start? ", a: "With a two-week listening sprint: interviews, data and a day on your front line. You get a short written point of view and a plan before any big commitment." },
  { q: "Do you work alongside in-house teams? ", a: "Almost always. We pair with your designers, engineers and marketers, and we hand over every system we build so you are never stuck with us. Most partners keep us around anyway." },
  { q: "How do you price the work? ", a: "Fixed fees for defined phases, then a monthly team for ongoing work. We are open about our rates on the first call." },
  { q: "Where are you based? ", a: "Lisbon and Brooklyn, with people working remotely across Europe and the US east coast. We travel for workshops and launches." },
];

// ---------------------------------------------------------------- small parts

/** Photo with the srcset, sizes and crop tuned for its slot (see lib/photos.ts). */
function Photo({ photo, className }: { photo: PhotoData; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      srcSet={photoSrcSet(photo)}
      sizes={photo.sizes}
      style={{ background: photo.bg }}
      src={photoSrc(photo)}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={photo.lazy ? "lazy" : undefined}
      fetchPriority={photo.priority ? "high" : undefined}
    />
  );
}

/** The violet full stop that ends every section heading. */
function Dot({ className ="" }: { className?: string }) {
  return <span className={`m-dot ${className}`.trim()} aria-hidden="true" />;
}

/** Text link with the arrow that slides on hover. */
function ArrowLink({ className ="", children, ...rest }: ComponentProps<"a">) {
  return (
    <a className={`m-link ${className}`.trim()} {...rest}>
      <span className="m-link__label">{children}</span>
      <svg className="m-link__arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" /></svg>
    </a>
  );
}

/** Heading, then lead paragraph, on one row (stacks on phones). */
const head ="flex flex-wrap items-end justify-between gap-x-10 gap-y-4";

// ---------------------------------------------------------------- sections

function Hero() {
  return (
    <section id="hero" data-8b-section="hero" aria-labelledby="hero-title" className="relative z-3 grid min-h-[max(100svh,560px)] grid-rows-[1fr_auto] overflow-x-clip overflow-y-visible bg-ink px-(--space-1) text-paper [--ap:min(74vw,44svh)] min-[900px]:landscape:[--ap:min(36vw,60svh)]">
      <div className="hero__intro grid max-w-lg content-start justify-items-start gap-[18px] pt-[clamp(92px,14svh,150px)]">
        <p className="m-text-5 text-paper">We&apos;re Onda, an independent brand, product and AI studio. We make things people come back to, and we&apos;d love to hear what you&apos;re making.</p>
        <ArrowLink href="#work">See the work</ArrowLink>
      </div>
      <h1 className="m-text-2 self-end whitespace-nowrap pb-[clamp(18px,5svh,52px)] min-[900px]:landscape:text-[length:min(26.5vw,43svh)]" id="hero-title" style={{ "--len": 5 } as CSSProperties}>
        <span className="hero__word inline-block"><span className="inline-block"><span className="inline-block">Hello</span></span></span>
        <span className="ml-[.035em] inline-block size-[.19em] rounded-pill bg-violet align-baseline min-[900px]:landscape:relative min-[900px]:landscape:bg-transparent" aria-hidden="true">
          <span className="absolute left-[calc(50%-var(--ap)/2)] top-[calc(57%-var(--ap)/2)] size-(--ap) text-[16px] leading-[0] min-[900px]:landscape:top-auto min-[900px]:landscape:bottom-0 min-[900px]:landscape:left-0">
            <span className="hero__orbit absolute -inset-[9%] block rounded-pill border border-paper/16">
              <span className="absolute left-1/2 top-0 -ml-[4.5%] -mt-[4.5%] size-[9%] rounded-pill bg-violet" />
            </span>
            <span className="hero__aperture absolute inset-0 block overflow-hidden rounded-pill bg-violet">
              <Photo photo={photos.hero} className="size-full object-cover" />
              <span className="hero__tint absolute inset-0 bg-violet opacity-0" />
            </span>
          </span>
        </span>
      </h1>
    </section>
  );
}

function Statement() {
  return (
    <section id="statement" data-8b-section="statement" aria-labelledby="statement-title" className="relative bg-paper px-(--space-1) pt-(--space-2) pb-[calc(var(--space-2)*0.9)]">
      <h2 className="m-text-3 text-[length:clamp(40px,8.7vw,140px)]" id="statement-title">
        <span className="statement__line block">We make the things</span>
        <span className="statement__line block">people come back&nbsp;to<Dot className="statement__dot" /></span>
      </h2>
      <div className="mt-[clamp(56px,11vh,120px)] grid grid-cols-[minmax(0,1fr)] gap-12 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] min-[900px]:items-start">
        <p className="m-text-5 max-w-xl min-[900px]:text-[length:clamp(24px,2.35vw,34px)] min-[900px]:leading-[1.16] min-[900px]:tracking-[-0.025em]" data-8b-motion="ink">Launching is easy. Being chosen again on an ordinary Tuesday is the hard part, whether you run a bank, a bakery or a museum. It takes strategy, craft, engineering and a lot of listening, and it is the only kind of work we do.</p>
        <nav className="statement__index" aria-label="On this page">
          <ul className="grid gap-3">
            {statementLinks.map(link => <li key={link.href}><ArrowLink href={link.href}>{link.label}</ArrowLink></li>)}
          </ul>
        </nav>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" data-8b-section="work" aria-labelledby="work-title" className="relative text-paper">
      <div className="work__plate absolute inset-x-0 top-0 -bottom-0.5 bg-ink" aria-hidden="true" />
      <div className="work__stage relative grid grid-cols-[minmax(0,1fr)] content-start gap-[clamp(28px,4vh,48px)] px-(--space-1) py-(--space-2)">
        <div className={head}>
          <h2 className="m-text-3" id="work-title">Selected work<Dot /></h2>
          <p className="m-text-5 max-w-[25rem] text-fog">Five launches from the last two years. Every one of them is still growing.</p>
        </div>
        <div className="work__window">
          <ul className="work__track grid grid-cols-[minmax(0,1fr)] gap-5 min-[700px]:grid-cols-2">
            {cases.map((item, i) => (
              <li key={item.name} className="case relative block aspect-[4/5] overflow-hidden rounded-card bg-night min-[700px]:aspect-[16/11] min-[700px]:last:odd:col-span-2 min-[700px]:last:odd:aspect-[16/6.5]">
                <div className="absolute inset-0 overflow-hidden after:absolute after:inset-x-0 after:top-[40%] after:bottom-0 after:bg-linear-to-t/srgb after:from-ink/82 after:to-transparent after:content-['']">
                  <Photo photo={photos.work[i]} className="case__img absolute top-0 -left-[7%] h-full w-[114%] max-w-none object-cover" />
                </div>
                <span className="m-badge absolute top-[clamp(18px,2vw,28px)] left-[clamp(18px,2vw,28px)] bg-ink/62">{item.tag}</span>
                <div className="absolute inset-x-[clamp(18px,2.4vw,36px)] bottom-[clamp(18px,2.4vw,36px)] grid gap-2.5">
                  <h3 className="m-text-4">{item.name}</h3>
                  <p className="m-text-5 max-w-[30rem] text-paper">{item.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Again() {
  return (
    <section id="again" data-8b-section="again" aria-labelledby="again-title" className="relative bg-ink text-paper">
      <div className="again__stage relative px-(--space-1) pt-[calc(var(--space-2)*0.7)] pb-(--space-2)">
        <div className={`again__head ${head}`}>
          <h2 className="m-text-3" id="again-title">Never a one-off<Dot /></h2>
          <p className="m-text-5 max-w-[27rem] text-fog">Most of our partners have been with us for more than five years. Every lap around, the work gets sharper.</p>
        </div>
        <div className="again__swing mt-[clamp(40px,7vh,72px)]">
          <ul className="again__wheel grid grid-cols-[minmax(0,1fr)] gap-4 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
            {partners.map((partner, i) => (
              <li key={partner.name} className="partner">
                <div className="relative block aspect-[4/5] overflow-hidden rounded-card bg-night after:absolute after:inset-x-0 after:top-[35%] after:bottom-0 after:bg-linear-to-t/srgb after:from-ink/86 after:to-transparent after:content-['']">
                  <Photo photo={photos.again[i]} className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-x-[clamp(16px,1.8vw,26px)] bottom-[clamp(16px,1.8vw,26px)] z-1 grid justify-items-start gap-2.5">
                    <span className="m-badge bg-ink/62">{partner.year}</span>
                    <h3 className="m-text-4 text-[length:clamp(28px,2.6vw,40px)]">{partner.name}</h3>
                    <p className="m-text text-paper">{partner.line}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" data-8b-section="capabilities" aria-labelledby="capabilities-title" className="relative bg-ink px-(--space-1) pt-[calc(var(--space-2)*0.6)] pb-(--space-2) text-paper">
      <div className="mb-[clamp(40px,7vh,80px)] flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <h2 className="m-text-3" id="capabilities-title" data-8b-motion="rise">What we do<Dot /></h2>
        <p className="m-text-5 max-w-[27rem] text-fog">Five practices and one team in the room, from the first workshop to the last release.</p>
      </div>
      <ol className="grid gap-5">
        {services.map((service, i) => (
          <li key={service.title} className="service m-surface relative grid grid-cols-[minmax(0,1fr)] gap-6 overflow-hidden p-[clamp(18px,2.4vw,34px)] shadow-[0_-18px_50px_color-mix(in_srgb,var(--color-ink)_45%,transparent)] min-[900px]:h-[min(62svh,560px)] min-[900px]:min-h-[400px] min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[900px]:gap-[clamp(24px,3vw,48px)]">
            <div className="flex flex-col gap-4">
              <h3 className="m-text-4">{service.title}</h3>
              <p className="m-text-5 max-w-[30rem] text-slate">{service.line}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2 text-slate">
                {service.tags.map(tag => <li key={tag} className="m-badge">{tag}</li>)}
              </ul>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-tile min-[900px]:aspect-auto min-[900px]:h-full" data-8b-motion="iris">
              <Photo photo={photos.services[i]} className="size-full object-cover" />
            </div>
            <span className="service__shade pointer-events-none absolute inset-0 bg-ink opacity-0" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  );
}

function Method() {
  return (
    <section id="method" data-8b-section="method" aria-labelledby="method-title" className="relative bg-paper px-(--space-1) py-(--space-2)">
      <div className="mb-[clamp(48px,9vh,110px)] grid max-w-[60rem] gap-6">
        <h2 className="m-text-3" id="method-title" data-8b-motion="rise">How we work<Dot /></h2>
        <p className="m-text-5 max-w-[34rem]" data-8b-motion="ink">Every project runs the same loop of four steps. The fourth is the one most studios skip, and it is where the best work happens.</p>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_92px] items-start gap-5 min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[900px]:gap-[7vw]">
        <div className="relative col-start-2 row-start-1 aspect-square w-full min-[900px]:col-start-1 min-[900px]:w-[min(100%,50svh)] min-[900px]:justify-self-center" aria-hidden="true">
          <svg className="absolute inset-0 size-full -rotate-90 overflow-visible" viewBox="0 0 400 400">
            <circle className="fill-none stroke-ink/14 stroke-[1.5]" cx="200" cy="200" r="170" />
            <circle className="method__arc fill-none stroke-violet stroke-[5] [stroke-linecap:round]" cx="200" cy="200" r="170" pathLength="1" strokeDasharray="1 1" strokeDashoffset="0" />
          </svg>
          {[[0, -1], [1, 0], [0, 1], [-1, 0]].map(([x, y]) => (
            <span key={`${x},${y}`} className="method__station absolute top-[calc(50%+42.5%*var(--y))] left-[calc(50%+42.5%*var(--x))] -mt-[4.5%] -ml-[4.5%] size-[9%] rounded-pill bg-violet" style={{ "--x": x, "--y": y } as CSSProperties} />
          ))}
          <span className="method__arm absolute inset-[7.5%]">
            <span className="absolute top-0 left-1/2 -mt-[7.5%] -ml-[7.5%] size-[15%] rounded-pill border-[3px] border-violet bg-paper" />
          </span>
        </div>
        <ol className="method__steps col-start-1 row-start-1 grid gap-[clamp(56px,18vh,170px)] min-[900px]:col-start-2 min-[900px]:pt-[8svh] min-[900px]:pb-[14svh]">
          {steps.map(step => (
            <li key={step.title} className="step grid max-w-[34rem] gap-3.5">
              <h3 className="m-text-4">{step.title}</h3>
              <p className="m-text-5 text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" data-8b-section="studio" aria-labelledby="studio-title" className="relative bg-paper px-(--space-1) py-(--space-2)">
      <div className="mb-[clamp(48px,8vh,96px)] grid gap-7 min-[900px]:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] min-[900px]:items-end min-[900px]:gap-x-[6vw]">
        <h2 className="m-text-3" id="studio-title">Inside the studio<Dot /></h2>
        <p className="m-text-5 max-w-[42rem]" data-8b-motion="ink">Ninety people between Lisbon and Brooklyn: strategists, designers, engineers and writers who would rather show you than tell you. We work in small mixed teams, sit with the people we build for, and keep Friday afternoons for our own experiments.</p>
      </div>
      <div className="studio__collage relative grid grid-cols-2 gap-3 min-[900px]:block min-[900px]:aspect-[1.85]">
        {shots.map((position, i) => (
          <figure key={i} className={`shot relative overflow-hidden rounded-tile bg-mist min-[900px]:absolute ${position}`}>
            <Photo photo={photos.studio[i]} className="size-full object-cover" />
          </figure>
        ))}
        <div className="col-span-2 grid content-start gap-[18px] pt-6 min-[900px]:absolute min-[900px]:top-[55%] min-[900px]:left-[71%] min-[900px]:w-[29%] min-[900px]:pt-0">
          <h3 className="m-text-7" data-8b-motion="rise">Open roles<Dot /></h3>
          <ul className="grid">
            {roles.map(role => (
              <li key={role.title} className="role flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-ink/16 py-3.5">
                <span className="m-text-7">{role.title}</span>
                <span className="m-text-6 text-slate">{role.place}</span>
              </li>
            ))}
          </ul>
          <ArrowLink data-8b-placeholder="email" href="mailto:careers@onda.example">careers@onda.example</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section id="journal" data-8b-section="journal" aria-labelledby="journal-title" className="relative bg-paper px-(--space-1) pt-[calc(var(--space-2)*0.6)] pb-(--space-2)">
      <div className="mb-[clamp(40px,7vh,88px)]">
        <h2 className="m-text-3" id="journal-title" data-8b-motion="rise">Ideas and news<Dot /></h2>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-7 min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[900px]:gap-[7vw]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-card bg-mist min-[900px]:aspect-[4/5]">
          {photos.journal.map((photo, i) => (
            <Photo key={i} photo={photo} className="journal__shot absolute inset-0 size-full object-cover first:z-1" />
          ))}
        </div>
        <ol className="grid gap-[clamp(36px,8vh,72px)] min-[900px]:gap-[clamp(64px,18vh,170px)] min-[900px]:pt-[6svh] min-[900px]:pb-[10svh]">
          {stories.map(story => (
            <li key={story.iso} className="story grid max-w-xl gap-3 border-t border-ink/16 pt-5">
              <p className="m-text-6 text-slate"><span className="text-violet">{story.kind}</span> · <time dateTime={story.iso}>{story.date}</time> · {story.read} min read</p>
              <h3 className="m-text-7">{story.title}</h3>
              <p className="m-text text-slate">{story.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" data-8b-section="faq" aria-labelledby="faq-title" className="relative grid gap-10 border-t border-ink/12 bg-paper px-(--space-1) py-(--space-2) min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] min-[900px]:gap-[6vw]">
      <h2 className="m-text-3 text-[length:clamp(48px,7.2vw,116px)]" id="faq-title" data-8b-motion="rise">Fair questions<Dot /></h2>
      <div>
        {faq.map(item => (
          <details key={item.q} className="group/item border-b border-ink/16 first:border-t">
            <summary className="m-text-7 group/row flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="relative size-[34px] flex-none rounded-pill border-[1.5px] border-ink after:absolute after:inset-0 after:m-auto after:size-2.5 after:rounded-pill after:bg-violet after:transition-transform after:duration-[450ms] after:ease-[cubic-bezier(.7,0,.2,1)] after:content-[''] group-hover/row:after:scale-[1.8] group-open/item:after:scale-[3.1] group-open/item:group-hover/row:after:scale-[3.1]" aria-hidden="true" />
            </summary>
            <p className="m-text max-w-[40rem] pb-[26px] text-slate">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" data-8b-section="contact" aria-labelledby="contact-title" className="relative bg-violet px-(--space-1) py-(--space-2) text-paper">
      <h2 className="m-text-3 contact__title text-[length:min(19vw,calc((100vw-2*var(--space-1))/(var(--len)*0.5)))] leading-[0.86] whitespace-nowrap [&_.m-dot]:bg-paper" id="contact-title" style={{ "--len": 10 } as CSSProperties}>
        <span className="contact__voice">Let&apos;s talk</span><Dot />
      </h2>
      <div className="mt-[clamp(40px,8vh,88px)] grid grid-cols-[minmax(0,1fr)] gap-12 min-[1000px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[1000px]:gap-[6vw]">
        <div className="grid content-start gap-8">
          <p className="m-text-5 max-w-[30rem]">Tell us what you are making. A real person reads every message and replies within two working days.</p>
          <a data-8b-placeholder="email" className="font-display text-[length:clamp(28px,3.4vw,50px)] font-bold leading-none tracking-[-0.035em] no-underline" href="mailto:hello@onda.example">
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[100%_2px] bg-position-[0_100%] bg-no-repeat pb-1">hello@onda.example</span>
          </a>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
            <div>
              <dt className="m-text-7 mb-1.5">Lisbon</dt>
              <dd className="m-text">Rua do Exemplo 1<br />1200-000 Lisbon</dd>
              <dd className="m-text"><a data-8b-placeholder="phone" className="no-underline" href="tel:+351210000000">+351 210 000 000</a></dd>
            </div>
            <div>
              <dt className="m-text-7 mb-1.5">Brooklyn</dt>
              <dd className="m-text">100 Example Street<br />Brooklyn, NY 11200</dd>
              <dd className="m-text"><a data-8b-placeholder="phone" className="no-underline" href="tel:+17180000000">+1 718 000 0000</a></dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  const col =" grid content-start gap-1.5";
  const label ="m-text-6  mb-2 text-fog";
  return (
    <footer id="footer" data-8b-section="footer" className="relative overflow-clip bg-ink px-(--space-1) pt-[clamp(80px,12vh,140px)] pb-7 text-paper [--ap:min(30vw,44svh)]">
      <p className="m-text-2 footer__bye relative whitespace-nowrap pt-(--ap) text-[length:min(36vw,40svh)] min-[900px]:text-[length:min(24vw,40svh)]" style={{ "--len": 3 } as CSSProperties}>
        <span className="footer__word inline-block">Bye</span>
        <span className="footer__period relative ml-[.035em] inline-block size-[.19em] align-baseline" aria-hidden="true">
          <span className="footer__aperture absolute bottom-0 left-0 size-(--ap) origin-bottom-left overflow-hidden rounded-pill bg-violet">
            <Photo photo={photos.footer} className="size-full object-cover" />
            <span className="footer__tint absolute inset-0 bg-violet opacity-0" />
          </span>
        </span>
      </p>
      <div className="mt-[clamp(48px,9vh,96px)] grid grid-cols-2 gap-x-6 gap-y-10 border-t border-paper/16 pt-8 min-[900px]:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,2fr)]">
        <nav className={col} aria-label="Footer">
          <p className={label}>Explore</p>
          {navLinks.map(link => <a key={link.href} className="m-link-2" href={link.href}>{link.label}</a>)}
        </nav>
        <div className={col}>
          <p className={label}>Talk</p>
          <a data-8b-placeholder="email" className="m-link-2" href="mailto:hello@onda.example">hello@onda.example</a>
          <a data-8b-placeholder="email" className="m-link-2" href="mailto:careers@onda.example">careers@onda.example</a>
          <a data-8b-placeholder="phone" className="m-link-2" href="tel:+351210000000">+351 210 000 000</a>
        </div>
        <div className={col}>
          <p className={label}>Follow</p>
          <a data-8b-placeholder="social" className="m-link-2" href="https://www.instagram.com/">Instagram</a>
          <a data-8b-placeholder="social" className="m-link-2" href="https://www.linkedin.com/">LinkedIn</a>
          <a data-8b-placeholder="social" className="m-link-2" href="https://vimeo.com/">Vimeo</a>
        </div>
        <NewsletterForm />
      </div>
      <div className="m-text-6 mt-14 flex flex-wrap justify-between gap-x-6 gap-y-2 text-fog">
        <p>© 2026 Onda Studio · Design: <a href="https://8b.com/" style={{ color: "inherit" }} data-8b-credit="">8B</a></p>
        <p>Made in Lisbon and Brooklyn</p>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------- page

export default function Home() {
  return (
    <>
      <a className="skip fixed top-3 left-(--space-1) z-100 -translate-y-[160%] rounded-pill bg-paper px-4 py-2.5 font-body text-[15px] font-semibold text-ink no-underline focus-visible:translate-y-0" href="#main">Skip to content</a>
      <Navigation links={navLinks} />
      <main id="main">
        <Hero />
        <Statement />
        <Work />
        <Again />
        <Capabilities />
        <Method />
        <Studio />
        <Journal />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
