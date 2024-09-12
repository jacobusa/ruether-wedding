import type { Metadata } from "next";
import { Alex_Brush, Bitter, Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });
const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex-brush",
});
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

const bitter = Bitter({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  // openGraph: {
  //   type: "website",
  //   description:
  //     "Join Kurt and Cecile as they embark on a journey of love, laughter, and forever at their Wedding. Celebrate their vows and be part of this joyous day!",
  //   title: "Ruether Wedding",
  // },
  metadataBase: new URL("https://ruetherwedding.com"),
  title: {
    template: "%s - Ruether Wedding",
    default: "Kurt and Cecile Ruether's Wedding Website",
  },
  description:
    "Join Kurt and Cecile as they embark on a journey of love, laughter, and forever at their Wedding. Celebrate their vows and be part of this joyous day!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${alexBrush.variable} ${ptSerif.variable} ${bitter.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
