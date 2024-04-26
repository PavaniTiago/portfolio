import Image from "next/image";
import wavingHand from "../../public/waving-hand.png"
import project1 from "../../public/project1.png"
import project2 from "../../public/project2.png"
import project3 from "../../public/project3.png"
import project4 from "../../public/project4.png"
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full items-center">
    <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Image alt="foto de tiago pavani" src="https://avatars.githubusercontent.com/u/108679395?v=4" className="w-24 h-24 rounded-full" sizes="100vw" width={0} height={0}/>
        <h3 className="flex items-center text-sm text-neutral-400">
          Olá, eu sou Tiago. 
        <Image alt="waving hand emoji" src={wavingHand} className="object-contain ml-2 w-5 h-5"/>
        </h3>
      <h1 className="max-w-lg inline-flex px-8 md:px-0 animate-text-gradient bg-gradient-to-r from-[#e9e9e9] via-[#363636] to-[#e9e9e9] bg-[200%_auto] text-4xl text-center text-transparent font-semibold bg-clip-text">
          Construindo softwares, landing pages & websites.
      </h1>
      <Link href="https://www.instagram.com/tiagopavanidev/" className="relative inline-flex overflow-hidden rounded-xl p-px mt-6">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-primary px-6 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          Entrar em contato
        </span>
      </Link>
      <ArrowDownIcon className="absolute bottom-4 text-white w-8 h-8 animate-bounce"/>
      </div>
      <div id="about" className="flex flex-col items-center w-full h-full bg-neutral-950 pt-20">
        <h1 className="text-4xl font-bold bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text">
          Sobre mim
        </h1>
        <div className="max-w-lg text-center text-md font-medium mt-4">
          <p className="text-neutral-300 mb-6">
            Olá! Sou um freelancer há 3 anos, especializado em web design e engenharia de software. Tenho paixão por resolver problemas para empresas e empreendedores, ajudando a impulsionar suas vendas por meio de landing pages e softwares personalizados.
          </p>
          <p className="text-neutral-300">
            Estou sempre em busca de desafios interessantes e novas oportunidades para aplicar minhas habilidades e conhecimentos. Se você precisa de soluções eficazes para melhorar sua presença online e impulsionar seus negócios, estou aqui para ajudar!
          </p>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text mt-20">
          Meus Projetos
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <ProjectCard link="https://www.carlostortorellaimoveis.com.br/" title="Imobiliária Carlos Tortorella" description="Um site moderno e responsivo para a Imobiliária Carlos Tortorella, oferecendo aos clientes uma experiência intuitiva de busca de imóveis e informações detalhadas sobre propriedades disponíveis." img={project1}/>
          <ProjectCard link="https://marmitaria-ten.vercel.app/" title="Marmitaria Sabor ao ponto" description="Uma plataforma online para a Marmitaria Sabor ao Ponto, permitindo que os clientes façam pedidos de refeições deliciosas de forma conveniente e rápida, com opções personalizadas." img={project2}/>
          <ProjectCard link="https://alessandrapavani.com/" title="Curso Studio Alessandra Pavani" description="Um site educacional dedicado ao Curso Studio Alessandra Pavani, oferecendo uma variedade de cursos e recursos para aqueles interessados em aprimorar suas habilidades artísticas e criativas sob a orientação de especialistas renomados." img={project3}/>
          <ProjectCard link="https://alessandrapavani.com/studio/" title="Studio Alessandra Pavani" description="Um site elegante e informativo para o Studio Alessandra Pavani, apresentando os serviços oferecidos pela renomada profissional Alessandra Pavani, incluindo cursos, workshops e consultoria em design de interiores e decoração." img={project4}/>
        </div>
        <Link href="https://www.instagram.com/tiagopavanidev/" className="relative inline-flex overflow-hidden rounded-xl p-px mt-6">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-primary px-6 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            Entrar em contato
          </span>
        </Link>
      </div>
    </main>
  );
}
