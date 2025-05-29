import {} from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Camping Vega de Francia",
  description: "Web camping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
