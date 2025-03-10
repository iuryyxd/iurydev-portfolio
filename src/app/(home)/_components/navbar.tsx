"use client";

import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <nav className="flex h-14 w-full items-center justify-between px-2 sm:px-10 md:px-20 lg:px-36">
      <span className="text-base text-white">
        iury<span className="text-sky-400">dev</span>
      </span>
      <ul className="hidden items-center gap-10 sm:flex">
        <Link href="#projects">
          <li className="transition-colors hover:text-white/90">Projetos</li>
        </Link>
        <Link href="#contact">
          <li className="transition-colors hover:text-white/90">Contato</li>
        </Link>
      </ul>
      <MobileMenu />
    </nav>
  );
}
