import type { Metadata } from "next";
import { DM_Sans, Lato, Quicksand } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Oscar Cartagena",
    template: "%s - Oscar Cartagena",
  },
  description:
    "Seasoned Business Developer and serial Entrepreneur. XR industry leader, consultant & speaker. Artist, Musician & Dj.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${lato.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-muted">{children}</body>
    </html>
  );
}
