import Image from "next/image";
import Link from "next/link";

import moreImg from "@/public/moreImage.jpg";
import { Category } from "@/constants/Category";

export default async function categoriesHome(categories: Category[]) {
    if(categories.length === 0) return null;

    return (
        <div className="w-3/4">
            <ul className="grid grid-cols-2 gap-4 text-lg text-white">

                <li className="relative w-full h-full shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100">
                        <h3>
                            {categories[0].title}
                        </h3>
                        <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 mt-4 font-semibold duration-150 hover:bg-white hover:text-black" href={"/"}>
                            Discover
                        </Link>
                    </div>
                    <Image
                        className="absolute object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={categories[0].image}
                        fill={true}
                        alt="Category-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"/>
                </li>

                <li className="relative w-full h-full shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100">
                        <h3>
                            {categories[1].title}
                        </h3>
                        <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 mt-4 font-semibold duration-150 hover:bg-white hover:text-black" href={"/"}>
                            Discover
                        </Link>
                    </div>
                    <Image
                        className="absolute object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={categories[1].image}
                        fill={true}
                        alt="Category-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"/>
                </li>

                <li className="relative w-full h-full shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100">
                        <h3>
                            {categories[2].title}
                        </h3>
                        <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 mt-4 font-semibold duration-150 hover:bg-white hover:text-black" href={"/"}>
                            Discover
                        </Link>
                    </div>
                    <Image
                        className="absolute object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={categories[2].image}
                        fill={true}
                        alt="Category-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"/>
                </li>

                <li className="relative w-full h-full shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100">
                        <h3>
                            More
                        </h3>
                        <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 mt-4 font-semibold duration-150 hover:bg-white hover:text-black" href={"/categories"}>
                            Discover
                        </Link>
                    </div>
                    <Image
                        className="absolute object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={moreImg}
                        fill={true}
                        alt="Category-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"/>
                </li>

            </ul>
        </div>
    );
};
