import "./globals.css";
import NavBar from "@/components/NavBar";
import InfoBar from "@/components/InfoBar";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Dipanwita Mandal - Software Engineer - Portfolio</title>
        <meta name="description" content="Dipanwita Mandal - Experienced Software Developer specializing in React, Node.js, Gen AI, and modern web technologies. View my projects, skills, and experience." />
        <meta name="keywords" content="Dipanwita Mandal, Dipanwita, Software Developer, React Developer, Node.js, Web Developer, Portfolio, Gen AI, Generative AI, AI Developer" />
        <meta name="author" content="Dipanwita Mandal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dipanwita Mandal - Software Developer Portfolio" />
        <meta property="og:description" content="Experienced Software Developer specializing in React, Node.js, Gen AI, and modern web technologies. View my projects, skills, and experience." />
        <meta property="og:image" content="https://dipanwitamandal.in/logo_black.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dipanwita Mandal - Software Developer Portfolio" />
        <meta name="twitter:description" content="Experienced Software Developer specializing in React, Node.js, Gen AI, and modern web technologies." />
        <meta name="twitter:image" content="https://dipanwitamandal.in/logo_black.png" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://dipanwita-mandal.vercel.app" />

        <link rel="icon" href="/logo.png?v=2" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo_black.png?v=2" />
      </head>
      <body className="antialiased">
        <video autoPlay muted loop className="video">
          <source src="/video.webm" type="video/webm" />
        </video>
        <div className="main_container h-screen py-8 px-4">
          <NavBar />
          <div className="details">
            <PageTransition>{children}</PageTransition>
          </div>
          <InfoBar />
        </div>
      </body>
    </html>
  );
}
