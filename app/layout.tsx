import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "./components/context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop"; // Assurez-vous que le chemin est correct
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Bossuyt - Product Designer",
  description:
    "Arthur est un Product Designer de 21 ans passionné par la création d'expériences utilisateur innovantes et efficaces. Découvrez son portfolio de projets créatifs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QV9C7DPC80"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QV9C7DPC80');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Metadata de base */}
        <title>Arthur Bossuyt - Product Designer</title>
        <meta
          name="description"
          content="Arthur est un Product Designer de 21 ans passionné par la création d'expériences utilisateur innovantes et efficaces. Découvrez son portfolio de projets créatifs."
        />
        <meta
          name="keywords"
          content="Product Designer, UX Design, UI Design, Design Graphique, Portfolio, Arthur, Arthur Bossuyt, Bossuyt, SpadeFX, Spade"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Arthur Bossuyt" />

        {/* Favicons */}
        <link
          id="favicon"
          rel="icon"
          type="image/svg+xml"
          href="/public/images/favicon-light.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/images/favicon-light.svg"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arthur Bossuyt - Product Designer" />
        <meta
          property="og:description"
          content="Arthur est un Product Designer de 21 ans passionné par la création d'expériences utilisateur innovantes et efficaces. Découvrez son portfolio de projets créatifs."
        />
        <meta property="og:image" content="/images/twitter.png" />
        <meta property="og:url" content="https://arthur.gg" />
        <meta
          property="og:site_name"
          content="Arthur Bossuyt - Product Designer"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arthur Bossuyt - Product Designer"
        />
        <meta
          name="twitter:description"
          content="Arthur est un Product Designer de 21 ans passionné par la création d'expériences utilisateur innovantes et efficaces. Découvrez son portfolio de projets créatifs."
        />
        <meta name="twitter:image" content="/images/twitter.png" />
        <meta name="twitter:site" content="@SpadeFX" />

        {/* Couleur de thème pour mobile */}
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={inter.className}>
        <LanguageProvider>
          <ScrollToTop /> {/* Ajout de ScrollToTop ici */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
