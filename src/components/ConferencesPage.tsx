import Accordion from "@/components/Accordion";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";

const copy = {
  en: {
    kicker: "IDEAS & TECHNOLOGIES THAT SHAPE THE WORLD",
    p1: "I am a techno-creative entrepreneur and international speaker who helps leaders decipher new technological trends and make informed decisions regarding emerging technologies.",
    p2: "With over 27 years of experience working at the intersection of technology, art, marketing, and business, I offer a comprehensive and sensible perspective on the impact of technological advancements in companies, people, and industries.",
    what: "WHAT I DO",
    who: "WHO DO I WORK WITH?",
    topics: "SPEAKING TOPICS",
    custom: (
      <>
        Do you need a custom talk or conference for your business?{" "}
        <Link href="/contact-me/" className="text-coral font-semibold">
          contact me and let’s talk
        </Link>
        .
      </>
    ),
    testimonials: "TESTIMONIALS",
    past: "PAST EVENTS",
    featured: "FEATURED IN",
    boards: "BOARDS & ADVISORY",
    services: [
      { title: "Conferences", image: "/images/2024/09/IMG_3665.jpg" },
      { title: "Debate panels and discussion forums", image: "/images/2024/09/Stereopsia-15thedition.jpg" },
      { title: "Training & Workshops", image: "/images/2024/09/MG_4094.jpg" },
      { title: "Stage chair – Event Host", image: "/images/2024/09/tomasvaamorir.jpg" },
      { title: "Mentoring", image: "/images/2024/09/mentoring.jpg" },
      { title: "Strategic Consulting on emerging tech", image: "/images/2024/09/1685739810922.jpeg" },
    ],
    audiences: [
      {
        title: "C-Level Executives and Leaders",
        body: "Change agents, innovators, provocateurs, and misfits, from senior executives to emerging leaders who seek to expand their minds with a forward-looking perspective on technocreative trends and technological disruption.",
      },
      {
        title: "Politicians and Key Figures",
        body: "I advise Senators, Congress members, Mayors, Governors, and Governments on deciphering emerging technologies, providing guidance on developing regulatory frameworks and public policies.",
      },
      {
        title: "Corporate Events and Producers",
        body: "Event managers and corporate professionals who organize internal and external events, strategy retreats, and conferences.",
      },
      {
        title: "Agents and Organizations",
        body: "Speaker agencies that connect clients with the right speaking talent.",
      },
    ],
    topicItems: [
      {
        title: "Global Policy & Regulation on Artificial Intelligence",
        body: "An exploration of how governments and international bodies are shaping the future of AI through evolving laws, ethical standards, and regulatory frameworks to ensure responsible development and deployment.",
      },
      {
        title: "Neuro-rights: What are them and why are they important?",
        body: "A critical discussion on the emerging field of neuro-rights, addressing the ethical and legal challenges of protecting mental privacy, freedom of thought, and mental integrity as neurotechnology advances.",
      },
      {
        title: "Immersive technologies and digital transformation",
        body: "An insight into how immersive technologies like VR and AR are revolutionizing industries, driving digital transformation, and creating more interactive, efficient, and engaging user experiences.",
      },
      {
        title: "Emerging Technologies in Education",
        body: "A deep dive into the role of cutting-edge technologies such as AI, AR, and VR in transforming traditional education, enhancing learning environments, and empowering educators and students.",
      },
    ],
    quotes: [
      {
        quote:
          "Oscar is a creative and bold person, demonstrating commitment and adaptability to share his knowledge and its practical applications with his audience. Along with his experience, we managed to organize the first AI summit for businesses at the municipal level, becoming the first municipality in the southern area of the Metropolitan Region to achieve this feat. Nothing is impossible with teamwork, and Oscar is a constant example of leadership and unification of goals to achieve the greatest impact in the community.",
        name: "Víctor Ramírez Pratt",
        org: "Coordinador Departamento Fomento Productivo, Municipalidad de San Miguel",
        href: "https://web.sanmiguel.cl",
        image: "/images/2024/09/1708093171088.jpeg",
      },
      {
        quote:
          "If you're looking for someone passionate, at the cutting edge of the latest trends in the industry from Latin America to the world, and always ready to share his cross-disciplinary, people-centred vision, with both experts and new comers, Oscar is the right person. Among the many conferences, keynotes, podcasts, showcases that he's been leading, collaborating with or giving advises for, one thing is sure: Oscar will get you inspired and motivated by his contagious energy.",
        name: "Sylvain Grain",
        org: "Director / Producer, Stereopsia Latam",
        href: "https://www.stereopsia.com/",
        image: "/images/2024/09/1624333218150.jpeg",
      },
      {
        quote:
          "I met Oscar on Linkedin and it was truly a blessing! We have been researching Augmented Reality for a while now to implement into our app and with so many options out there. It was hard to know which direction was best suited to our company goals. After speaking with Oscar a number of times over the phone, he finally set us in the right direction with an affordable solution that maintained high-quality output. If you are thinking about implementing Augmented Reality into your business, you need to speak to Oscar.",
        name: "Cory F. Zufelt",
        org: "CEO",
        href: "https://www.linkedin.com/in/coryzufelt/",
        image: "/images/2024/09/1713828410408.jpeg",
      },
      {
        quote:
          "Oscar is one of those amazing people you meet in life; working with him has been a unique learning experience. Oscar is a highly qualified professional, but he is also one of the most humble and collaborative people I know. His motto is “let's solve this without stress,” and he always has a creative solution to problems, resolving them without creating more issues, something I greatly admire.",
        name: "Antonio Da Rocha",
        org: "Chief of Immersive Learning, Multiversica",
        href: "https://multiversica.com/",
        image: "/images/2024/09/1706479638266.jpeg",
      },
    ],
  },
  es: {
    kicker: "IDEAS Y TECNOLOGÍAS QUE MUEVEN AL MUNDO",
    p1: "Soy un tecnocreativo apasionado por las tecnologías emergentes y su impacto en la sociedad. Conferencista reconocido internacionalmente que ayuda a líderes a descifrar las nuevas tendencias tecnológicas y a tomar decisiones informadas.",
    p2: "Con más de 27 años trabajando en la convergencia tecnológica entre el arte, el marketing y los negocios; propongo una visión integral y sensata de la influencia de los avances tecnológicos en los procesos productivos, las personas y las industrias.",
    what: "¿QUÉ HAGO?",
    who: "¿CON QUIÉN TRABAJO?",
    topics: "TEMAS DE CONFERENCIA",
    custom: (
      <>
        ¿Necesitas una charla o conferencia a la medida para tu empresa o negocio?{" "}
        <Link href="/es/contacto/" className="text-coral font-semibold">
          Contáctame y conversemos
        </Link>
        .
      </>
    ),
    testimonials: "TESTIMONIOS",
    past: "EVENTOS ANTERIORES",
    featured: "DESTACADO EN",
    boards: "CONSEJERO ESTRATÉGICO",
    services: [
      { title: "Conferencias", image: "/images/2024/09/IMG_3665.jpg" },
      { title: "Paneles y moderación", image: "/images/2024/09/Stereopsia-15thedition.jpg" },
      { title: "Capacitaciones y entrenamiento", image: "/images/2024/09/MG_4094.jpg" },
      { title: "Anfitrión – Embajador", image: "/images/2024/09/tomasvaamorir.jpg" },
      { title: "Mentorías", image: "/images/2024/09/mentoring.jpg" },
      { title: "Consultoría estratégica en tecnologías emergentes", image: "/images/2024/09/1685739810922.jpeg" },
    ],
    audiences: [
      {
        title: "Ejecutivos de alto nivel y Líderes de opinión",
        body: "Agentes de cambio, innovadores, provocadores e inadaptados, desde los altos ejecutivos hasta los líderes emergentes que buscan expandir sus mentes con visión de futuro sobre las tendencias tecnocreativas y la disrupción tecnológica.",
      },
      {
        title: "Políticos y Personas de importancia",
        body: "Asesoro a Senadores, Diputados, Alcaldes, Gobernadores y Gobiernos para descifrar tecnologías emergentes y orientar marcos regulatorios y políticas públicas.",
      },
      {
        title: "Eventos corporativos y Productores",
        body: "Gerentes de eventos y profesionales corporativos que organizan eventos internos, externos, retiros de estrategia y conferencias.",
      },
      {
        title: "Agentes y Organizaciones",
        body: "Agencias de conferencistas que conectan a los clientes con el talento de oratoria adecuado.",
      },
    ],
    topicItems: [
      {
        title: "Regulación global de la Inteligencia Artificial",
        body: "Un recorrido por el mundo regulatorio donde analizaremos las leyes, normas y políticas públicas sobre Inteligencia Artificial que se están implementando en los países y regiones más relevantes del planeta.",
      },
      {
        title: "Neuro-derechos: ¿qué son y por qué son importantes?",
        body: "Una charla enfocada en el incipiente campo de los neuro-derechos, campo profesional encargado de afrontar los desafíos éticos y legales de la protección de la privacidad mental, libre pensamiento e integridad psicológica.",
      },
      {
        title: "Tecnologías inmersivas y transformación digital",
        body: "Una charla sobre los fundamentos de la realidad aumentada, realidad virtual y la realidad mixta. Cómo éstas tecnologías están transformando la productividad, el entretenimiento y nuestra relación con la tecnología.",
      },
      {
        title: "Tecnologías emergentes en la educación",
        body: "Descubre la ciencia detrás del futuro de la educación y cómo un cambio de paradigma educativo es inminente.",
      },
    ],
    quotes: [
      {
        quote:
          "Oscar is a creative and bold person, demonstrating commitment and adaptability to share his knowledge and its practical applications with his audience. Along with his experience, we managed to organize the first AI summit for businesses at the municipal level, becoming the first municipality in the southern area of the Metropolitan Region to achieve this feat. Nothing is impossible with teamwork, and Oscar is a constant example of leadership and unification of goals to achieve the greatest impact in the community.",
        name: "Víctor Ramírez Pratt",
        org: "Coordinador Departamento Fomento Productivo, Municipalidad de San Miguel",
        href: "https://web.sanmiguel.cl",
        image: "/images/2024/09/1708093171088.jpeg",
      },
      {
        quote:
          "If you're looking for someone passionate, at the cutting edge of the latest trends in the industry from Latin America to the world, and always ready to share his cross-disciplinary, people-centred vision, with both experts and new comers, Oscar is the right person. Among the many conferences, keynotes, podcasts, showcases that he's been leading, collaborating with or giving advises for, one thing is sure: Oscar will get you inspired and motivated by his contagious energy.",
        name: "Sylvain Grain",
        org: "Director / Producer, Stereopsia Latam",
        href: "https://www.stereopsia.com/",
        image: "/images/2024/09/1624333218150.jpeg",
      },
      {
        quote:
          "I met Oscar on Linkedin and it was truly a blessing! We have been researching Augmented Reality for a while now to implement into our app and with so many options out there. It was hard to know which direction was best suited to our company goals. After speaking with Oscar a number of times over the phone, he finally set us in the right direction with an affordable solution that maintained high-quality output. If you are thinking about implementing Augmented Reality into your business, you need to speak to Oscar.",
        name: "Cory F. Zufelt",
        org: "CEO",
        href: "https://www.linkedin.com/in/coryzufelt/",
        image: "/images/2024/09/1713828410408.jpeg",
      },
      {
        quote:
          "Oscar es de esas personas extraordinarias que te encuentras en la vida; trabajar con él ha sido una experiencia de aprendizaje única. Es un profesional altamente calificado, y también una de las personas más humildes y colaborativas que conozco. Su lema es “resolvamos esto sin estrés”, y siempre tiene una solución creativa a los problemas.",
        name: "Antonio Da Rocha",
        org: "Chief of Immersive Learning, Multiversica",
        href: "https://multiversica.com/",
        image: "/images/2024/09/1706479638266.jpeg",
      },
    ],
  },
};

