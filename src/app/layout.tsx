import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OopsBox - 쓸모는 없지만 재미있는 웹 실험 모음집",
  description:
    "쓸모는 없지만 재미있는 웹 실험들을 체험해보세요. 다양한 장난감 같은 기능들을 만나보세요.",
  keywords: ["웹 실험", "재미", "장난감", "웹 개발", "실험"],
  authors: [{ name: "OopsBox Team" }],
  creator: "OopsBox Team",
  publisher: "OopsBox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "OopsBox - 쓸모는 없지만 재미있는 웹 실험 모음집",
    description: "쓸모는 없지만 재미있는 웹 실험들을 체험해보세요.",
    siteName: "OopsBox",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OopsBox - 쓸모는 없지만 재미있는 웹 실험 모음집",
    description: "쓸모는 없지만 재미있는 웹 실험들을 체험해보세요.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
