import {
  Montserrat,
  Roboto,
  Playfair_Display,
  Limelight,
  Lora,
} from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const limelight = Limelight({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-limelight",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Camping Vega de Francia",
  description: "Web camping",
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${roboto.variable} ${playfair.variable} ${limelight.variable} ${lora.variable}`}
    >
      <body className="font-roboto min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
