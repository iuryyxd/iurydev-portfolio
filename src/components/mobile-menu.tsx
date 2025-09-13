import { useToggle } from "@/app/hooks/use-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export function MobileMenu() {
  const { isActive, toggleState } = useToggle();

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <>
      <button
        className="sm:hidden"
        type="button"
        onClick={() => toggleState(true)}
      >
        <Menu />
      </button>
      {isActive && (
        <div className="absolute right-0 top-0 z-10 block min-h-dvh w-1/2 overflow-hidden bg-slate-900 px-5 py-2 sm:hidden">
          <ul className="flex flex-col gap-10">
            <button
              type="button"
              className="self-end"
              onClick={() => toggleState(false)}
            >
              <X />
            </button>

            <Link href="#projects" onClick={() => toggleState(false)}>
              <li className="transition-colors hover:text-white/90">
                Projetos
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/iurysena/"
              target="_blank"
              onClick={() => toggleState(false)}
            >
              <li className="transition-colors hover:text-white/90">Contato</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