const pastLogos = [
  "awe",
  "stereopsia-eu",
  "vrday",
  "laval",
  "msw",
  "cerlalc",
  "edvr-1",
  "narrar-el-futuro",
  "giff",
  "congreso-futuro",
  "mediamorfosis",
  "sanfic-industria",
  "stereopsia-latam",
  "cbc",
  "lenovo",
  "ipchile",
  "uss-gray",
  "vws",
  "tgh",
];

const featuredLogos = ["emol", "ar-vr"];
const boardLogos = ["xrsi", "lianm", "xri", "wotf", "crtic", "aixr"];

export default function ConferencesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="bg-paper">
      <section className="site-container grid lg:grid-cols-2 gap-10 items-center py-16">
        <Image
          src="/images/2024/09/oscar-stereopsialatam-SM-e1727146355596.jpg"
          alt="Oscar Cartagena speaking"
          width={760}
          height={845}
          className="w-full object-cover"
          priority
        />
        <div className="text-right">
          <h1 className="text-coral font-extrabold uppercase leading-[0.95] text-[42px] md:text-[56px] tracking-tight">
            {t.kicker}
          </h1>
          <p className="mt-8 text-[16px]">{t.p1}</p>
          <p className="mt-4 text-[16px]">{t.p2}</p>
        </div>
      </section>

      <section className="bg-yellow py-16">
        <div className="site-container">
          <h2 className="section-title mb-10 text-ink">{t.what}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s) => (
              <article key={s.title} className="bg-white/40">
                <Image src={s.image} alt={s.title} width={600} height={400} className="w-full h-48 object-cover" />
                <h3 className="p-4 text-ink font-bold text-[16px]">{s.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#292929] text-white py-16">
        <div className="site-container">
          <h2 className="section-title text-white mb-10">{t.who}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {t.audiences.map((a) => (
              <article key={a.title}>
                <h3 className="text-[20px] font-bold text-white mb-3">{a.title}</h3>
                <p className="text-white/75">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <h2 className="section-title mb-10 text-ink">{t.topics}</h2>
        <Accordion items={t.topicItems} />
        <p className="mt-10 text-center text-ink">{t.custom}</p>
      </section>

      <section className="bg-[#292929] text-white py-16">
        <div className="site-container">
          <h2 className="section-title text-white mb-10">{t.testimonials}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.quotes.map((q) => (
              <blockquote key={q.name} className="bg-black/20 p-6 flex gap-5 items-start">
                <Image
                  src={q.image}
                  alt={q.name}
                  width={88}
                  height={88}
                  className="w-[88px] h-[88px] object-cover rounded-full shrink-0"
                />
                <div>
                  <p className="italic text-white/85">“{q.quote}”</p>
                  <footer className="mt-4">
                    {q.href ? (
                      <a href={q.href} target="_blank" rel="noreferrer" className="text-yellow font-semibold">
                        {q.name}
                      </a>
                    ) : (
                      <span className="text-yellow font-semibold">{q.name}</span>
                    )}
                    {q.org ? <span className="block text-white/50 font-normal text-sm">{q.org}</span> : null}
                  </footer>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16 space-y-12">
        <LogoGrid title={t.past} names={pastLogos} />
        <LogoGrid title={t.featured} names={featuredLogos} />
        <LogoGrid title={t.boards} names={boardLogos} />
      </section>
    </div>
  );
}

function LogoGrid({ title, names }: { title: string; names: string[] }) {
  return (
    <div>
      <h2 className="section-title mb-8 text-ink">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
        {names.map((name) => (
          <Image
            key={name}
            src={`/images/2024/09/${name}-150x150xc.png`}
            alt={name}
            width={120}
            height={120}
            className="mx-auto grayscale opacity-80"
          />
        ))}
      </div>
    </div>
  );
}
