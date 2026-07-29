"use client";

import { useEffect, useRef, useState } from "react";

const studentArea = "https://maturidade.igrejamananciais.com.br/";
const heroVideoParts = Array.from({ length: 14 }, (_, index) =>
  `/media/hero/part-${String(index).padStart(2, "0")}`,
);
const institutionalVideoParts = Array.from({ length: 16 }, (_, index) =>
  `/media/institucional/part-${String(index).padStart(2, "0")}`,
);

const subjects = [
  "Plano de Redenção",
  "Deus Residente",
  "Espírito, Alma e Corpo",
  "Transformação da Alma",
  "Caráter de Cristo",
  "Andando no Espírito",
  "Disciplinas Espirituais",
  "Batismo",
  "Santa Ceia",
  "Primícias, Dízimos e Ofertas",
  "A Importância de Congregar",
  "Serviço Cristão",
  "Paternidade Espiritual",
  "Ser e Fazer Discípulos",
];

const faqs = [
  {
    question: "Qual a idade mínima de participação?",
    answer:
      "14 anos. Menores de 18 anos devem ter a permissão dos pais e seguir os mesmos requisitos de participação que os demais alunos.",
  },
  {
    question: "Qual a duração do CME?",
    answer:
      "O curso tem duração média de 5 meses. As aulas ocorrem toda segunda-feira à noite, com o louvor iniciando às 19h40 e a aula às 20h. A turma do segundo semestre de 2026 está prevista para iniciar em agosto e terminar em dezembro.",
  },
  {
    question: "Qual o formato do curso?",
    answer:
      "O currículo conta com matérias presenciais e online. Todos os alunos recebem acesso à plataforma de ensino. As matérias presenciais também ficam disponíveis na plataforma para reposição de faltas ou revisão.",
  },
  {
    question: "Qual o horário e local das aulas presenciais?",
    answer:
      "As aulas ocorrem toda segunda-feira à noite, na igreja local. A chegada é a partir de 19h30, o louvor começa às 19h40 e a aula às 20h, com previsão de término até às 22h. Não é permitida a entrada de acompanhantes, crianças ou bebês de colo no salão durante as aulas.",
  },
  {
    question: "Posso fazer o curso online?",
    answer:
      "Não. A participação presencial é essencial para o melhor aproveitamento e aprendizado do conteúdo. O número exato de faltas permitidas será informado no início da turma, após a definição do calendário.",
  },
  {
    question: "O que acontece se eu faltar uma aula?",
    answer:
      "O aluno que faltar, estando dentro do número de faltas permitidas, deverá assistir e confirmar a aula pela plataforma de ensino para completar 100% do conteúdo.",
  },
  {
    question: "Trabalho em escala, embarcado ou viajo com frequência. Posso participar?",
    answer:
      "Alunos com demandas recorrentes de trabalho que impossibilitem a participação em 70% das aulas devem escrever para coordenacaocme@igrejamananciais.com.br e solicitar participação em 50% das aulas. A exceção se aplica somente a casos recorrentes em que outra turma também seria impactada.",
  },
  {
    question: "Qual o investimento para participar?",
    answer:
      "Há uma inscrição de R$ 100,00, aplicada ao primeiro mês de aulas, e parcelas mensais de R$ 100,00 de março a junho.",
  },
  {
    question: "O CME oferece desconto para famílias?",
    answer:
      "Cônjuges, pais e filhos menores de idade que compartilham a mesma renda familiar e cursam juntos para obter o certificado podem indicar essa informação no formulário e pagar R$ 80,00 cada nas mensalidades de março a junho.",
  },
  {
    question: "Como posso me inscrever?",
    answer:
      "Acesse a área AGENDA do APP MNCS e selecione INSCRIÇÕES CME 2026.2, seguindo as instruções até a finalização do ticket. Faça a inscrição somente pelo seu próprio cadastro. Em caso de dificuldade, procure seu Facilitador de Rede.",
  },
  {
    question: "Participei de outra turma. Devo me inscrever?",
    answer:
      "Se você completou todo o conteúdo em outra turma e recebeu o certificado, pode se inscrever para o Pacote Formados CME.",
  },
  {
    question: "A inscrição aparece como esgotada. As vagas acabaram?",
    answer:
      "Só é possível realizar uma inscrição por cadastro. Depois da inscrição, o APP mostra “ESGOTADO” para aquele membro, mas as vagas permanecem disponíveis para outros membros ainda não inscritos.",
  },
  {
    question: "Ainda tenho uma dúvida. Como falar com a equipe?",
    answer:
      "Escreva para inscricoescme@gmail.com com seu nome completo e sua dúvida. A resposta chega em até 2 dias úteis. Não deixe de verificar a caixa de spam.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ChunkedVideo({
  parts,
  className,
  autoLoad = false,
  background = false,
  showSoundControl = false,
}: {
  parts: string[];
  className?: string;
  autoLoad?: boolean;
  background?: boolean;
  showSoundControl?: boolean;
}) {
  const [source, setSource] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const loadVideo = async () => {
    if (source || loading) return;
    setLoading(true);
    try {
      const buffers = await Promise.all(
        parts.map(async (part) => {
          const response = await fetch(part);
          if (!response.ok) throw new Error("Não foi possível carregar o vídeo.");
          return response.arrayBuffer();
        }),
      );
      setSource(URL.createObjectURL(new Blob(buffers, { type: "video/mp4" })));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoLoad) void loadVideo();
    // O carregamento automático acontece somente na montagem.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoLoad]);

  useEffect(
    () => () => {
      if (source) URL.revokeObjectURL(source);
    },
    [source],
  );

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        src={source}
        autoPlay={background || showSoundControl || Boolean(source)}
        muted={background || showSoundControl ? muted : false}
        loop={background || showSoundControl}
        controls={!background && Boolean(source)}
        playsInline
        preload="none"
        poster="/images/encerramento.jpg"
        aria-hidden={background ? "true" : undefined}
        aria-label={background ? undefined : "Vídeo institucional do Curso de Maturidade no Espírito"}
      >
        Seu navegador não oferece suporte à reprodução de vídeo.
      </video>
      {!background && !showSoundControl && !source && (
        <button className="video-load" type="button" onClick={() => void loadVideo()} disabled={loading}>
          <span aria-hidden="true">{loading ? "…" : "▶"}</span>
          {loading ? "Carregando vídeo" : "Assistir ao vídeo institucional"}
          <small>O vídeo será carregado somente agora</small>
        </button>
      )}
      {showSoundControl && (
        <button
          className="sound-toggle"
          type="button"
          disabled={!source}
          aria-pressed={!muted}
          onClick={() => {
            const nextMuted = !muted;
            setMuted(nextMuted);
            if (videoRef.current) videoRef.current.muted = nextMuted;
          }}
        >
          <span aria-hidden="true">{muted ? "◌" : "◉"}</span>
          {source ? (muted ? "Ativar som" : "Desativar som") : "Carregando"}
        </button>
      )}
    </>
  );
}

