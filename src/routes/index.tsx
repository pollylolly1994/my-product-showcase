import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polina Guliaeva — Product Lead & Senior Product Manager" },
      {
        name: "description",
        content:
          "Product Lead with 10+ years building B2B and B2C digital products for small businesses in fintech, from 0 to 1 launches to AI-powered automation.",
      },
      { name: "author", content: "Polina Guliaeva" },
      { property: "og:title", content: "Polina Guliaeva — Product Lead & Senior Product Manager" },
      {
        property: "og:description",
        content:
          "Product Lead with 10+ years building B2B and B2C digital products for small businesses in fintech, from 0 to 1 launches to AI-powered automation.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const experience = [
  {
    period: "Feb 2016 — Apr 2026",
    role: "Product Lead",
    company:
      "Raiffeisen Bank · Russian subsidiary of Raiffeisen Bank International, Top 10 bank in Russia by assets",
     url: "https://www.raiffeisen.ru/en/",
      intro:
      "Grew from intern to product team lead over 10 years, owning product strategy, roadmap, and delivery for a portfolio of digital products serving 10,000+ small business customers across mobile and online banking: online accounting, tax reporting, tax savings, freelancer management, document builder, fine payments, and customer communication services. Led a 30+ cross-functional team, mentored 3+ junior specialists into Product Managers, and achieved an 87% leader recommendation score. Selected for the bank's High Potential talent program and named as the designated successor to the Head of Product.",
    points: [
      "Grew the self-employed customer base from 0 to 5,000 clients within one year by leading the greenfield launch of a mobile banking product under strict regulatory requirements.",
      "Increased customer retention by 10 p.p. among 10,000+ SME users by defining the ecosystem strategy and launching 5 integrated services.",
      "Launched a paid online accounting service with a subscription model, generating ~$280K ARR, with around 80% of customers still using the service after one year.",
      "Ran an A/B pricing test on the premium plan: its share of subscriptions grew from 3% to 10%, revenue grew by 74%, and month-5 payment rate rose from 42% to 63%.",
      "Achieved tax regulator certification for a greenfield product in 1 month instead of the typical 6 by defining minimum viable scope and reusing existing technical solutions, preventing the loss of up to 10% of the customer base.",
      "Doubled the automated resolution rate of the SME support chat from 20% to 40% over three years with ML intent classification, LLM-powered responses, and automated action flows, saving 4 FTE while keeping CSAT at 80%.",
    ],
  },
  {
    period: "May 2024 — Jan 2025",
    role: "Product Manager (Additional project)",
    company:
      "Intrepidfox · London, UK (Remote) · Early-stage AI startup for onboarding, KYC/KYB and monitoring automation in fintech",
     url: "https://www.intrepidfox.tech/",
      intro: "",
    points: [
      "Translated fintech compliance requirements into product features for an AI-powered onboarding platform and defined OCR- and LLM-based document verification requirements.",
      "Moved two existing clients from contract signing to active product use.",
      "Partnered directly with the CEO on onboarding automation, built product reporting and funnel analytics, ran client demos and presales, contributing to acquiring one additional fintech customer.",
    ],
  },
];

const projects = [
  {
    tag: "0 → 1 · Mobile banking",
    title: "Self-employed banking product",
    result: "0 → 5,000 clients",
    problem:
      "A new self-employed segment needed a banking product, under strict regulatory requirements.",
    did: "Led the greenfield launch of a mobile banking product, combining organic growth with targeted acquisition campaigns.",
    outcome: "5,000 clients within the first year.",
    accent: "blue" as const,
  },
  {
    tag: "Ecosystem · Retention",
    title: "SME services ecosystem",
    result: "+10 p.p. retention",
    problem: "Small business customers used separate services and had few reasons to stay.",
    did: "Defined the ecosystem strategy and launched 5 integrated services: online accounting, tax savings, unified tax account balance, and fine payments.",
    outcome: "Retention grew by 10 p.p. among 10,000+ SME users.",
    accent: "butter" as const,
  },
  {
    tag: "AI · Automation",
    title: "AI support chat",
    result: "20% → 40%",
    problem:
      "Many customers waited for an operator to fix routine issues, such as payments they couldn't confirm.",
    did: "Improved ML intent classification, introduced LLM-powered responses, and designed automated flows that fixed issues end to end — for example, detecting a SIM change that blocked payment confirmation and triggering a phone number update — with escalation to a human for complex cases.",
    outcome: "Automated resolution doubled, saving 4 FTE while keeping CSAT at 80%.",
    accent: "blue" as const,
  },
  {
    tag: "Monetization · Experiment",
    title: "Premium plan pricing test",
    result: "+74% revenue",
    problem: "The most expensive of three subscription plans had only 3% of subscriptions.",
    did: "Ran an A/B test offering a lifetime 50% discount to half of new customers.",
    outcome: "The plan's share grew to 10%, revenue grew by 74%, and month-5 payments rose from 42% to 63%.",
    accent: "red" as const,
  },
  {
    tag: "Regulatory · Speed",
    title: "New tax regime product",
    result: "1 month vs 6",
    problem:
      "A new tax regime required a certified product in 1 month instead of the usual 6, or we risked losing up to 10% of customers.",
    did: "Defined minimum viable scope, reused existing technical solutions, integrated with the tax authority via API, and partnered with government stakeholders.",
    outcome: "Certified in 1 month, keeping our customers.",
    accent: "choco" as const,
  },
  {
    tag: "AI SaaS · Fintech",
    title: "AI onboarding & KYC/KYB",
    result: "2 clients activated",
    problem: "Fintech clients needed faster, automated customer onboarding and verification.",
    did: "Translated compliance requirements into product features and defined OCR- and LLM-based document verification.",
    outcome: "Moved two clients from contract signing to active use and supported acquiring one more.",
    accent: "butter" as const,
  },
];

