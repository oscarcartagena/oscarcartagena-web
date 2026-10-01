import Image from "next/image";
import Link from "next/link";
import type { Locale, Post } from "@/lib/content";
import { decodeEntities } from "@/lib/content";

const copy = {
  en: {
    tagline:
      "Seasoned Business Developer and serial Entrepreneur.\nXR industry leader, consultant & speaker. Artist, Musician & Dj.",
    book: "Book a call",
    who: "¿WHO AM I?",
    p1: (
      <>
        With 27 years of experience in technocreative industries, I navigate the waters of
        disruptive emerging technologies, creating innovative solutions in{" "}
        <a href="https://posterity.cl/" className="text-ink font-semibold underline-offset-2 hover:underline">
          art
        </a>
        ,{" "}
        <a href="https://augexp.com/" className="text-ink font-semibold underline-offset-2 hover:underline">
          advertising
        </a>
        ,{" "}
        <a href="https://multiversica.com/" className="text-ink font-semibold underline-offset-2 hover:underline">
          education
        </a>
        , and{" "}
        <a href="https://nvivo.cl/" className="text-ink font-semibold underline-offset-2 hover:underline">
          events
        </a>
        . I contribute to the local chilean XR industry by founding and presiding over the{" "}
        <a href="https://achex.org/" className="text-ink font-semibold underline-offset-2 hover:underline">
          Chilean Association of Immersive Experiences (ACHEX A.G.)
        </a>{" "}
        and actively collaborating on various thematic panels at the Laboratory of Artificial
        Intelligence, Neuro-rights, Digital Platforms, and the Metaverse (LIANM), where we discuss
        regulatory frameworks and public policy proposals for the productive development of
        emerging technology industries.
      </>
    ),
    p2: "Internationally, I collaborate as an advisor and regional liaison in multiple initiatives such as X Reality Safety Intelligence (XRSI), Women of the Future, AIXR, and AWE XR, among others.",
    p3: "A distinguished bilingual speaker and panel moderator for digital and in-person events.",
    linkedin: "Want to know more? go to my LinkedIn",
    mentoring: "MENTORING",
    mentoringBody: "Through ADPList you can schedule 1-on-1 mentoring sessions with me for free.",
    initiatives: "MY INITIATIVES",
    conexion: "CONEXIÓN LATINA",
    conexionBody:
      "A segment on the video podcast 'Puerto Zero,' a program by Real o Virtual.com from Spain. The segment focused on promoting and positioning the Latin American XR industry for the Ibero-American audience.",
    awards: "AWARDS",
    cruda: "LA CRUDA EXPERIENCIA",
    crudaBody:
      "A podcast created with Roy Zderich to discuss topics related to entrepreneurship, technology, and experience as transferable knowledge.",
    blog: "FROM THE BLOG",
    more: "Leer más",
    orto: "ORTOKORE",
    ortoBody:
      "Drummer, bassist, DJ, and electronic music producer for over 18 years. During that time, I performed on major stages and platforms, at festivals and venues (both national and international).",
    awardsItems: [
      {
        title: "ACHAP 2005",
        body: "Silver in 'Hot Sites'\nClient: Coca-Cola Light\nAgency: Digitalmente, Chile\nRole: Flash Developer",
        image: "/images/2021/04/achap-premio.jpg",
      },
      {
        title: "PROMAX BDA 2005",
        body: "Silver in 'Corporate Image'\nClient: SPE Networks\nAgency: La Casa del Diseño, Venezuela\nRole: Director Multimedia",
        image: "/images/2021/04/promax.jpg",
      },
      {
        title: "PROMAX BDA 2007",
        body: "Silver in 'Corporate Image'\nClient: SPE Networks\nAgency: Magenta Networks, NYC , USA\nRole: Director Multimedia",
        image: "/images/2021/04/promax.jpg",
      },
      {
        title: "PROMAX BDA 2008",
        body: "Bronze in 'Corporate Image'\nClient: SPE Networks\nAgency: La Casa del Diseño, Venezuela\nRole: Director Multimedia",
        image: "/images/2021/04/promax.jpg",
      },
    ],
    cards: [
      {
        image: "/images/2023/09/xrsi-logo.png",
        title: "XRSI LATAM Region Liaison",
        href: "https://xrsi.org/team#advisors-11",
      },
      {
        image: "/images/2023/09/wotf.png",
        title: "Women of the Future LATAM Board of Trustees",
        href: "https://womenofthefuture.com/latin-america-vol-1/",
      },
      {
        image: "/images/2023/10/lianm-logo.png",
        title: "Head coordinator for the Immersive Technologies and future metaverse of the LIANM",
        href: "https://congresofuturo.cl/",
      },
      {
        image: "/images/2023/10/crtic-logo.png",
        title: "CRT+IC Strategic Advisory member for CRTIC",
        href: "https://www.crtic.cl/consejo-asesor",
      },
      {
        image: "/images/2023/10/sup.png",
        title: "Start-up Chile Generation 17 (Dj Profile TV)",
      },
      {
        image: "/images/2023/10/devday.png",
        title: "Unity Developer Day 2018 Local showcase exhibitor with Posterity AR",
      },
      {
        image: "/images/2023/10/adwords-cert.png",
        title: "Google Adwords Certified September 2017",
      },
      {
        image: "/images/2023/10/etapacero.png",
        title: "Etapa0 2nd Generation Etapa0 of ASECH",
      },
    ],
  },
  es: {
    tagline:
      "Emprendedor serial. Líder de industria, consultor y conferencista. Músico, productor y Dj.",
    book: "Agenda una llamada",
    who: "¿QUIÉN SOY?",
    p1: (
      <>
        Con 27 años de experiencia en la industrias tecno- creativas, navego las aguas de las
        tecnologías emergentes disruptivas creando soluciones innovadoras en el{" "}
        <a href="https://posterity.cl/" className="text-ink font-semibold underline-offset-2 hover:underline">
          arte
        </a>
        , la{" "}
        <a href="https://augexp.com/" className="text-ink font-semibold underline-offset-2 hover:underline">
          publicidad
        </a>
        ,{" "}
        <a href="https://multiversica.com/" className="text-ink font-semibold underline-offset-2 hover:underline">
          educación
        </a>{" "}
        y{" "}
        <a href="https://nvivo.cl/" className="text-ink font-semibold underline-offset-2 hover:underline">
          eventos
        </a>
        . Aporto a la industria nacional a través de fundar y presidir a la Asociación Chilena de
        Experiencias Inmersivas ACHEX A.G. y colaborar activamente en distintas mesas temáticas en
        el Laboratorio de Inteligencia Artificial, Neuroderechos, Plataformas Digitales y Metaverso
        (LIANM), donde discutimos marcos regulatorios y propuestas de políticas públicas para el
        desarrollo productivo de las industrias de tecnologías emergentes.
      </>
    ),
    p2: "Internacionalmente colaboro como asesor y enlace regional en múltiples iniciativas como X Reality Safety Intelligence (XRSI), Women of the Future, AIXR y AWE XR, entre otras.",
    p3: "Destacado speaker bilingüe y moderador de panel para eventos digitales y presenciales.",
    linkedin: "¿Quieres saber más? ve a mi LinkedIn",
    mentoring: "MENTORÍAS",
    mentoringBody: "A través de ADPList puedes agendar mentorías gratuitas 1-a-1 conmigo.",
    initiatives: "MIS INICIATIVAS",
    conexion: "CONEXIÓN LATINA",
    conexionBody:
      "Sección en videopodcast «Puerto Zero», un programa de Real o Virtual.com de España. La sección estuvo enfocada en la difusión y posicionamiento de la industria XR de Latinoamérica para el público iberoamericano.",
    awards: "PREMIOS",
    cruda: "LA CRUDA EXPERIENCIA",
    crudaBody:
      "Un podcast creado con Roy Zderich para conversar sobre emprendimiento, tecnología y la experiencia como conocimiento transferible.",
    blog: "DESDE EL BLOG",
    more: "Leer más",
    orto: "ORTOKORE",
    ortoBody:
      "Baterista, bajista, DJ y productor de música electrónica por más de 18 años. En ese tiempo me presenté en grandes escenarios y plataformas, en festivales y recintos (nacionales e internacionales).",
    awardsItems: [
      {
        title: "ACHAP 2005",
        body: "Plata en 'Hot Sites'\nCliente: Coca-Cola Light\nAgencia: Digitalmente, Chile\nCargo: Flash Developer",
        image: "/images/2021/04/achap-premio.jpg",
      },
      {
        title: "PROMAX BDA 2005",
        body: "Plata en 'Corporate Image'\nCliente: SPE Networks\nAgencia: La Casa del Diseño, Venezuela\nCargo: Director Multimedia",
        image: "/images/2021/04/promax.jpg",
      },
      {
        title: "PROMAX BDA 2007",
        body: "Plata en 'Corporate Image'\nCliente: SPE Networks\nAgencia: Magenta Networks, NYC , USA\nCargo: Director Multimedia",
        image: "/images/2021/04/promax.jpg",
      },
      {
        title: "PROMAX BDA 2008",
        body: "Bronce en 'Corporate Image'\nCliente: SPE Networks\nAgencia: La Casa del Diseño, Venezuela\nCargo: Director Multimedia",
        image: "/images/2021/04/promax.jpg",
      },
    ],
    cards: [
      {
        image: "/images/2023/09/xrsi-logo.png",
        title: "XRSI LATAM Region Liaison",
        href: "https://xrsi.org/team#advisors-11",
      },
      {
        image: "/images/2023/09/wotf.png",
        title: "Women of the Future LATAM Board of Trustees",
        href: "https://womenofthefuture.com/latin-america-vol-1/",
      },
      {
        image: "/images/2023/10/lianm-logo.png",
        title: "Dirección de subcomisión de Tecnologías Inmersivas y Futuro Metaverso del LIANM",
        href: "https://congresofuturo.cl/",
      },
      {
        image: "/images/2023/10/crtic-logo.png",
        title: "Consejero estratégico CRT+IC",
        href: "https://www.crtic.cl/consejo-asesor",
      },
      {
        image: "/images/2023/10/sup.png",
        title: "Start-up Chile Generation 17 (Dj Profile TV)",
      },
      {
        image: "/images/2023/10/devday.png",
        title: "Unity Developer Day 2018 Seleccionado Local Showcase",
      },
      {
        image: "/images/2023/10/adwords-cert.png",
        title: "Google Adwords Certified Septiembre 2017",
      },
      {
        image: "/images/2023/10/etapacero.png",
        title: "Etapa0 2nda generación Etapa0 de ASECH",
      },
    ],
  },
};

