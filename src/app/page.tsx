import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import News from "@/components/News";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <News />
        <Testimonials />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
