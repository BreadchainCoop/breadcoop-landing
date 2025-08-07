import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-paper-0 to-paper-1 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-akzidenz font-bold text-5xl md:text-7xl text-text-standard mb-6">
              Imagine a post-capitalist world with us
            </h1>
            <p className="font-univers text-xl text-surface-grey max-w-3xl mx-auto mb-8">
              Bread Cooperative is a worker collective building crypto tools for
              solidarity.
            </p>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-6 bg-paper-0"></section>
        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary-orange"></section>
      </main>

      <Footer />
    </div>
  );
}
