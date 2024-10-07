
"use client"
import { useState } from "react";
import Image from "next/image";

import aprovado from "@/img/aprovado.png"
import reprovado from "@/img/reprovado.jpg"

interface Notas {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
}

const Media : React.FC = () => {
    const [nota1, setNota1] = useState<string>("")
    const [nota2, setNota2] = useState<string>("")
    const [nota3, setNota3] = useState<string>("")
    const [nota4, setNota4] = useState<string>("")
    const [nota5, setNota5] = useState<string>("")

    const [calcularMedia, setCalcularMedia] = useState< number | undefined >()

    const erro = "Digite corretamente";

    const handleMedia = ({a, b,c, d, e}: Notas) => {
        var n1 = parseFloat(a)
        var n2 = parseFloat(b)
        var n3 = parseFloat(c)
        var n4 = parseFloat(d)
        var n5 = parseFloat(e)
       

        if(!isNaN(n1) && !isNaN(n2)){
            setCalcularMedia((n1 + n2 + n3 + n4 + n5) / 5);
        }

    }

    return(
        <>
            <div className="w-full flex items-center flex-col gap-5 p-5">
                <h2 className="font-bold text-[25px] text-amarelo1">Calculando o IMC</h2>
                <div className="rounded-lg border w-80 h-auto p-8 items-center justify-center flex flex-col gap-5 ">
                    <div className="w-full">
                        <input className="border-amarelo1 border-2 rounded-lg p-2 w-full bg-transparent" type="text" placeholder="Nota1" value={nota1} onChange={(e) => setNota1(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <input className="border-amarelo1 border-2 rounded-lg p-2 w-full bg-transparent" type="text" placeholder="Nota2" value={nota2} onChange={(e) => setNota2(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <input className="border-amarelo1 border-2 rounded-lg p-2 w-full bg-transparent" type="text" placeholder="Nota3" value={nota3} onChange={(e) => setNota3(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <input className="border-amarelo1 border-2 rounded-lg p-2 w-full bg-transparent" type="text" placeholder="Nota4" value={nota4} onChange={(e) => setNota4(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <input className="border-amarelo1 border-2 rounded-lg p-2 w-full bg-transparent" type="text" placeholder="Nota5" value={nota5} onChange={(e) => setNota5(e.target.value)} />
                    </div>
                    <div>
                        <button className="border p-3 rounded-lg bg-amarelo1 font-bold text-white" onClick={() => handleMedia({a: nota1, b: nota2, c:nota3, d:nota4, e:nota5})}>Calcular</button>
                    </div>
                </div>
                <div className="flex gap-5 border p-5 w-80 rounded-lg  bg-amarelo2 text-branco">
                    <h2 className="font-medium">Media:</h2>
                    <p>{!isNaN(calcularMedia ?? NaN) ? calcularMedia?.toFixed(2) : erro}</p>
                </div>
                <div className="flex gap-5 border p-5 w-80 rounded-lg bg-amarelo2 text-branco">
                    <h2 className="font-medium">Situacao:</h2>
                    {calcularMedia && calcularMedia >= 7 && <p className=" font-bold"> <Image src={aprovado} alt="img-reprovado" className="h-[150px] w-[200px]"></Image> PASSOU</p>}
                    {calcularMedia && calcularMedia < 7 && <p className=" font-bold"> <Image src={reprovado} alt="img-aprovado" className="h-[150px] w-[200px]"></Image> NÃO PASSOU</p>}

                </div>

                
            </div>
        </>
    )
}

export default Media;