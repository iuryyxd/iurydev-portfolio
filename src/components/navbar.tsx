"use client";

import { MobileMenu } from "@/components/mobile-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex h-14 w-full items-center justify-between px-2 sm:px-10 md:px-20 lg:px-36">
      <Link href="/" className="text-base text-white">
        iury<span className="text-sky-400">dev</span>
      </Link>
      <ul className="hidden items-center gap-10 sm:flex">
        <Link href="#projects">
          <li className="transition-colors hover:text-white/90">Projetos</li>
        </Link>
        <Link href="https://www.linkedin.com/in/iurysena/" target="_blank">
          <li className="transition-colors hover:text-white/90">Contato</li>
        </Link>
      </ul>
      <MobileMenu />
    </nav>
  );
}
