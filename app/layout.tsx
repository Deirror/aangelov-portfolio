import type { Metadata } from "next";
import Navbar from '../components/Navbar';
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Angelov's Website",
  description: "Personal Portfolio 2025",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
};