const education = [
  {
    degree: "Master's degree, Business Informatics, 2016–2018",
    school: "Higher School of Economics (Top 3 university in Russia)",
  },
  {
    degree: "Bachelor's degree, Economics, 2012–2016",
    school: "Higher School of Economics & New Economic School",
  },
  {
    degree: "Exchange program, Economics, 2014–2015",
    school: "ITAM (Top 3 university in Mexico)",
  },
];
const principles = [
  {
    title: "I build teams people want to be part of.",
    text: "I care about what motivates each person and help them grow. My team gave me an 87% leader recommendation score, and three junior specialists grew into Product Managers.",
  },
  {
    title: "I don't give up on hard problems.",
    text: "I believe almost anything at work can be solved if you keep looking for a way. When a new tax regime gave us 1 month instead of the usual 6, we found one — and got certified on time.",
  },
  {
    title: "I find fast solutions when speed matters.",
    text: "I know when to cut scope, reuse what already exists, and ship the smallest thing that solves the problem.",
  },
  {
    title: "I turn dependencies into partnerships.",
    text: "Much of my work depended on other teams — and theirs on mine. I'm good at building trust with partner teams, aligning priorities, and getting things done together.",
  },
  {
    title: "I care about beauty and quality.",
    text: "I believe a product should not only work but also feel good to use. I work closely with designers to make every flow simple, clear, and polished.",
  },
];
const certifications = [
  { name: "AI/ML Product Management Simulator", issuer: "GoPractice, 2026" },
  { name: "Data-driven Product Management Simulator", issuer: "GoPractice, 2020" },
];

