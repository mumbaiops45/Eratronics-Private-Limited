
import "./globals.css";
import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";


export const metadata = {
  title: "Eratronics Private Limited",
  description: "Mission Critical Telecom & Communication Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

    >
      <body className="min-h-full flex flex-col" style={{ background: "var(--surface-1)" }}>
        <Navbar />
        <main className="mt-18">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
