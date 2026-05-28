import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Booking } from "@/components/Booking";
import { Now } from "@/components/Now";
import { Insights } from "@/components/Insights";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Booking />
      <Now />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
