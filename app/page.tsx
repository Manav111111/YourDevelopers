// The whole one-page site. Sections are server components styled with Tailwind utilities.
// Keep the ids, data-8b-* attributes and the plain class names (hero__aperture, case__img, …):
// lib/motion.ts finds its elements through them. Demo text is the template's: replace it with yours.
import type { ComponentProps, CSSProperties } from "react";
import { ContactForm, Motion, Navigation, NewsletterForm } from "@/components/client";
import { photoSrc, photoSrcSet, photos, type Photo as PhotoData } from "@/lib/photos";
import { contactEmail } from "@/lib/site";

// ---------------------------------------------------------------- content

const navLinks = [
  { href: "#work", label: "Topics" },
  { href: "#capabilities", label: "Help" },
  { href: "#method", label: "How it works" },
  { href: "#studio", label: "Community" },
  { href: "#journal", label: "News" },
] as const;

const statementLinks = [
  { href: "#work", label: "What we run" },
  { href: "#again", label: "Who it is for" },
  { href: "#capabilities", label: "How we help" },
  { href: "#method", label: "How it works" },
  { href: "#studio", label: "The community" },
  { href: "#journal", label: "Ideas and news" },
  { href: "#contact", label: "Get in touch" },
] as const;

// The five things the community does (from the owner's brief). No clients or results yet.
const cases = [
  { name: "Events", tag: "01 / 05", line: "Events that bring developers together to learn from each other." },
  { name: "Tech news", tag: "02 / 05", line: "What is changing in tech, explained for people who build." },
  { name: "Developer help", tag: "03 / 05", line: "Stuck on a problem? Ask the community." },
  { name: "Tech support", tag: "04 / 05", line: "Practical help when your tools, setup or stack will not behave." },
  { name: "AI", tag: "05 / 05", line: "Making sense of AI and putting it to work in real projects." },
];

// Where people are on their way, in place of the template's long-term clients.
const partners = [
  { tag: "Learning", name: "Just starting out", line: "Ask the basic questions. Everyone began there." },
  { tag: "Building", name: "Shipping a project", line: "Get ideas, answers and a second pair of eyes." },
  { tag: "Stuck", name: "Hitting a wall", line: "Bring the problem to people who have seen it before." },
  { tag: "Leading", name: "Running a team", line: "Keep up with tech news and share what works." },
  { tag: "Exploring", name: "Trying out AI", line: "Find out what AI can do for your work, and what it cannot." },
  { tag: "Staying current", name: "Keeping up", line: "Follow the news and the events that matter to you." },
];

const services = [
  { title: "Events", line: "Gatherings where developers meet, learn and share what they know.", tags: ["Learn", "Share", "Meet"] },
  { title: "Tech news", line: "The stories that matter to developers, explained in plain language.", tags: ["News", "Explainers", "Trends"] },
  { title: "Developer help", line: "Questions, code and advice from people who build for a living and for fun.", tags: ["Questions", "Code", "Advice"] },
  { title: "Tech support", line: "A hand with the tools, setups and everyday problems that slow you down.", tags: ["Tools", "Setup", "Troubleshooting"] },
  { title: "AI", line: "Learning what AI can do, trying it on real work and talking about what we find.", tags: ["Learn", "Try", "Discuss"] },
];

const steps = [
  { title: "Ask", text: "Bring a question, a problem or an idea. No question is too small." },
  { title: "Learn", text: "Find answers in the news, at events and from other developers." },
  { title: "Build", text: "Put it to work in your own project, with help close by." },
  { title: "Share", text: "Tell the community what you found, so the next developer starts further ahead." },
];

// Position of each team photo in the desktop collage (stacked in two columns on phones).
const shots = [
  "col-span-2 aspect-[3/2] min-[900px]:left-0 min-[900px]:top-0 min-[900px]:w-[34%]",
  "aspect-[3/4] min-[900px]:left-[37%] min-[900px]:top-[5.5%] min-[900px]:w-[19%]",
  "aspect-[3/4] min-[900px]:left-[8%] min-[900px]:top-[47%] min-[900px]:w-[20%]",
  "col-span-2 aspect-[3/2] min-[900px]:left-[59%] min-[900px]:top-0 min-[900px]:w-[41%]",
  "col-span-2 aspect-[3/2] min-[900px]:left-[31%] min-[900px]:top-[53.3%] min-[900px]:w-[36%]",
];

