"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import Squares from "@/components/react-bits/squares";
import { stacks } from "@/utils/stacks";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex h-dvh w-full flex-col items-center justify-center px-5 text-center md:px-0">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col gap-14"
      >
        <div className="z-[2] flex w-full max-w-[42.5rem] flex-col gap-5">
          <div>
            <h2 className="text-base text-gray-300 md:text-lg">
              Hello World! Me chamo{" "}
              <span className="border-b border-sky-400 text-sky-400">
                <Link href="https://github.com/iuryyxd">Iury Sena</Link>
              </span>{" "}
              e sou
            </h2>
            <h1 className="text-4xl font-bold md:text-5xl">
              Desenvolvedor Front End
            </h1>
          </div>
          <p className="text-sm text-gray-400">
            Transformo necessidades em aplicações reais e funcionais. Desenvolvo
            sistemas através da minha paixão pela tecnologia, contribuindo com
            soluções inovadoras e eficazes para desafios complexos.
          </p>
        </div>

        <ul className="z-[2] flex flex-wrap items-center justify-center gap-4">
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
                  <span className="text-xs text-gray-200">{stack.name}</span>
                </Badge>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
