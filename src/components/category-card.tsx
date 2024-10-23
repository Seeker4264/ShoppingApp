import Image from "next/image";
import Link from "next/link";
import { Category } from "@/Types/Category";

export default function categoryCard(category: Category) {
    return (
        <div className="relative w-full h-full shadow-md shadow-slate-950 duration-150 hover:scale-105">
            <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100">
                <h3>
                    {category.title}
                </h3>
                <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 mt-4 font-semibold duration-150 hover:bg-white hover:text-black" href={"/"}>
                    Discover
                </Link>
            </div>
            <Image
                className="absolute object-cover contrast-[0.9] brightness-[0.4] -z-10"
                src={category.image}
                fill={true}
                alt="Category-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"/>
        </div>
    );
};
