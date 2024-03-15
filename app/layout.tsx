import "./globals.css";
import type { Metadata } from "next";
import ThemeScript from "./shared/theme";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";

export const metadata: Metadata = {
  title: "Peersity",
  description: "Learning resources recommendations and reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="dark:bg-slate-900 flex flex-col h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
      <ThemeScript />
    </html>
  );
}
