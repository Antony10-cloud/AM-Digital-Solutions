import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AM Digital Studio",
    template: "%s | AM Digital Studio"
  },
  description:
    "AM Digital Studio builds websites, mobile apps, and digital systems for businesses that need clear, credible digital products.",
  metadataBase: new URL("https://web-design-request-system.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
