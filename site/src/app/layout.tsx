import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/data/content";
import { Navbar } from "@/components/Navbar";
import { SocialSidebar } from "@/components/SocialSidebar";
import { SiteFooter } from "@/components/SiteFooter";
import { BackToTop } from "@/components/BackToTop";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: siteConfig.siteName,
  title: {
    default: `${siteConfig.siteName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Ajith Kumar",
    "AjithKumar",
    "Java Full Stack Developer",
    "Spring Boot",
    "Microservices",
    "React",
    "Portfolio",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.profileImage, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.siteName} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.profileImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} !top-0 m-0 overflow-x-hidden bg-black p-0 font-sans text-white antialiased`}
      >
        <SkipLink />
        <Navbar />
        <SocialSidebar />
        <main id="main" className="relative min-h-screen w-full">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
