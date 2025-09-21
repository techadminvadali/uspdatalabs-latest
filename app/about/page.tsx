import AboutVision from "@/components/landing/about-vision";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { GlowCapture } from "@codaworks/react-glow";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <GlowCapture>
        <Header />
        <AboutVision />
        <Footer />
      </GlowCapture>
    </div>
  );
}
