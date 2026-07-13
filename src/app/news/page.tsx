import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsAndUpdates from "@/components/sections/news/NewsAndUpdates";

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="flex-1">
        <NewsAndUpdates />
      </main>
      <Footer />
    </div>
  );
}
