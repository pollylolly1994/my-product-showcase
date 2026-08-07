import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Polina Guliaeva — Product Lead & Senior Product Manager" },
      {
        name: "description",
        content:
          "Product Lead with 10+ years building and scaling B2B and B2C digital products for small businesses, entrepreneurs and regulated industries.",
      },
      { property: "og:title", content: "Polina Guliaeva — Product Lead" },
      {
        property: "og:description",
        content:
          "10+ years in product. B2B and B2C digital products, 0→1 launches, growth, retention and monetization.",
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
    role: "Senior Product Manager",
    company:
      "Raiffeisen Bank · Russian subsidiary of Raiffeisen Bank International, Top 10 bank in Russia by assets",
    intro:
      "Owned product strategy, roadmap and delivery for a portfolio of digital products serving 10,000+ small business customers across mobile and online banking: online accounting, tax reporting, tax savings, freelancer management, document builder, fine payments and customer communication services.",
    points: [
      "Grew the self-employed customer base from 0 to 5,000 clients within one year by leading the greenfield launch of a mobile banking product under strict regulatory requirements, coordinating a 20-member cross-functional team.",
      "Increased customer retention by 10 p.p. among 10,000+ SME users by defining the ecosystem strategy and launching 5 integrated services.",
      "Launched a paid online accounting service with a subscription model generating ~$280K ARR, then shifted to freemium based on LTV and retention analysis.",
      "Achieved tax regulator certification for a greenfield product in 1 month instead of the typical 6, leading 20 cross-functional teams and preventing the loss of up to 10% of the customer base.",
      "Increased automated resolution rate of SME online chat from 20% to 40% over three years via ML intent classification, LLM-powered responses and A/B testing.",
      "Defined product roadmap and investment priorities using customer research, UX studies, Fake Door experiments, A/B testing and competitive analysis.",
    ],
  },
  {
    period: "May 2024 — Jan 2025",
    role: "Product Manager (Additional project)",
    company:
      "Intrepidfox · London, UK (Remote) — early-stage AI startup for onboarding, KYC/KYB and monitoring automation in fintech",
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
    text: "Greenfield launch under strict regulatory requirements in one year, coordinating a 20-member cross-functional team and combining organic growth with targeted acquisition campaigns.",
    accent: "blue" as const,
  },
  {
    tag: "Ecosystem · Retention",
    title: "SME services ecosystem",
    result: "+10 p.p. retention",
    text: "Ecosystem strategy and launch of 5 integrated services for 10,000+ SME users: online accounting, tax savings, unified tax account balance and fine payments.",
    accent: "butter" as const,
  },
  {
    tag: "Monetization",
    title: "Paid online accounting",
    result: "~$280K ARR",
    text: "Subscription service launched from scratch, later moved to a freemium model based on LTV and retention analysis — improving adoption while keeping recurring revenue.",
    accent: "red" as const,
  },
  {
    tag: "Regulatory · Speed",
    title: "New tax regime product",
    result: "1 month vs 6",
    text: "Regulator certification achieved in a sixth of the usual time by defining minimum viable scope, reusing existing technical solutions and partnering with government stakeholders.",
    accent: "choco" as const,
  },
  {
    tag: "AI · Automation",
    title: "SME chat automation",
    result: "20% → 40%",
    text: "Automated resolution rate doubled over three years through improved ML intent classification, LLM-powered responses, automated journeys and A/B validation.",
    accent: "blue" as const,
  },
  {
    tag: "AI SaaS · Fintech",
    title: "AI onboarding & KYC/KYB",
    result: "2 clients activated",
    text: "OCR- and LLM-based document verification requirements for an AI-powered onboarding platform, plus product reporting and funnel analytics for international fintech clients.",
    accent: "butter" as const,
  },
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
          <span className="font-bold tracking-tight">Polina Guliaeva</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-brand-red">
              About
            </a>
            <a href="#experience" className="hover:text-brand-red">
              Experience
            </a>
            <a href="#projects" className="hover:text-brand-red">
              Projects
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section id="about" className="grid gap-10 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Polina
              <br />
              Guliaeva
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">
              I am a <span className="mark-butter font-bold">Product Lead</span> with 10+ years of
              experience building and scaling B2B and B2C digital products for small businesses,
              entrepreneurs, and regulated industries.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              For the past five years, I have led a cross-functional product team of 30+
              professionals across Product, Engineering, Design, Research, and Analytics. My
              experience spans the full product lifecycle, from discovery and strategy to delivery,
              monetization, scaling, and people development.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              I am based in Tel Aviv and authorized to work in Israel. I am open to opportunities in
              Israel or with remote international teams.
            </p>

            <p className="mt-8 text-lg font-bold text-brand-blue">Contact me:</p>
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
                  href="https://t.me/pollylolly94"
                  className="inline-flex items-center gap-2 hover:text-brand-red"
                >
                  <span aria-hidden="true">✈️</span> @pollylolly94
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

        <section id="experience" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
            01 / experience
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
                  <p className="mt-1 text-muted-foreground">{job.company}</p>
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
            02 / projects
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
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-[13px] text-muted-foreground">
          <span>© 2026 · Polina Guliaeva</span>
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
