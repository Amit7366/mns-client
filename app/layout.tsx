import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali, Noto_Sans_Devanagari } from "next/font/google";
import { headers } from "next/headers";
import { isValidLocale, type Locale } from "@/lib/locale";
import { localeFontClass } from "@/lib/locale-font";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Baji",
  description: "Bangladesh's leading online gaming and betting platform",
  icons: {
    icon: "https://img.b112j.com/images/bj/bj-favicon.ico",
    apple: [
      { url: "https://img.b112j.com/bj/h5/assets/images/icons/PWAicon-192px.png?v=1778659269258", sizes: "192x192" },
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Baji",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#111111",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const localeHeader = headerList.get("x-locale");
  const locale: Locale =
    localeHeader && isValidLocale(localeHeader) ? localeHeader : "bn";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className={`flex h-dvh flex-col overflow-hidden bg-[#0a0a0a] ${localeFontClass(locale)}`}
      >
        {children}
      </body>
    </html>
  );
}
