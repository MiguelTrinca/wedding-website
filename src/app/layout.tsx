import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beatriz & Miguel - Wedding 2026",
  description: "Join us for our special day on June 20th, 2026 at Quinta do Furao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
