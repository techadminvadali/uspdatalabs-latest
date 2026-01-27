import Contact from "@/components/landing/contact";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import OfficeMap from "@/components/ui/office-map";
import OfficeLocator from "@/components/ui/office-locator";
export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden w-full">
      <Header />
      <Contact />
      <OfficeLocator />
      <Footer />
    </div>
  );
}
