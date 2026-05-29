import { Navbar } from "@/components/Navbar";
import { Announce } from "@/components/Announce";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Philosophy } from "@/components/Philosophy";
import { Showcase } from "@/components/Showcase";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Announce />
      <Hero />
      <Trust />
      <Philosophy />
      <Showcase />
      <Projects />
      <About />
      <Booking />
      <CtaBanner />
      <Footer />
    </main>
  );
}
