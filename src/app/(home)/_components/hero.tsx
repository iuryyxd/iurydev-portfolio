import { Badge } from "@/components/ui/badge";
import { stacks } from "@/utils/stacks";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full h-screen text-center flex items-center justify-center flex-col gap-20">
      <div className="max-w-[42.5rem] w-full flex flex-col gap-5">
        <div>
          <h4 className="text-lg text-gray-300">
            Hello World! Me chamo{" "}
            <span className="text-sky-400 border-b border-sky-400">
              <Link href="https://github.com/iuryyxd">Iury Sena</Link>
            </span>{" "}
            e sou
          </h4>
          <h1 className="text-5xl font-bold">Desenvolvedor Front End</h1>
        </div>
        <p className="text-sm text-gray-400">
          Transformo necessidades em aplicações reais e funcionais. Desenvolvo
          sistemas através da minha paixão pela tecnologia, contribuindo com
          soluções inovadoras e eficazes para desafios complexos.
        </p>
      </div>

      <ul className="flex items-center gap-4">
        {stacks.map((stack, index) => {
          return (
            <li key={stack.name + index}>
              <Badge>
                <Image
                  src={stack.image}
                  alt={stack.name}
                  width={20}
                  height={20}
                />
                <span className="text-gray-200 text-xs">{stack.name}</span>
              </Badge>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
