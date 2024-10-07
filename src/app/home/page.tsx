import Image from "next/image";

import img1 from "@/img/img1.png"
import img2 from "@/img/img2.png"
import img3 from "@/img/img3.png"
import img4 from "@/img/img4.png"

const dados: {titulo: string} [] = [
  {     
    titulo: "React", 
  },
  {   
    titulo: "Tailwind",
  },
  { 
    titulo: "Next"
  },
  { 
    titulo: "JQuery"
  }
]

export default function Home() {
  return (
    <>
     <div className="flex flex-wrap justify-center items-center flex-row gap-5 p-3">
      {dados.map((item, index) => (
        <div key={index} className="flex flex-col gap-5 h-100 w-80 border justify-center transition duration-500 hover:scale-105 shadow-lg shadow-black-500/2 ">
        <div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 via-orange-600  flex items-center justify-center w-full h-40">
            <h1 className="text-white text-[35px] font-bold	">{item.titulo}</h1>
        </div>
        <div>
          <p className="text-[20] font-medium p-3 flex text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores animi, eum sed saepe officiis alias corporis odit aliquid, a non quos quod pariatur rerum iste. Odit nostrum debitis voluptatum.</p>
        </div>
        <div className="w-full justify-center items-center flex p-3">
          <a href={item.titulo == "React"? "#react": item.titulo =="Tailwind"? "#tail": item.titulo=="Next"? "#next": "#jquery"}
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 via-orange-600 flex p-3 text-white w-3/4 text-[20px] items-center justify-center">
            Read more
          </a>
        </div>
      </div>
      ))}    
    </div>

    <section id="react" className="p-5 " >
      <div className="border p-5 shadow-lg shadow-black-500/2 ">
      <h1 className="text-[35px] font-bold">React</h1>
      <div className="flex gap-5 flex-col items-center">
        <p className="text-center p-3 text-[20px]">
          O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web
        </p>
        <a href="https://react.dev/">
          <Image src={img1} alt="imagem-react" className="h-[200px] w-[300px]"></Image>
        </a>
      </div>
      </div>
    </section>

    <section id="tail" className="p-5">
      <div className="border p-5 items-center shadow-lg shadow-black-500/2  ">
      <h1 className="text-[35px] font-bold">Tailwind</h1>
      <div className="flex gap-5 flex-col items-center">
        <p className="text-center p-3 text-[20px]">
        Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.
        </p>
        <a href="https://tailwindcss.com/">
          <Image src={img3} alt="imagem-react" className="h-[200px] w-[300px]"></Image>
        </a>
      </div>
      </div>
    </section>

    <section id="next" className="p-5  ">
      <div className="border p-5 shadow-lg shadow-black-500/2">
      <h1 className="text-[35px] font-bold">Next</h1>
      <div className="flex gap-5 flex-col items-center">
        <p className="text-center p-3 text-[20px]">
        Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.
        </p>
        <a href="https://nextjs.org/">
          <Image src={img2} alt="imagem-react" className="h-[200px] w-[300px]"></Image>
        </a>
      </div>
      </div>
    </section>

    <section id="jquery" className="p-5 ">
      <div className="border p-5 shadow-lg shadow-black-500/2 ">
      <h1 className="text-[35px] font-bold">JQuery</h1>
      <div className="flex gap-5 flex-col items-center">
        <p className="text-center p-3 text-[20px]">
          jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.
        </p>
        <a href="https://jquery.com/">
          <Image src={img4} alt="imagem-react" className="h-[200px] w-[300px]"></Image> 
        </a>
      </div>
      </div>
    </section>

  </>
  );
}