function CountUp() {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(10000);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - started) / 1500, 1);
          setValue(Math.round(10000 * (1 - Math.pow(1 - progress, 4))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>+{value.toLocaleString("pt-BR")}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveals = document.querySelectorAll(
      "[data-reveal], .subject-grid li, .steps article, .requirements-list article, .keywords span",
    );
    reveals.forEach((item, index) => {
      (item as HTMLElement).style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    reveals.forEach((item) => observer.observe(item));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Curso de Maturidade — início">
          <img src="/images/logo-curso.png" alt="" width="56" height="56" />
          <span>MATURIDADE<br /><small>NO ESPÍRITO</small></span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <b className="sr-only">Menu</b>
        </button>
        <nav id="main-nav" className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          {[
            ["Sobre", "#sobre"],
            ["Matérias", "#materias"],
            ["Como funciona", "#como-funciona"],
            ["Perguntas frequentes", "#faq"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={studentArea} target="_blank" rel="noreferrer">
            Área do aluno <Arrow />
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <ChunkedVideo parts={heroVideoParts} className="hero-video" autoLoad background />
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Curso de Maturidade no Espírito</p>
              <h1>Conheça a Palavra.<br /><em>Desenvolva sua</em><br /><em>vida</em> no Espírito.</h1>
              <p className="hero-lead">
                Um caminho de conhecimento, transformação e crescimento que torna princípios e valores bíblicos acessíveis à vida cotidiana.
              </p>
              <div className="button-row">
                <a className="button button-light" href="#sobre">Conheça o curso <span>↓</span></a>
                <a className="text-link" href={studentArea} target="_blank" rel="noreferrer">
                  Acessar área do aluno <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-stat">
              <strong>+10 mil</strong>
              <span>alunos formados</span>
            </div>
          </div>
          <div className="scroll-note"><span /> Continue para descobrir</div>
        </section>

        <section className="intro section-pad" id="sobre">
          <div className="section-label" data-reveal><span>01</span> Sobre o curso</div>
          <div className="intro-grid">
            <h2 data-reveal>Ensino que produz<br /><em>vida e transformação.</em></h2>
            <div className="intro-copy" data-reveal>
              <p>
                Um dos pilares da Igreja Mananciais é o ensino da Palavra. Por isso, com o objetivo de liberar recursos que possibilitem o desenvolvimento da vida cristã, o Curso de Maturidade no Espírito foi implantado.
              </p>
              <p>
                O curso é um caminho prático para compreender e desenvolver ensinos e valores bíblicos, trazendo clareza à Palavra de Deus e despertando a realidade de uma vida no Espírito no cotidiano.
              </p>
            </div>
          </div>
          <div className="editorial-photo" data-reveal>
            <img src="/images/encerramento.jpg" alt="Grande turma reunida após a conclusão do Curso de Maturidade" width="2995" height="805" loading="lazy" />
            <blockquote>“Conhecimento da Palavra para uma vida no Espírito.”</blockquote>
          </div>
          <div className="keywords" data-reveal>
            {["Palavra", "Espírito", "Crescimento", "Comunidade"].map((word, i) => (
              <span key={word}><b>0{i + 1}</b>{word}</span>
            ))}
          </div>
        </section>

        <section className="institutional-video section-pad" aria-labelledby="video-title">
          <div className="section-label light" data-reveal><span>02</span> Conheça o CME</div>
          <div className="video-showcase">
            <div className="video-heading">
              <h2 id="video-title" data-reveal>Mais que um curso.<br /><em>Uma jornada<br />de maturidade.</em></h2>
            </div>
            <div className="video-frame" data-reveal>
              <ChunkedVideo parts={institutionalVideoParts} autoLoad showSoundControl />
            </div>
          </div>
        </section>

        <section className="impact">
          <div className="impact-inner" data-reveal>
            <p>Uma história que continua crescendo</p>
            <div className="big-number"><CountUp /></div>
            <h2>alunos formados no<br />Curso de Maturidade no Espírito</h2>
          </div>
        </section>

        <section className="subjects section-pad" id="materias">
          <div className="section-label" data-reveal><span>02</span> Matérias</div>
          <div className="subjects-heading">
            <h2 data-reveal>Uma jornada de<br /><em>crescimento e transformação.</em></h2>
            <p data-reveal>Conheça os ensinamentos que formam a base do Curso de Maturidade no Espírito.</p>
          </div>
          <ol className="subject-grid" data-reveal>
            {subjects.map((subject, index) => (
              <li key={subject}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{subject}</h3>
                <b aria-hidden="true">↗</b>
              </li>
            ))}
          </ol>
        </section>

        <section className="how section-pad" id="como-funciona">
          <div className="section-label light" data-reveal><span>03</span> Como funciona</div>
          <div className="how-heading">
            <h2 data-reveal>Formação bíblica.<br /><em>Vivência prática.</em></h2>
            <p data-reveal>Uma experiência de ensino que acontece em comunidade e continua na plataforma.</p>
          </div>
          <div className="steps" data-reveal>
            {[
              ["01", "5 meses", "Duração média para percorrer toda a formação."],
              ["02", "Segundas-feiras", "Encontros presenciais à noite, na igreja local."],
              ["03", "Plataforma de apoio", "Conteúdos disponíveis para reposição e revisão das aulas."],
              ["04", "Palavra e prática", "Formação baseada em conteúdo bíblico e vida cotidiana."],
            ].map(([n, title, text]) => (
              <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <p className="presence-note" data-reveal>
            <span>Importante</span> A participação presencial faz parte da experiência. O curso não é realizado exclusivamente online.
          </p>
        </section>

        <section className="requirements section-pad">
          <div className="section-label" data-reveal><span>04</span> Pré-requisitos</div>
          <div className="requirements-grid">
            <h2 data-reveal>Antes de<br /><em>começar.</em></h2>
            <div className="requirements-list" data-reveal>
              <article><span>01</span><h3>Ter no mínimo<br />14 anos</h3></article>
              <article><span>02</span><h3>Ser membro ativo da<br />Igreja Mananciais</h3></article>
              <p>Menores de 18 anos devem possuir autorização dos responsáveis.</p>
            </div>
          </div>
        </section>

        <section className="platform">
          <div className="platform-pattern" aria-hidden="true" />
          <div className="platform-copy" data-reveal>
            <p className="eyebrow">Para alunos já inscritos</p>
            <h2>Continue sua jornada<br /><em>de crescimento.</em></h2>
            <p>Acesse suas aulas, acompanhe os conteúdos disponíveis e continue avançando no Curso de Maturidade no Espírito.</p>
            <a className="button button-light" href={studentArea} target="_blank" rel="noreferrer">
              Acessar plataforma de ensino <Arrow />
            </a>
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="section-label" data-reveal><span>05</span> Perguntas frequentes</div>
          <div className="faq-grid">
            <div>
              <h2 data-reveal>Tudo o que você<br /><em>precisa saber.</em></h2>
              <p data-reveal>Informações da turma atual podem ser atualizadas pela coordenação.</p>
            </div>
            <div className="accordion" data-reveal>
              {faqs.map((item, index) => (
                <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={item.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? null : index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-question-text">{item.question}</span>
                    <b aria-hidden="true">+</b>
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={openFaq !== index}>
                    <div><p>{item.answer}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-photo" aria-hidden="true" />
          <blockquote data-reveal>
            <span>“</span>
            O Reino dos Céus é semelhante a um grão de mostarda que um homem tomou e plantou em seu campo. Embora seja a menor de todas as sementes, quando cresce, torna-se a maior das hortaliças e se transforma em árvore, de modo que as aves do céu vêm fazer os seus ninhos em seus ramos.
            <cite>Mateus 13:31–32</cite>
          </blockquote>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <img src="/images/logo-mananciais.png" alt="Igreja Mananciais" width="255" height="40" />
          <p>Uma igreja que ama a Deus,<br />ama pessoas e transforma cidades.</p>
          <div className="footer-links">
            <a href={studentArea} target="_blank" rel="noreferrer">Área do aluno <Arrow /></a>
            <a href="https://www.igrejamananciais.com.br/politica-de-privacidade" target="_blank" rel="noreferrer">Política de privacidade <Arrow /></a>
            <a href="https://www.instagram.com/igrejamananciais/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
            <a href="https://www.youtube.com/@IgrejaMananciais" target="_blank" rel="noreferrer">YouTube <Arrow /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Igreja Mananciais. Todos os direitos reservados.</span>
          <span>Rua Augusto Camossa Saldanha, 607 · Barra da Tijuca, RJ · (21) 2437-7695</span>
        </div>
      </footer>
    </>
  );
}
