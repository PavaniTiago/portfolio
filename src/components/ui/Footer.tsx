import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link";

export const Footer = () => {
    return (
      <footer className="bg-neutral-950 py-4 text-neutral-400 text-center text-sm pt-20">
        <div className="flex flex-col items-center mx-auto">
            <div className="flex gap-3 mb-4">
                <Link href="https://www.instagram.com/tiagopavanidev/"><InstagramLogoIcon width={25} height={25} className="hover:text-neutral-50 transition-colors"/></Link>
                <Link href="https://www.linkedin.com/in/tiago-pavani-19a427245/"><LinkedInLogoIcon width={25} height={25} className="hover:text-neutral-50 transition-colors"/></Link>
                <Link href="https://github.com/PavaniTiago"><GitHubLogoIcon width={25} height={25} className="hover:text-neutral-50 transition-colors"/></Link>

            </div>
            <p>&copy; {new Date().getFullYear()} Tiago Pavani. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
};