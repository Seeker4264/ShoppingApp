'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const pathname = usePathname();
    
    return (
        <>
            <header className="flex flex-row justify-between items-center border-b-[1px] border-b-gray-400 p-3 px-[5%] shadow-lg bg-[#e9e9e8]">
                
                <h1 className="text-2xl lg:text-[2rem] font-bold bg-gradient-to-r from-[#7DB3A6] to-slate-700 inline-block text-transparent bg-clip-text">Shopping App</h1>
                <svg className="block lg:hidden size-12 text-slate-900 hover:text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => setNav((v) => !v)}>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>

                <ul className="hidden lg:flex flex-row justify-center gap-6">
                    <li className={`${pathname === "/" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150 hover:scale-110 hover:translate-y-[-0.15rem] active:scale-105`}>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className={`${pathname === "/categories" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150 hover:scale-110 hover:translate-y-[-0.15rem] active:scale-105`}>
                        <Link href={"/categories"}>
                            Categories
                        </Link>
                    </li>
                    <li className={`${pathname === "/contact" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} text-xl font-medium duration-150 hover:scale-110 hover:translate-y-[-0.15rem] active:scale-105`}>
                        <Link href={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
                
            </header>
            <ul className={`${nav ? "h-fit" : "h-0"} flex flex-col justify-center items-center lg:hidden overflow-hidden duration-150`}>
                <Link className="w-full" href={"/"} onClick={() => setNav((v) => !v)}>
                    <li className={`${pathname === "/" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} w-full px-24 py-6 text-center text-2xl font-medium duration-150 bg-gray-200 hover:translate-x-[0.15rem]`}>
                        Home
                    </li>
                </Link>
                <Link className="w-full" href={"/categories"} onClick={() => setNav((v) => !v)}>
                    <li className={`${pathname === "/categories" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} w-full px-24 py-6 text-center text-2xl font-medium duration-150 bg-gray-200 hover:translate-x-[0.15rem]`}>
                        Categories
                    </li>
                </Link>
                <Link className="w-full" href={"/contact"} onClick={() => setNav((v) => !v)}>
                    <li className={`${pathname === "/contact" ? "text-[#7DB3A6]" : "text-slate-900 hover:text-[#5a7a72]"} w-full px-24 py-6 text-center text-2xl font-medium duration-150 bg-gray-200 hover:translate-x-[0.15rem]`}>
                        Contact
                    </li>
                </Link>
            </ul>
        </>
    );
};