const initiatives = [
  { src: "/images/2023/09/achex.png", href: "https://achex.org/", alt: "ACHEX" },
  { src: "/images/2021/04/augexp.png", href: "https://augexp.com/", alt: "Augmented Experiences" },
  { src: "/images/2021/04/posterity.png", href: "https://posterity.cl/", alt: "Posterity" },
  { src: "/images/2021/04/nvivo.png", href: "https://nvivo.cl/", alt: "NVIVO" },
  { src: "/images/2023/09/multiversica.png", href: "https://multiversica.com/", alt: "Multiversica" },
];

export default function HomePage({ locale, posts }: { locale: Locale; posts: Post[] }) {
  const t = copy[locale];

  return (
    <div className="bg-paper">
      <section className="bg-yellow min-h-[min(990px,calc(100vh-83px))] flex items-center">
        <div className="site-container w-full py-16 md:py-24 flex justify-end">
          <div className="max-w-[640px] text-right">
            <Image
              src="/images/2024/09/oscarsign.png"
              alt="Oscar Cartagena"
              width={687}
              height={187}
              className="ml-auto w-full max-w-[520px]"
              priority
            />
            <p className="mt-8 text-[22px] md:text-[26px] leading-snug text-ink font-medium whitespace-pre-line">
              {t.tagline}
            </p>
            <a
              href="https://calendly.com/augexp/oscartagena"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-10 rounded-full bg-coral text-white font-bold uppercase tracking-[2px] text-[14px] px-12 py-3 hover:opacity-90"
            >
              {t.book}
            </a>
          </div>
        </div>
      </section>

      <section id="quien-soy" className="site-container pt-16 pb-6">
        <h1 className="section-title text-ink">{t.who}</h1>
      </section>

      <section className="site-container pb-10 grid gap-10 lg:grid-cols-[1fr_280px] items-start">
        <div className="text-[18px] leading-[1.85] space-y-6">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <a
            href="https://linkedin.com/in/oscarcartagena"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-coral text-white text-[14px] px-5 py-2.5"
          >
            {t.linkedin}
          </a>
        </div>
        <div className="relative min-h-[520px] hidden lg:block">
          <Image
            src="/images/2024/03/congreso-futuro-charla-oscar.png"
            alt=""
            fill
            className="object-cover object-left"
            sizes="280px"
          />
        </div>
      </section>

      <section className="site-container grid grid-cols-2 md:grid-cols-4 gap-8 pb-16">
        {t.cards.map((card) => (
          <AffiliationCard key={card.image} {...card} more={t.more} />
        ))}
      </section>

      <section
        className="relative text-white py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('/images/2024/07/2024-07-10-19.08.18.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="site-container">
          <h2 className="section-title text-white">{t.mentoring}</h2>
          <p className="mt-3 mb-8 text-white/95">{t.mentoringBody}</p>
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl mx-auto min-h-[420px]">
            <iframe
              title="ADPList"
              src="https://adplist.org/widgets/booking?src=oscar-cartagena-lagos"
              className="w-full h-[520px] border-0"
            />
          </div>
        </div>
      </section>

      <section id="que-he-hecho" className="site-container py-14">
          <h2 className="section-title mb-10 text-ink">{t.initiatives}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {initiatives.map((item) => (
            <a key={item.src} href={item.href} target="_blank" rel="noreferrer" className="grid place-items-center">
              <Image src={item.src} alt={item.alt} width={180} height={180} className="object-contain" />
            </a>
          ))}
        </div>
      </section>

      <section
        className="relative text-white py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('/images/2021/04/puerto-zero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="site-container grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="section-title text-white">{t.conexion}</h2>
            <p className="mt-4 max-w-xl">{t.conexionBody}</p>
          </div>
          <iframe
            title="Conexión Latina"
            src="https://www.youtube.com/embed/Q3bb70ohm8k"
            className="w-full aspect-video border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="site-container py-14">
        <h2 className="section-title mb-10 text-ink">{t.awards}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.awardsItems.map((award) => (
            <article key={award.title} className="text-center">
              <Image
                src={award.image}
                alt={award.title}
                width={280}
                height={280}
                className="mx-auto mb-4 object-contain"
              />
              <h4 className="text-[14px] font-extrabold text-ink">{award.title}</h4>
              <p className="mt-2 text-[13px] whitespace-pre-line leading-relaxed">{award.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-16">
        <div className="site-container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title text-white">{t.cruda}</h2>
            <p className="mt-4 max-w-xl text-white/80">{t.crudaBody}</p>
          </div>
          <iframe
            title="La Cruda Experiencia"
            src="https://open.spotify.com/embed-podcast/show/7g6je46A65DmSqYQrCVuLw"
            className="w-full min-h-[232px] border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </section>

      <section className="bg-yellow py-16">
        <div className="site-container">
          <h2 className="section-title mb-10 text-ink">{t.blog}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {posts.slice(0, 4).map((post) => (
              <article key={post.id} className="bg-transparent">
                <Link href={`${post.linkPath}/`} className="block">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={decodeEntities(post.title)}
                      width={920}
                      height={520}
                      className="w-full h-[220px] object-cover mb-4"
                    />
                  ) : null}
                  <h3 className="text-[18px] font-bold text-ink uppercase leading-snug">
                    {decodeEntities(post.title)}
                  </h3>
                </Link>
                <p className="mt-1 text-[13px] text-ink/70">
                  {locale === "en" ? "Blog English" : "Blog Español"}
                </p>
                <p className="mt-3 text-[15px] text-ink/80 line-clamp-3">{post.excerpt}</p>
                <Link href={`${post.linkPath}/`} className="inline-block mt-3 text-coral font-semibold">
                  {t.more}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 text-white"
        style={{
          backgroundImage: "url('/images/2021/04/ortobackground.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="site-container grid lg:grid-cols-[220px_1fr_1fr] gap-8 items-center">
          <Image src="/images/2021/04/OrtoKore-logo.png" alt="OrtoKore" width={180} height={232} />
          <div>
            <h2 className="section-title text-white">{t.orto}</h2>
            <p className="mt-4 text-white/90">{t.ortoBody}</p>
          </div>
          <iframe
            title="OrtoKore on Spotify"
            src="https://open.spotify.com/embed/artist/5iaEGUDjuo3S8IMz7INj2Q"
            className="w-full min-h-[352px] border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </section>
    </div>
  );
}

function AffiliationCard({
  image,
  title,
  href,
  more,
}: {
  image: string;
  title: string;
  href?: string;
  more: string;
}) {
  const inner = (
    <div className="affiliation-card relative aspect-square grid place-items-center p-4">
      <Image src={image} alt={title} width={220} height={220} className="object-contain max-h-[160px] w-auto h-auto" />
      <div className="affiliation-overlay absolute inset-0 bg-black/70 text-white opacity-0 transition-opacity p-4 flex flex-col justify-end">
        <p className="text-sm font-semibold leading-snug">{title}</p>
        {href ? <span className="mt-2 text-coral text-sm">{more}</span> : null}
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  );
}
