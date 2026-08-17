import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cursodematuridade.com.br"),
  title: "Curso de Maturidade no Espírito | Igreja Mananciais",
  description:
    "Conheça o Curso de Maturidade no Espírito da Igreja Mananciais e desenvolva sua compreensão da Palavra, sua vida cristã e sua caminhada no Espírito.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Curso de Maturidade no Espírito | Igreja Mananciais",
    description:
      "Conheça a Palavra. Desenvolva sua vida no Espírito.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Curso de Maturidade no Espírito" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Maturidade no Espírito | Igreja Mananciais",
    description: "Conheça a Palavra. Desenvolva sua vida no Espírito.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/images/logo-curso.png",
    shortcut: "/images/logo-curso.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
