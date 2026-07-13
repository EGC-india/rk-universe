import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutRK from "@/components/sections/about/AboutRK";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex-1">
        <AboutRK />
      </main>
      <Footer />
    </div>
  );
}
