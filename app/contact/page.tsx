import Contact from "@/components/landing/contact";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden w-full">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