// The community's WhatsApp group (studio, contact, footer).
const whatsapp = { href: "https://chat.whatsapp.com/H6wijRlqBtBG9mi3wUSSgp", target: "_blank", rel: "noopener noreferrer" };

const ways = [
  { title: "Come to an event", place: "Events" },
  { title: "Ask for help", place: "Help" },
  { title: "Follow the news", place: "News" },
];

// Placeholders until there are real posts: no dates, no read times. Order matches the four journal photos.
const stories = [
  { kind: "Events", title: "What is on next", text: "Upcoming events will be listed here as soon as the dates are confirmed." },
  { kind: "Help", title: "Answers worth keeping", text: "Good questions and clear answers from the community, written up for the next person who asks." },
  { kind: "Tech news", title: "What changed in tech", text: "News and short explainers for developers will appear here." },
  { kind: "AI", title: "AI, tried on real work", text: "Notes from the community on using AI in everyday projects." },
];

const faq = [
  { q: "What is YourDevelopers?", a: "A tech community for developers. We host events, share tech news, help developers with their questions, offer tech support and explore AI together." },
  { q: "Who is it for?", a: "Anyone who builds with technology, from people writing their first lines of code to experienced developers and their teams." },
  { q: "What can I get help with?", a: "Developer questions, tech problems and AI. Send a message and tell us what you are working on." },
  { q: "How do I find out about events?", a: "Upcoming events will be listed in the news section as soon as they are confirmed." },
  { q: "How do I get in touch?", a: "Use the form at the bottom of this page and tell us what is on your mind." },
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

/** The orange full stop that ends every section heading. */
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
        <p className="m-text-5 text-paper">We&apos;re YourDevelopers, a tech community for developers. Events, tech news, help, tech support and AI, all in one place.</p>
        <ArrowLink href="#work">See what we run</ArrowLink>
      </div>
      <h1 className="m-text-2 self-end whitespace-nowrap pb-[clamp(18px,5svh,52px)] min-[900px]:landscape:text-[length:min(26.5vw,43svh)]" id="hero-title" style={{ "--len": 5 } as CSSProperties}>
        <span className="hero__word inline-block"><span className="hero__mask inline-block"><span className="hero__glyphs inline-block">Hello</span></span></span>
        <span className="ml-[.035em] inline-block size-[.19em] rounded-pill bg-flame align-baseline min-[900px]:landscape:relative min-[900px]:landscape:bg-transparent" aria-hidden="true">
          <span className="hero__stage absolute left-[calc(50%-var(--ap)/2)] top-[calc(57%-var(--ap)/2)] size-(--ap) text-[16px] leading-[0] min-[900px]:landscape:top-auto min-[900px]:landscape:bottom-0 min-[900px]:landscape:left-0">
            <span className="hero__orbit absolute -inset-[9%] block rounded-pill border border-paper/16">
              <span className="absolute left-1/2 top-0 -ml-[4.5%] -mt-[4.5%] size-[9%] rounded-pill bg-flame" />
            </span>
            <span className="hero__aperture absolute inset-0 block overflow-hidden rounded-pill border border-flame/30 bg-black shadow-[0_0_90px_color-mix(in_srgb,var(--color-flame)_28%,transparent)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="absolute inset-0 m-auto size-[56%] object-contain" src="/logo-mark.png" width={1024} height={1024} alt="" fetchPriority="high" />
              <span className="hero__tint absolute inset-0 bg-flame opacity-0" />
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
        <span className="statement__line block">Developers helping</span>
        <span className="statement__line block">developers&nbsp;grow<Dot className="statement__dot" /></span>
      </h2>
      <div className="mt-[clamp(56px,11vh,120px)] grid grid-cols-[minmax(0,1fr)] gap-12 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] min-[900px]:items-start">
        <p className="m-text-5 max-w-xl min-[900px]:text-[length:clamp(24px,2.35vw,34px)] min-[900px]:leading-[1.16] min-[900px]:tracking-[-0.025em]" data-8b-motion="ink">YourDevelopers is a tech community for people who build. We host events, share tech news, help developers get unstuck, give tech support and explore AI together. Whether you are writing your first line of code or leading a team, there is a seat for you.</p>
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
          <h2 className="m-text-3" id="work-title">What we run<Dot /></h2>
          <p className="m-text-5 max-w-[25rem] text-fog">Five things the community does, from events to AI.</p>
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
          <h2 className="m-text-3" id="again-title">Made for developers<Dot /></h2>
          <p className="m-text-5 max-w-[27rem] text-fog">Wherever you are on the way, from the first line of code to a team of your own, there is a place here for you.</p>
        </div>
        <div className="again__swing mt-[clamp(40px,7vh,72px)]">
          <ul className="again__wheel grid grid-cols-[minmax(0,1fr)] gap-4 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
            {partners.map((partner, i) => (
              <li key={partner.name} className="partner">
                <div className="partner__card relative block aspect-[4/5] overflow-hidden rounded-card bg-night after:absolute after:inset-x-0 after:top-[35%] after:bottom-0 after:bg-linear-to-t/srgb after:from-ink/86 after:to-transparent after:content-['']">
                  <Photo photo={photos.again[i]} className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-x-[clamp(16px,1.8vw,26px)] bottom-[clamp(16px,1.8vw,26px)] z-1 grid justify-items-start gap-2.5">
                    <span className="m-badge bg-ink/62">{partner.tag}</span>
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
        <h2 className="m-text-3" id="capabilities-title" data-8b-motion="rise">How we help<Dot /></h2>
        <p className="m-text-5 max-w-[27rem] text-fog">Five ways the community supports developers, whatever you are building.</p>
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
        <h2 className="m-text-3" id="method-title" data-8b-motion="rise">How it works<Dot /></h2>
        <p className="m-text-5 max-w-[34rem]" data-8b-motion="ink">The community runs on a simple loop of four steps. The last one is what keeps it going: what one developer learns, everyone can use.</p>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_92px] items-start gap-5 min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[900px]:gap-[7vw]">
        <div className="method__ring relative col-start-2 row-start-1 aspect-square w-full min-[900px]:col-start-1 min-[900px]:w-[min(100%,50svh)] min-[900px]:justify-self-center" aria-hidden="true">
          <svg className="absolute inset-0 size-full -rotate-90 overflow-visible" viewBox="0 0 400 400">
            <circle className="fill-none stroke-ink/14 stroke-[1.5]" cx="200" cy="200" r="170" />
            <circle className="method__arc fill-none stroke-flame stroke-[5] [stroke-linecap:round]" cx="200" cy="200" r="170" pathLength="1" strokeDasharray="1 1" strokeDashoffset="0" />
          </svg>
          {[[0, -1], [1, 0], [0, 1], [-1, 0]].map(([x, y]) => (
            <span key={`${x},${y}`} className="method__station absolute top-[calc(50%+42.5%*var(--y))] left-[calc(50%+42.5%*var(--x))] -mt-[4.5%] -ml-[4.5%] size-[9%] rounded-pill bg-flame" style={{ "--x": x, "--y": y } as CSSProperties} />
          ))}
          <span className="method__arm absolute inset-[7.5%]">
            <span className="absolute top-0 left-1/2 -mt-[7.5%] -ml-[7.5%] size-[15%] rounded-pill border-[3px] border-flame bg-paper" />
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
        <h2 className="m-text-3" id="studio-title">The community<Dot /></h2>
        <p className="m-text-5 max-w-[42rem]" data-8b-motion="ink">Developers, learners and tech people who would rather share than gatekeep. We host events, publish tech news, help each other with code and tech problems, and work out together what AI means for the way we build.</p>
      </div>
      <div className="studio__collage relative grid grid-cols-2 gap-3 min-[900px]:block min-[900px]:aspect-[1.85]">
        {shots.map((position, i) => (
          <figure key={i} className={`shot relative overflow-hidden rounded-tile bg-mist min-[900px]:absolute ${position}`}>
            <Photo photo={photos.studio[i]} className="size-full object-cover" />
          </figure>
        ))}
        <div className="col-span-2 grid content-start gap-[18px] pt-6 min-[900px]:absolute min-[900px]:top-[55%] min-[900px]:left-[71%] min-[900px]:w-[29%] min-[900px]:pt-0">
          <h3 className="m-text-7" data-8b-motion="rise">Get involved<Dot /></h3>
          <ul className="grid">
            {ways.map(way => (
              <li key={way.title} className="role flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-ink/16 py-3.5">
                <span className="m-text-7">{way.title}</span>
                <span className="m-text-6 text-slate">{way.place}</span>
              </li>
            ))}
          </ul>
          <ArrowLink {...whatsapp}>Join the WhatsApp group</ArrowLink>
          <ArrowLink href="#contact">Get in touch</ArrowLink>
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
        <div className="journal__frame relative aspect-[16/10] overflow-hidden rounded-card bg-mist min-[900px]:aspect-[4/5]">
          {photos.journal.map((photo, i) => (
            <Photo key={i} photo={photo} className="journal__shot absolute inset-0 size-full object-cover first:z-1" />
          ))}
        </div>
        <ol className="grid gap-[clamp(36px,8vh,72px)] min-[900px]:gap-[clamp(64px,18vh,170px)] min-[900px]:pt-[6svh] min-[900px]:pb-[10svh]">
          {stories.map(story => (
            <li key={story.kind} className="story grid max-w-xl gap-3 border-t border-ink/16 pt-5">
              <p className="m-text-6 text-ember">{story.kind}</p>
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
              <span className="relative size-[34px] flex-none rounded-pill border-[1.5px] border-ink after:absolute after:inset-0 after:m-auto after:size-2.5 after:rounded-pill after:bg-flame after:transition-transform after:duration-[450ms] after:ease-[cubic-bezier(.7,0,.2,1)] after:content-[''] group-hover/row:after:scale-[1.8] group-open/item:after:scale-[3.1] group-open/item:group-hover/row:after:scale-[3.1]" aria-hidden="true" />
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
    <section id="contact" data-8b-section="contact" aria-labelledby="contact-title" className="bg-brand relative px-(--space-1) py-(--space-2) text-ink">
      <h2 className="m-text-3 contact__title text-[length:min(19vw,calc((100vw-2*var(--space-1))/(var(--len)*0.5)))] leading-[0.86] whitespace-nowrap [&_.m-dot]:bg-ink" id="contact-title" style={{ "--len": 10 } as CSSProperties}>
        <span className="contact__voice">Let&apos;s talk</span><Dot />
      </h2>
      <div className="mt-[clamp(40px,8vh,88px)] grid grid-cols-[minmax(0,1fr)] gap-12 min-[1000px]:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] min-[1000px]:gap-[6vw]">
        <div className="grid content-start gap-8">
          <p className="m-text-5 max-w-[30rem]">Have a question, a problem to solve or an idea for an event? Tell us what you are working on.</p>
          <ul className="grid gap-5">
            <li className="grid gap-1">
              <p className="m-text-6">Call us</p>
              <a className="m-text-7 w-fit no-underline" href="tel:+919205394233">+91 92053 94233</a>
              <a className="m-text-7 w-fit no-underline" href="tel:+917827465966">+91 78274 65966</a>
            </li>
            <li className="grid gap-1">
              <p className="m-text-6">Email us</p>
              <a className="m-text-7 w-fit no-underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </li>
          </ul>
          <ArrowLink {...whatsapp}>Or join the WhatsApp group</ArrowLink>
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
          <span className="footer__aperture absolute bottom-0 left-0 size-(--ap) origin-bottom-left overflow-hidden rounded-pill border border-flame/30 bg-black shadow-[0_0_90px_color-mix(in_srgb,var(--color-flame)_28%,transparent)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="absolute inset-0 m-auto size-[56%] object-contain" src="/logo-mark.png" width={1024} height={1024} alt="" loading="lazy" />
            <span className="footer__tint absolute inset-0 bg-flame opacity-0" />
          </span>
        </span>
      </p>
      <div className="mt-[clamp(48px,9vh,96px)] grid grid-cols-2 gap-x-6 gap-y-10 border-t border-paper/16 pt-8 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)]">
        <nav className={col} aria-label="Footer">
          <p className={label}>Explore</p>
          {navLinks.map(link => <a key={link.href} className="m-link-2" href={link.href}>{link.label}</a>)}
        </nav>
        <div className={col}>
          <p className={label}>Join us</p>
          <a className="m-link-2" {...whatsapp}>WhatsApp group</a>
        </div>
        <NewsletterForm />
      </div>
      <div className="m-text-6 mt-14 flex flex-wrap justify-between gap-x-6 gap-y-2 text-fog">
        <p>© 2026 YourDevelopers</p>
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
