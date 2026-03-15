import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Team from "@/components/Team";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Stats />
        <News />
        <Testimonials />
        <About />
        <Team />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <ScrollReveal />
    </>
  );
}
