import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

// Display face — used with restraint on headings & the crest wordmark
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Radiant International School | Where Excellence Begins",
  description:
    "Radiant International School — a premier CBSE institution nurturing confident, curious, and compassionate global citizens from Pre-KG to Grade 12.",
  keywords: ["Radiant International School", "CBSE school", "best school", "admissions"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
