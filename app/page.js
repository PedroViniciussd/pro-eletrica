import {
  FaWhatsapp,
  FaInstagram,
  FaBolt,
  FaCamera,
  FaSolarPanel,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight
} from 'react-icons/fa'

const whatsapp =
  'https://wa.me/5593984388197?text=Olá,%20vim%20pelo%20site%20da%20Pro%20Elétrica%20STM.';

const instagram = 'https://www.instagram.com/pro_eletrica_stm/';

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="electric-line electric-line-1" />
  <div className="electric-line electric-line-2" />
  <div className="electric-line electric-line-3" />
</div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
    <a href="#" aria-label="Pro Elétrica STM">
      <img
        src="/assets/logo-pro-eletrica.png"
        alt="Pro Elétrica STM"
        className="h-16 w-auto object-contain md:h-24"
      />
    </a>

    <div className="hidden items-center gap-8 text-sm font-bold text-zinc-300 md:flex">
      <a href="#" className="transition hover:text-yellow-400">
        Home
      </a>
      <a href="#servicos" className="transition hover:text-yellow-400">
        Serviços
      </a>

      <a href="#duvidas" className="transition hover:text-yellow-400">
  Dúvidas
</a>

      <a href="#contato" className="transition hover:text-yellow-400">
        Contato
      </a>

    </div>

    <div className="flex items-center gap-3">
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Pro Elétrica STM"
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-white/10
          bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400
          text-xl text-white
          transition-all duration-300
          hover:-translate-y-1 hover:scale-110
        "
      >
        <FaInstagram />
      </a>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Pro Elétrica STM"
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          bg-gradient-to-br from-green-500 to-green-400
          text-xl text-white
          shadow-[0_0_25px_rgba(34,197,94,.35)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-110
        "
      >
        <FaWhatsapp />
      </a>
    </div>
  </nav>
</header>

      <section className="relative flex min-h-screen items-center px-4 pt-32 md:px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_55%)]"></div>

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div className="relative z-10">

            <span className="
              inline-flex items-center gap-2
              rounded-full
              border border-yellow-400/20
              bg-yellow-400/10
              px-5 py-2
              text-xs font-black uppercase tracking-[.25em]
              text-yellow-400
            ">
              +10 anos de experiência
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
              Soluções elétricas e segurança para seu imóvel.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              Especialistas em elétrica residencial, energia solar, CFTV,
              alarmes e segurança eletrônica com atendimento profissional,
              instalação especializada e suporte técnico.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  bg-gradient-to-r from-yellow-400 to-yellow-300
                  px-8 py-5
                  font-black text-black
                  shadow-glow
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                Solicitar orçamento
                <FaArrowRight />
              </a>

              <a
                href="#servicos"
                className="
                  rounded-2xl
                  border border-yellow-400/20
                  bg-yellow-400/10
                  px-8 py-5
                  font-black text-yellow-400
                  transition hover:bg-yellow-400 hover:text-black
                "
              >
                Conhecer serviços
              </a>
            </div>

          </div>

          <div className="relative">

            <div className="absolute -inset-6 rounded-[40px] bg-yellow-400/10 blur-3xl"></div>

            <img
              src="/assets/hero-pro-eletrica.png"
              alt="Serviços elétricos"
              className="
                relative z-10
                rounded-[36px]
                border border-yellow-400/20
                shadow-2xl
              "
            />
          </div>
        </div>
      </section>

      <section id="servicos" className="px-4 py-24 md:px-6">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <span className="font-black uppercase tracking-[.3em] text-yellow-400">
              Serviços
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Tecnologia, proteção e eficiência.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                'Instalações Elétricas',
                'Projetos elétricos profissionais e instalações modernas.',
                <FaBolt />
              ],
              [
                'CFTV e Alarmes',
                'Monitoramento inteligente e segurança residencial.',
                <FaCamera />
              ],
              [
                'Energia Solar',
                'Economia e sustentabilidade para sua residência.',
                <FaSolarPanel />
              ],
              [
                'Segurança Eletrônica',
                'Proteção e automação para imóveis residenciais.',
                <FaShieldAlt />
              ]
            ].map(([title, desc, icon]) => (
              <article
                key={title}
                className="
                  rounded-[32px]
                  border border-yellow-400/10
                  bg-proCard
                  p-8
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/30
                  hover:shadow-glow
                "
              >

                <div className="
                  mb-6 flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-yellow-400
                  text-2xl text-black
                ">
                  {icon}
                </div>

                <h3 className="text-2xl font-black">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-6">

        <div className="
          mx-auto grid max-w-7xl gap-10
          rounded-[40px]
          border border-yellow-400/10
          bg-gradient-to-br from-yellow-400/10 to-zinc-950
          p-8 md:p-12
          lg:grid-cols-2
        ">

          <div>

            <span className="font-black uppercase tracking-[.3em] text-yellow-400">
              Experiência
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Mais de 10 anos no mercado.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              A Pro Elétrica STM é referência em elétrica residencial,
              CFTV, alarmes, energia solar e segurança eletrônica,
              oferecendo soluções modernas, atendimento profissional
              e instalações com alto padrão de qualidade.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <h3 className="text-3xl font-black text-yellow-400">
                  +10
                </h3>

                <p className="mt-2 text-zinc-400">
                  Anos de experiência
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <h3 className="text-3xl font-black text-yellow-400">
                  100%
                </h3>

                <p className="mt-2 text-zinc-400">
                  Atendimento especializado
                </p>
              </div>
            </div>
          </div>

          <img
            src="/assets/painel-solar.jpg"
            alt="Energia solar"
            className="
              h-full rounded-[32px]
              border border-yellow-400/10
              object-cover
            "
          />
        </div>
      </section>

      <section id="duvidas" className="px-4 md:py-24 pb-[5rem] md:px-6">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
    <div>
      <span className="font-black uppercase tracking-[.3em] text-yellow-400">
        Dúvidas frequentes
      </span>

      <h2 className="mt-4 text-4xl font-black md:text-5xl">
        Antes de solicitar seu orçamento
      </h2>

      <p className="mt-5 leading-8 text-zinc-400">
        Veja algumas dúvidas comuns sobre instalações elétricas, CFTV,
        alarmes e energia solar.
      </p>
    </div>

    <div className="space-y-4">
      {[
        [
          'Vocês fazem instalação elétrica residencial?',
          'Sim. A Pro Elétrica STM realiza instalações, manutenções e projetos elétricos residenciais com atendimento profissional.'
        ],
        [
          'Vocês instalam câmeras de segurança?',
          'Sim. Trabalhamos com CFTV, câmeras, alarmes e soluções de segurança eletrônica para imóveis.'
        ],
        [
          'Atendem energia solar?',
          'Sim. Também atuamos com soluções em energia solar para gerar economia e mais eficiência para o imóvel.'
        ],
        [
          'Como faço para solicitar orçamento?',
          'Você pode clicar no botão de WhatsApp e falar diretamente com a equipe para explicar sua necessidade.'
        ]
      ].map(([question, answer], index) => (
        <details
          key={question}
          className="group rounded-[28px] border border-yellow-400/10 bg-zinc-950 p-6 transition hover:border-yellow-400/30"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black">
            <span>
              <span className="mr-3 text-yellow-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              {question}
            </span>

            <span className="text-yellow-400 transition group-open:rotate-45">
              +
            </span>
          </summary>

          <p className="mt-5 leading-8 text-zinc-400">
            {answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>

     <section id="contato" className="relative h-[75vh] overflow-hidden">

        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Santarém+PA&output=embed"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-end px-4 pb-10 md:px-6">

          <div className="mx-auto w-full max-w-7xl">

            <div className="
              max-w-xl
              rounded-[32px]
              border border-yellow-400/20
              bg-black/80
              p-8
              backdrop-blur-xl
            ">

              <div className="flex items-center gap-3 text-yellow-400">
                <FaMapMarkerAlt />
                <span className="font-bold">
                  Santarém - PA
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-black">
                Atendimento profissional e especializado.
              </h2>

              <div className="mt-6 flex items-center gap-3 text-zinc-300">
                <FaClock className="text-yellow-400" />
                <span>
                  Segunda a sexta: 07h às 17h30 • Sábado: 07h às 12h
                </span>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8 inline-flex items-center gap-3
                  rounded-2xl
                  bg-gradient-to-r from-yellow-400 to-yellow-300
                  px-8 py-5
                  font-black text-black
                  shadow-glow
                "
              >
                <FaWhatsapp />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="
        border-t border-white/10
        px-4 py-10
        text-center text-sm text-zinc-500
      ">

        <p>
          Pro Elétrica STM — Referência em elétrica e CFTV.
        </p>

        <p className="mt-3">
          Desenvolvido por{' '}

          <a
            href="https://kinkajoudev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-yellow-400"
          >
            Kinkajou Dev
          </a>
        </p>
      </footer>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-5 right-5 z-[999]
          flex h-16 w-16 items-center justify-center
          rounded-full
          bg-gradient-to-br from-green-500 to-green-400
          text-3xl text-white
          shadow-[0_0_35px_rgba(34,197,94,.45)]
          transition-all duration-300
          hover:scale-110
        "
      >
        <FaWhatsapp />
      </a>

    </main>
  )
}
