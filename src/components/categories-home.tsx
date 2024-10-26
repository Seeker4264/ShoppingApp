import Image from "next/image";
import Link from "next/link";

import moreImg from "@/public/moreImage.jpg";
import { Category } from "@/types/Category";
import categoryCard from "./category-card";

export default async function categoriesHome(categories: Category[]) {
    if(categories.length === 0) return null;

    return (
        <div className="w-full lg:w-3/4">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-lg text-white">

                {categories[0] &&
                categoryCard(categories[0])}

                {categories[1] &&
                categoryCard(categories[1])}

                {categories[2] &&
                categoryCard(categories[2])}

                <li className="relative flex flex-col justify-center items-center w-full max-lg:h-[24rem] text-white font-normal shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:max-lg:text-5xl [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-100 lg:opacity-0 hover:opacity-100">
                        <h3>
                            More
                        </h3>
                        <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 max-lg:mt-8 mt-4 max-lg:text-2xl font-semibold duration-150 max-lg:bg-white max-lg:text-black hover:bg-white hover:text-black" href={"/categories"}>
                            Discover
                        </Link>
                    </div>
                    <Image
                        className="absolute size-full object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={moreImg}
                        width={270}
                        height={270}
                        alt="Category-image"
                        loading="lazy"/>
                </li>

            </ul>
        </div>
    );
};
