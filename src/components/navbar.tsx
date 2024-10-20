'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <header className="flex flex-row justify-between items-center border-b-[1px] border-b-gray-400 p-3 px-[5%] bg-[#F7F7F7]">
            <h1 className="text-[2rem] font-semibold">Shopping App</h1>
            <ul className="flex flex-row justify-center gap-4">
                <li className={`${pathname === "/" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150`}>
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li className={`${pathname === "/products" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150`}>
                    <Link href={"/products"}>
                        Products
                    </Link>
                </li>
                <li className={`${pathname === "/categories" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150`}>
                    <Link href={"/categories"}>
                        Categories
                    </Link>
                </li>
                <li className={`text-slate-900 hover:text-[#5a7a72] text-xl font-semibold duration-150`}>
                    About
                </li>
                <li className={`${pathname === "/contact" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150`}>
                    <Link href={"/contact"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    )
};
