"use client";

import Image, { StaticImageData } from "next/image";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import Link from "next/link";

interface ProjectCard {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
}
export function ProjectCard({ img, title, description, link }: ProjectCard) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative max-w-[350px] w-full overflow-hidden rounded-xl bg-neutral-950"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
        <div className="space-y-2">
          <Image
            src={img}
            alt="Product image"
            height={10}
            width={10}
            sizes="100vw"
            className="rounded-xl h-52 w-full object-cover opacity-75"
          />
          <div className="flex flex-row items-center justify-between pt-2">
            <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
          </div>
          <p className="text-sm leading-[1.5] text-neutral-400 pb-3">
            {description}
          </p>
          <Link href={link}><button className="inline-flex items-center justify-center gap-1 text-sm py-3 px-4 font-semibold bg-white text-black rounded-lg duration-300 hover:bg-white/70 w-full">
            Ver mais
          </button></Link>
        </div>
      </div>
    </div>
  );
}