const accentBar: Record<string, string> = {
  blue: "bg-brand-blue",
  butter: "bg-brand-butter",
  red: "bg-brand-red",
  choco: "bg-brand-choco",
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-10 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-[13px]">
        <svg
          aria-label="Polina Guliaeva"
          width="28"
          height="28"
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-red"
        >
          <g transform="translate(240,240)">
            <g transform="rotate(0)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(40)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(80)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(120)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(160)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(200)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(240)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(280)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <g transform="rotate(320)"><ellipse cx="0" cy="-95" rx="34" ry="60" fill="currentColor" /></g>
            <circle cx="0" cy="0" r="42" fill="white" stroke="currentColor" stroke-width="3" />
          </g>
        </svg>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-brand-red">
              About
            </a>
            <a href="#skills" className="hover:text-brand-red">
              Skills
            </a>
            <a href="#experience" className="hover:text-brand-red">
              Experience
            </a>
            <a href="#projects" className="hover:text-brand-red">
              Projects
            </a>
                        <a href="#principles" className="hover:text-brand-red">
              Principles
            </a>
            <a href="#education" className="hover:text-brand-red">
              Education
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section id="about" className="grid gap-10 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="whitespace-nowrap text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Polina Guliaeva
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
              I'm a <span className="mark-butter font-bold">Product Lead</span> with 10+ years of
              experience building and scaling B2B and B2C digital products for small businesses,
              entrepreneurs, and regulated industries.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              At Raiffeisen Bank, I grew from intern to product team lead. For the past five years,
              I led a cross-functional team of 30+ people across Product, Engineering, Design, and
              Analytics, and owned a portfolio of digital products for small business customers. My
              experience spans the full product lifecycle — from discovery and strategy to delivery,
              monetization, scaling, and people development — and more recently, AI-powered
              products.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              I'm based in Tel Aviv, authorized to work in Israel, and open to remote roles with
              international teams.
            </p>

            <p className="mt-8 text-lg font-bold">
              <span className="mark-blue text-foreground">Contact me:</span>
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-[15px]">
              <li>
                <a
                  href="mailto:guliaevapolina1994@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-brand-red"
                >
                  <span aria-hidden="true">✉️</span> guliaevapolina1994@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/polina-guliaeva"
                  className="inline-flex items-center gap-2 hover:text-brand-red"
                >
                  <span aria-hidden="true">💼</span> linkedin.com/in/polina-guliaeva
                </a>
              </li>
            </ul>
            <a
              href="/Polina_Guliaeva_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center rounded-full bg-brand-red px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={portraitAsset.url}
              alt="Polina Guliaeva, Product Lead"
              width={1024}
              height={1024}
              className="aspect-square w-full max-w-sm rounded-full object-cover"
            />
          </div>
        </section>

        <section id="skills" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            01 / skills
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">My skills</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Product strategy & roadmap",
              "Discovery & customer research",
              "A/B testing & experimentation",
              "Growth, retention & monetization",
              "Cross-functional leadership",
              "AI / ML product development",
              "Fintech & regulated industries",
              "UX research & design collaboration",
              "Analytics & data-driven decisions",
              "0 → 1 launches & scaling",
              "Agile & delivery management",
              "Stakeholder & executive communication",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-brand-butter px-4 py-2 text-[15px] font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-choco">
                Tools
              </h3>
              <p className="mt-3 leading-relaxed">
                SQL • Amplitude • Power BI • Jira • Confluence • Claude • Lovable
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-choco">
                Languages
              </h3>
              <p className="mt-3 leading-relaxed">
                English (C1) • Russian (native) • Hebrew (basic)
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            02 / experience
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Where I worked</h2>
          <div className="mt-12 flex flex-col gap-12">
            {experience.map((job) => (
              <article key={job.role + job.period} className="grid gap-4 md:grid-cols-[180px_1fr]">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-brand-choco">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>
                                    <p className="mt-1 text-muted-foreground">
                    {job.company}{" "}
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap font-medium text-brand-red hover:underline"
                    >
                      Visit website ↗
                    </a>
                  </p>
                  {job.intro ? <p className="mt-4 leading-relaxed">{job.intro}</p> : null}
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed">
                        <span className="mt-[0.6em] h-[6px] w-[6px] shrink-0 rounded-full bg-brand-blue" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            03 / projects
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">My projects</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="border border-border">
                <div className={`h-2 w-full ${accentBar[p.accent]}`} />
                <div className="p-7">
                  <p className="text-[13px] uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-snug">{p.title}</h3>
                  <p className="mt-4 text-4xl font-extrabold tracking-tight">{p.result}</p>
                  <dl className="mt-4 flex flex-col gap-3 leading-relaxed text-muted-foreground">
                    <div>
                      <dt className="font-bold text-foreground">Problem</dt>
                      <dd>{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">What I did</dt>
                      <dd>{p.did}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Result</dt>
                      <dd>{p.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="principles" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            04 / principles 
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">How I work</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <article key={p.title} className="border border-border p-7">
                <p className="text-4xl font-extrabold tracking-tight text-brand-red">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="education" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            05 / education
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Education & certifications</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-choco">
                Education
              </h3>
              <ul className="mt-6 flex flex-col gap-6">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-bold leading-snug">{e.degree}</p>
                    <p className="mt-1 text-muted-foreground">{e.school}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-choco">
                Certifications
              </h3>
              <ul className="mt-6 flex flex-col gap-6">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="font-bold leading-snug">{c.name}</p>
                    <p className="mt-1 text-muted-foreground">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-[13px] text-muted-foreground">
          <span>© 2026 · Polina Guliaeva · Designed and built by me with Lovable.</span>
          <div className="flex gap-5">
            <a href="https://t.me/pollylolly94" className="hover:text-brand-red">
              Telegram
            </a>
            <a href="mailto:guliaevapolina1994@gmail.com" className="hover:text-brand-red">
              Mail
            </a>
            <a
              href="https://www.linkedin.com/in/polina-guliaeva"
              className="hover:text-brand-red"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
