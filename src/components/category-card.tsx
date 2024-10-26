import Image from "next/image";
import Link from "next/link";
import { Category } from "@/Types/Category";

export default function categoryCard(category: Category) {
    return (
        <div className="relative flex flex-col justify-center items-center w-full max-lg:h-[24rem] text-white font-normal shadow-md shadow-slate-950 duration-150 hover:scale-105">
            <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.4] backdrop-contrast-[1.3] backdrop-saturate-[1.8] [&>h3]:max-lg:text-5xl [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-100 lg:opacity-0 hover:opacity-100">
                <h3>
                    {category.title}
                </h3>
                <Link className="border-[1px] border-white rounded-sm w-fit px-4 py-2 max-lg:mt-8 mt-4 max-lg:text-2xl font-semibold duration-150 max-lg:bg-white max-lg:text-black hover:bg-white hover:text-black" href={`/categories/${category.categoryId}`}>
                    Discover
                </Link>
            </div>
            <Image
                className="absolute size-full object-cover contrast-[0.9] brightness-[0.4] -z-10"
                src={category.image}
                width={270}
                height={270}
                alt="Category-image"
                loading="lazy"/>
        </div>
    );
};
