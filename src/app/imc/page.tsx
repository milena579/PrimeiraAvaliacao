"use client"
import { useState } from "react";


interface AlturaPeso {
    a: string;
    b: string;
}

const Imc : React.FC = () => {
    const [altura, setAltura] = useState<string>("")
    const [peso, setPeso] = useState<string>("")

    const [calcular, setCalcular] = useState<number | undefined>()

    const erro = "Digite corretamente";

    const handleIMC = ({a, b}: AlturaPeso) => {
        var n1 = parseFloat(altura)
        const n2 = parseFloat(peso)
        n1 = parseFloat(altura) * parseFloat(altura)

        if(!isNaN(n1) && !isNaN(n2)){
            setCalcular((n2 / n1) * 10000)
        }

        console.log(n1)
    }
    console.log(altura);
    console.log(peso)
    return(
        <>
            <div className="w-full flex items-center flex-col gap-5 p-5">
                <h2 className="font-bold text-[25px] text-azul">Calculando o IMC</h2>
                <div className="rounded-lg border-2 border-azul w-80 h-auto p-5 items-center justify-center flex flex-col gap-2">
                    <div className="w-full">
                        <input className="border-2 p-2 w-full" type="text" placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <input className="border p-2 w-full" type="text" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                    </div>
                    <div>
                        <button className="border p-2 rounded-lg bg-amarelo2 font-bold text-white" onClick={() => handleIMC({a: altura, b: altura})}>Calcular</button>
                    </div>
                </div>
                <div className="flex gap-5 border-2 p-5 w-80 rounded-lg border-azul">
                    <h2 className="font-medium">IMC:</h2>
                    <p>{!isNaN(calcular ?? NaN) ? calcular?.toFixed(2) : erro}</p>
                </div>
                
            </div>
        </>
    )
}

export default Imc;