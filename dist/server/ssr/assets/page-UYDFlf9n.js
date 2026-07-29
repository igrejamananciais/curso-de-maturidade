import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var studentArea = "https://maturidade.igrejamananciais.com.br/";
var heroVideoParts = Array.from({ length: 14 }, (_, index) => `/media/hero/part-${String(index).padStart(2, "0")}`);
var institutionalVideoParts = Array.from({ length: 16 }, (_, index) => `/media/institucional/part-${String(index).padStart(2, "0")}`);
var subjects = [
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
	"Ser e Fazer Discípulos"
];
var faqs = [
	{
		question: "Qual a idade mínima de participação?",
		answer: "14 anos. Menores de 18 anos devem ter a permissão dos pais e seguir os mesmos requisitos de participação que os demais alunos."
	},
	{
		question: "Qual a duração do CME?",
		answer: "O curso tem duração média de 5 meses. As aulas ocorrem toda segunda-feira à noite, com o louvor iniciando às 19h40 e a aula às 20h. A turma do segundo semestre de 2026 está prevista para iniciar em agosto e terminar em dezembro."
	},
	{
		question: "Qual o formato do curso?",
		answer: "O currículo conta com matérias presenciais e online. Todos os alunos recebem acesso à plataforma de ensino. As matérias presenciais também ficam disponíveis na plataforma para reposição de faltas ou revisão."
	},
	{
		question: "Qual o horário e local das aulas presenciais?",
		answer: "As aulas ocorrem toda segunda-feira à noite, na igreja local. A chegada é a partir de 19h30, o louvor começa às 19h40 e a aula às 20h, com previsão de término até às 22h. Não é permitida a entrada de acompanhantes, crianças ou bebês de colo no salão durante as aulas."
	},
	{
		question: "Posso fazer o curso online?",
		answer: "Não. A participação presencial é essencial para o melhor aproveitamento e aprendizado do conteúdo. O número exato de faltas permitidas será informado no início da turma, após a definição do calendário."
	},
	{
		question: "O que acontece se eu faltar uma aula?",
		answer: "O aluno que faltar, estando dentro do número de faltas permitidas, deverá assistir e confirmar a aula pela plataforma de ensino para completar 100% do conteúdo."
	},
	{
		question: "Trabalho em escala, embarcado ou viajo com frequência. Posso participar?",
		answer: "Alunos com demandas recorrentes de trabalho que impossibilitem a participação em 70% das aulas devem escrever para coordenacaocme@igrejamananciais.com.br e solicitar participação em 50% das aulas. A exceção se aplica somente a casos recorrentes em que outra turma também seria impactada."
	},
	{
		question: "Qual o investimento para participar?",
		answer: "Há uma inscrição de R$ 100,00, aplicada ao primeiro mês de aulas, e parcelas mensais de R$ 100,00 de março a junho."
	},
	{
		question: "O CME oferece desconto para famílias?",
		answer: "Cônjuges, pais e filhos menores de idade que compartilham a mesma renda familiar e cursam juntos para obter o certificado podem indicar essa informação no formulário e pagar R$ 80,00 cada nas mensalidades de março a junho."
	},
	{
		question: "Como posso me inscrever?",
		answer: "Acesse a área AGENDA do APP MNCS e selecione INSCRIÇÕES CME 2026.2, seguindo as instruções até a finalização do ticket. Faça a inscrição somente pelo seu próprio cadastro. Em caso de dificuldade, procure seu Facilitador de Rede."
	},
	{
		question: "Participei de outra turma. Devo me inscrever?",
		answer: "Se você completou todo o conteúdo em outra turma e recebeu o certificado, pode se inscrever para o Pacote Formados CME."
	},
	{
		question: "A inscrição aparece como esgotada. As vagas acabaram?",
		answer: "Só é possível realizar uma inscrição por cadastro. Depois da inscrição, o APP mostra “ESGOTADO” para aquele membro, mas as vagas permanecem disponíveis para outros membros ainda não inscritos."
	},
	{
		question: "Ainda tenho uma dúvida. Como falar com a equipe?",
		answer: "Escreva para inscricoescme@gmail.com com seu nome completo e sua dúvida. A resposta chega em até 2 dias úteis. Não deixe de verificar a caixa de spam."
	}
];
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		children: "↗"
	});
}
function ChunkedVideo({ parts, className, autoLoad = false, background = false, showSoundControl = false }) {
	const [source, setSource] = (0, import_react.useState)();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(true);
	const videoRef = (0, import_react.useRef)(null);
	const loadVideo = async () => {
		if (source || loading) return;
		setLoading(true);
		try {
			const buffers = await Promise.all(parts.map(async (part) => {
				const response = await fetch(part);
				if (!response.ok) throw new Error("Não foi possível carregar o vídeo.");
				return response.arrayBuffer();
			}));
			setSource(URL.createObjectURL(new Blob(buffers, { type: "video/mp4" })));
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (autoLoad) loadVideo();
	}, [autoLoad]);
	(0, import_react.useEffect)(() => () => {
		if (source) URL.revokeObjectURL(source);
	}, [source]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref: videoRef,
			className,
			src: source,
			autoPlay: background || showSoundControl || Boolean(source),
			muted: background || showSoundControl ? muted : false,
			loop: background || showSoundControl,
			controls: !background && Boolean(source),
			playsInline: true,
			preload: "none",
			poster: "/images/encerramento.jpg",
			"aria-hidden": background ? "true" : void 0,
			"aria-label": background ? void 0 : "Vídeo institucional do Curso de Maturidade no Espírito",
			children: "Seu navegador não oferece suporte à reprodução de vídeo."
		}),
		!background && !showSoundControl && !source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "video-load",
			type: "button",
			onClick: () => void loadVideo(),
			disabled: loading,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: loading ? "…" : "▶"
				}),
				loading ? "Carregando vídeo" : "Assistir ao vídeo institucional",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "O vídeo será carregado somente agora" })
			]
		}),
		showSoundControl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "sound-toggle",
			type: "button",
			disabled: !source,
			"aria-pressed": !muted,
			onClick: () => {
				const nextMuted = !muted;
				setMuted(nextMuted);
				if (videoRef.current) videoRef.current.muted = nextMuted;
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: muted ? "◌" : "◉"
			}), source ? muted ? "Ativar som" : "Desativar som" : "Carregando"]
		})
	] });
}
function CountUp() {
	const [value, setValue] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(1e4);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			const started = performance.now();
			const tick = (now) => {
				const progress = Math.min((now - started) / 1500, 1);
				setValue(Math.round(1e4 * (1 - Math.pow(1 - progress, 4))));
				if (progress < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
			observer.disconnect();
		}, { threshold: .45 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: ["+", value.toLocaleString("pt-BR")]
	});
}
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const reveals = document.querySelectorAll("[data-reveal], .subject-grid li, .steps article, .requirements-list article, .keywords span");
		reveals.forEach((item, index) => {
			item.style.setProperty("--reveal-delay", `${index % 4 * 70}ms`);
		});
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		}), { threshold: .12 });
		reveals.forEach((item) => observer.observe(item));
		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#conteudo",
			children: "Pular para o conteúdo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: `site-header ${scrolled ? "scrolled" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "brand",
					href: "#inicio",
					"aria-label": "Curso de Maturidade — início",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo-curso.png",
						alt: "",
						width: "56",
						height: "56"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"MATURIDADE",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "NO ESPÍRITO" })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "menu-toggle",
					"aria-expanded": menuOpen,
					"aria-controls": "main-nav",
					onClick: () => setMenuOpen((open) => !open),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "sr-only",
							children: "Menu"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					id: "main-nav",
					className: menuOpen ? "open" : "",
					"aria-label": "Navegação principal",
					children: [[
						["Sobre", "#sobre"],
						["Matérias", "#materias"],
						["Como funciona", "#como-funciona"],
						["Perguntas frequentes", "#faq"]
					].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						onClick: () => setMenuOpen(false),
						children: label
					}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "nav-cta",
						href: studentArea,
						target: "_blank",
						rel: "noreferrer",
						children: ["Área do aluno ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "conteudo",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					id: "inicio",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChunkedVideo, {
							parts: heroVideoParts,
							className: "hero-video",
							autoLoad: true,
							background: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-photo",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Curso de Maturidade no Espírito"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
										"Conheça a Palavra.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Desenvolva sua" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "vida" }),
										" no Espírito."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-lead",
										children: "Um caminho de conhecimento, transformação e crescimento que torna princípios e valores bíblicos acessíveis à vida cotidiana."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "button-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "button button-light",
											href: "#sobre",
											children: ["Conheça o curso ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↓" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "text-link",
											href: studentArea,
											target: "_blank",
											rel: "noreferrer",
											children: ["Acessar área do aluno ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-stat",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "+10 mil" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "alunos formados" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "scroll-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Continue para descobrir"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "intro section-pad",
					id: "sobre",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " Sobre o curso"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "intro-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								"data-reveal": true,
								children: [
									"Ensino que produz",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "vida e transformação." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "intro-copy",
								"data-reveal": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Um dos pilares da Igreja Mananciais é o ensino da Palavra. Por isso, com o objetivo de liberar recursos que possibilitem o desenvolvimento da vida cristã, o Curso de Maturidade no Espírito foi implantado." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O curso é um caminho prático para compreender e desenvolver ensinos e valores bíblicos, trazendo clareza à Palavra de Deus e despertando a realidade de uma vida no Espírito no cotidiano." })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "editorial-photo",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/encerramento.jpg",
								alt: "Grande turma reunida após a conclusão do Curso de Maturidade",
								width: "2995",
								height: "805",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: "“Conhecimento da Palavra para uma vida no Espírito.”" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "keywords",
							"data-reveal": true,
							children: [
								"Palavra",
								"Espírito",
								"Crescimento",
								"Comunidade"
							].map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["0", i + 1] }), word] }, word))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "institutional-video section-pad",
					"aria-labelledby": "video-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label light",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " Conheça o CME"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "video-showcase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "video-heading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "video-title",
								"data-reveal": true,
								children: [
									"Mais que um curso.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
										"Uma jornada",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"de maturidade."
									] })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "video-frame",
							"data-reveal": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChunkedVideo, {
								parts: institutionalVideoParts,
								autoLoad: true,
								showSoundControl: true
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "impact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "impact-inner",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Uma história que continua crescendo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "big-number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"alunos formados no",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Curso de Maturidade no Espírito"
							] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "subjects section-pad",
					id: "materias",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " Matérias"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "subjects-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								"data-reveal": true,
								children: [
									"Uma jornada de",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "crescimento e transformação." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-reveal": true,
								children: "Conheça os ensinamentos que formam a base do Curso de Maturidade no Espírito."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "subject-grid",
							"data-reveal": true,
							children: subjects.map((subject, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: subject }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									"aria-hidden": "true",
									children: "↗"
								})
							] }, subject))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "how section-pad",
					id: "como-funciona",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-label light",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " Como funciona"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "how-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								"data-reveal": true,
								children: [
									"Formação bíblica.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Vivência prática." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"data-reveal": true,
								children: "Uma experiência de ensino que acontece em comunidade e continua na plataforma."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "steps",
							"data-reveal": true,
							children: [
								[
									"01",
									"5 meses",
									"Duração média para percorrer toda a formação."
								],
								[
									"02",
									"Segundas-feiras",
									"Encontros presenciais à noite, na igreja local."
								],
								[
									"03",
									"Plataforma de apoio",
									"Conteúdos disponíveis para reposição e revisão das aulas."
								],
								[
									"04",
									"Palavra e prática",
									"Formação baseada em conteúdo bíblico e vida cotidiana."
								]
							].map(([n, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
							] }, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "presence-note",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Importante" }), " A participação presencial faz parte da experiência. O curso não é realizado exclusivamente online."]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "requirements section-pad",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " Pré-requisitos"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "requirements-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							"data-reveal": true,
							children: [
								"Antes de",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "começar." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "requirements-list",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
									"Ter no mínimo",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"14 anos"
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
									"Ser membro ativo da",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Igreja Mananciais"
								] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Menores de 18 anos devem possuir autorização dos responsáveis." })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "platform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "platform-pattern",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "platform-copy",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Para alunos já inscritos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Continue sua jornada",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "de crescimento." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Acesse suas aulas, acompanhe os conteúdos disponíveis e continue avançando no Curso de Maturidade no Espírito." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "button button-light",
								href: studentArea,
								target: "_blank",
								rel: "noreferrer",
								children: ["Acessar plataforma de ensino ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "faq section-pad",
					id: "faq",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " Perguntas frequentes"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							"data-reveal": true,
							children: [
								"Tudo o que você",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "precisa saber." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"data-reveal": true,
							children: "Informações da turma atual podem ser atualizadas pela coordenação."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "accordion",
							"data-reveal": true,
							children: faqs.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `faq-item ${openFaq === index ? "open" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "faq-question",
									type: "button",
									"aria-expanded": openFaq === index,
									"aria-controls": `faq-answer-${index}`,
									onClick: () => setOpenFaq((current) => current === index ? null : index),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "faq-question-text",
											children: item.question
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											"aria-hidden": "true",
											children: "+"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "faq-answer",
									id: `faq-answer-${index}`,
									"aria-hidden": openFaq !== index,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.answer }) })
								})]
							}, item.question))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "closing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "closing-photo",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "“" }),
							"O Reino dos Céus é semelhante a um grão de mostarda que um homem tomou e plantou em seu campo. Embora seja a menor de todas as sementes, quando cresce, torna-se a maior das hortaliças e se transforma em árvore, de modo que as aves do céu vêm fazer os seus ninhos em seus ramos.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", { children: "Mateus 13:31–32" })
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo-mananciais.png",
					alt: "Igreja Mananciais",
					width: "255",
					height: "40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Uma igreja que ama a Deus,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"ama pessoas e transforma cidades."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: studentArea,
							target: "_blank",
							rel: "noreferrer",
							children: ["Área do aluno ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.igrejamananciais.com.br/politica-de-privacidade",
							target: "_blank",
							rel: "noreferrer",
							children: ["Política de privacidade ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.instagram.com/igrejamananciais/",
							target: "_blank",
							rel: "noreferrer",
							children: ["Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.youtube.com/@IgrejaMananciais",
							target: "_blank",
							rel: "noreferrer",
							children: ["YouTube ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-bottom",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Igreja Mananciais. Todos os direitos reservados."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rua Augusto Camossa Saldanha, 607 · Barra da Tijuca, RJ · (21) 2437-7695" })]
		})] })
	] });
}
//#endregion
export { Home as default };
