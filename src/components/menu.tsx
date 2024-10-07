import Link from "next/link";
import {ROUTES} from "@/constants/router"

interface IMenu{
    op1: string;
    op2: string;
    op3: string;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3}) => {
    return (
    <>
        <nav className="text-white font-roboto flex flex-row justify-center align-center gap-8 text-large bg-azul p-5 text-[20px]">
            <Link href={ROUTES.home}>{op1}</Link>
            <Link href={ROUTES.imc}>{op2}</Link>
            <Link href={ROUTES.media}>{op3}</Link>
        </nav>
    </>
    )
}