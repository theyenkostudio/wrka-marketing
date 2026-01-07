import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ['italic', 'normal'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light"> 
      <body className={`${geistSans.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main className="mt-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
