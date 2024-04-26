import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import Link from "next/link";

export function Header(){
    return(
        <header className="flex absolute top-4 px-4 md:px-12 w-full items-center justify-between">
            <span className="flex items-center text-sm gap-3 text-neutral-400"><EnvelopeClosedIcon width={18} height={18}/> tiagopavanibtw@gmail.com</span>
            <div className="space-x-3">
                <Link href="#about" className="hidden md:inline-flex relative overflow-hidden rounded-xl p-px">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-primary px-4 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                        Sobre mim
                    </span>
                </Link>
                <Link href="https://wa.link/d5otyr"><Button variant="secondary" className="text-sm md:text-md px-2">Contate-me</Button></Link>
            </div>
        </header>
    )
}