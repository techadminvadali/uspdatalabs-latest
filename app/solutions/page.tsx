import ProblemSolution from "@/components/landing/problem-solution";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { GlowCapture } from "@codaworks/react-glow";

export default function SolutionsPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <GlowCapture>
        <Header />
        <ProblemSolution />
        <Footer />
      </GlowCapture>
    </div>
  );
}
