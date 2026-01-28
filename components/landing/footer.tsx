import Link from "next/link";
import DM_Sans from "@/lib/fonts/dm-sans";
import Globe from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <div
        className={`${DM_Sans.className} relative flex h-full w-full items-start justify-center overflow-hidden px-4 sm:px-8 md:px-20 lg:px-40 pb-20 sm:pb-32 md:pb-40 lg:pb-60 pt-8`}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight sm:leading-tight md:leading-none text-transparent relative z-10 px-4">
          Transform Your Data
          <br />
          Journey Today
        </span>
        <Globe className="top-16 sm:top-20 md:top-32" />
        <div className="absolute bottom-0 bg-gradient-to-t from-[#ccbfb5] to-transparent min-h-20 sm:min-h-32 md:min-h-40 w-full"></div>
      </div>
      <footer className="w-full bg-[#ccbfb5] pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 md:pb-14 px-4 sm:px-6 md:px-8">
        <div
          className={`${DM_Sans.className} flex flex-col sm:flex-row justify-between items-center sm:items-start max-w-7xl m-auto gap-6 sm:gap-4`}
        >
          <h1 className="text-sm sm:text-base md:text-lg tracking-tighter pb-0 text-center sm:text-left">
            USP DataLabs. All Rights Reserved.
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-6 md:gap-8 lg:gap-14">
            <Link href="/solutions">
              <Button variant="link" size="sm" className="text-sm md:text-base">
                Solutions
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="link" size="sm" className="text-sm md:text-base">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="link" size="sm" className="text-sm md:text-base">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}