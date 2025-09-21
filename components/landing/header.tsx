import Link from "next/link";
import DM_Sans from "@/lib/fonts/dm-sans";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white w-full max-w-7xl m-auto flex justify-between items-center py-6 border border-gray-200 rounded-xl px-8 mt-5 shadow-sm">
      <h1 className={`${DM_Sans.className} text-2xl font-semibold text-gray-800`}>
        USP DataLabs
      </h1>
            <nav className="flex items-center space-x-6">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                  Home
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                  Solutions
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                  About
                </Button>
              </Link>
              <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                Talk to Us
              </Button>
              </Link>
            </nav>
    </header>
  );
}
