import Contact from "@/components/landing/contact";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import dynamic from "next/dynamic";

// Dynamically import OfficeLocator with SSR disabled to avoid window undefined errors
const OfficeLocator = dynamic(() => import("@/components/ui/office-locator"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  )
});

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden w-full">
      <Header />
      <Contact />
      
      {/* Added container with padding and max-width */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <OfficeLocator />
      </section>
      
      <Footer />
    </div>
  );
}