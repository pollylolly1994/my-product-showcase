import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Полина Гуляева — Senior Product Manager" },
      {
        name: "description",
        content:
          "Портфолио Полины Гуляевой: Senior Product Manager с 10-летним опытом в банковской сфере, специализация B2B. Опыт и проекты.",
      },
      { property: "og:title", content: "Полина Гуляева — Senior Product Manager" },
      {
        property: "og:description",
        content: "10 лет в банках, B2B-продукты. Опыт, проекты и контакты.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const experience = [
  {
    period: "2021 — сейчас",
    role: "Senior Product Manager",
    company: "Банк · B2B-платформа для корпоративных клиентов",
    points: [
      "Владение продуктом с оборотом 40+ тыс. корпоративных клиентов",
      "Редизайн онбординга: срок открытия счёта сократился с 5 дней до 1",
      "Команда из 12 человек: аналитика, дизайн, разработка",
    ],
  },
  {
    period: "2018 — 2021",
    role: "Product Manager",
    company: "Банк · Расчётные и платёжные сервисы",
    points: [
      "Запуск массовых платежей и API-интеграций для бухгалтерий",
      "Рост MAU сегмента малого бизнеса на 34% за год",
      "Внедрение продуктовой аналитики и регулярных исследований",
    ],
  },
  {
    period: "2016 — 2018",
    role: "Business / Product Analyst",
    company: "Финтех · Кредитные продукты",
    points: [
      "Юнит-экономика и приоритизация бэклога",
      "Кастдев с корпоративными клиентами, 100+ интервью",
    ],
  },
];

const projects = [
  {
    tag: "B2B onboarding",
    title: "Открытие счёта за один день",
    result: "−80% времени",
    text: "Пересобрала путь клиента от заявки до активного счёта: предзаполнение данных, параллельные проверки, прозрачные статусы.",
    accent: "blue" as const,
  },
  {
    tag: "Payments",
    title: "Массовые платежи и API",
    result: "+34% MAU",
    text: "Продукт для бухгалтерий: реестры, роли и подписи, документированное API с песочницей.",
    accent: "butter" as const,
  },
  {
    tag: "Analytics",
    title: "Продуктовая аналитика с нуля",
    result: "12 команд",
    text: "Единая событийная модель, дашборды и ритуалы принятия решений на данных вместо мнений.",
    accent: "red" as const,
  },
  {
    tag: "Discovery",
    title: "Сегментация корпоративных клиентов",
    result: "100+ интервью",
    text: "Исследование потребностей МСБ и крупного бизнеса, которое легло в основу трёхлетней стратегии.",
    accent: "choco" as const,
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
          <span className="font-bold tracking-tight">pollylolly94</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-brand-red">
              Обо мне
            </a>
            <a href="#experience" className="hover:text-brand-red">
              Опыт
            </a>
            <a href="#projects" className="hover:text-brand-red">
              Проекты
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <section id="about" className="grid gap-10 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">
              01 / позиционирование
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Полина
              <br />
              Гуляева
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed md:text-xl">
              <span className="mark-butter font-bold">Senior Product Manager</span> с 10-летним
              опытом в банковской сфере, специализация — B2B.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Живу в Тель-Авиве, люблю пилатес, хайкинг и свою собаку.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[15px] font-semibold">
              <a
                href="https://t.me/pollylolly94"
                className="rounded-full bg-brand-blue px-5 py-3 text-foreground"
              >
                Telegram @pollylolly94
              </a>
              <a
                href="mailto:guliaevapolina1994@gmail.com"
                className="rounded-full bg-brand-blue-soft px-5 py-3 text-foreground"
              >
                guliaevapolina1994@gmail.com
              </a>
            </div>
          </div>
          <div className="border border-border">
            <img
              src={portrait}
              alt="Полина Гуляева, Senior Product Manager"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section id="experience" className="border-t border-border py-16 md:py-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-muted-foreground">02 / опыт</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Где я работала</h2>
          <div className="mt-12 flex flex-col gap-12">
            {experience.map((job) => (
              <article key={job.role + job.period} className="grid gap-4 md:grid-cols-[180px_1fr]">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-brand-choco">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>
                  <p className="mt-1 text-muted-foreground">{job.company}</p>
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
            03 / проекты
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Мои проекты</h2>
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
          <span>© 2026 · Полина Гуляева</span>
          <div className="flex gap-5">
            <a href="https://t.me/pollylolly94" className="hover:text-brand-red">
              Telegram
            </a>
            <a href="mailto:guliaevapolina1994@gmail.com" className="hover:text-brand-red">
              Mail
            </a>
            <a href="https://www.linkedin.com" className="hover:text-brand-red">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
