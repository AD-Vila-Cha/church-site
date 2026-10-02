import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { VercelToolbar } from "@vercel/toolbar/next";
import "./globals.css";

const montserratDisplay = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const montserratSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AD Vila Chã | Em breve",
  description:
    "Assembleia de Deus de Vila Chã: o novo site está a caminho. Em breve com toda a informação sobre a nossa igreja.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // On Vercel, the toolbar is auto-injected in preview deployments.
  // This manual injection is only needed for local development.
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="pt" className={`${montserratDisplay.variable} ${montserratSans.variable}`}>
      <body>
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
