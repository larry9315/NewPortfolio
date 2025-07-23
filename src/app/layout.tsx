import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Larry Park | Portfolio',
  description: 'Game/UI Developer Portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-hidden font-sans antialiased bg-white text-black">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
