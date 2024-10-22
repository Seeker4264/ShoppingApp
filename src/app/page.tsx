import Image from "next/image";
import { getHomeInfo } from "@/lib/get-home";
import { getCategoriesInfo } from "@/lib/get-categories";
import { getProductsInfo } from "@/lib/get-products";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import categoriesHome from "@/components/categories-home";
import productCard from "@/components/product-card";

export default async function Home() {
    const { title: homeTitle, description: homeDesc, image: homeImage } = await getHomeInfo();
    const categories = await getCategoriesInfo();
    const products = await getProductsInfo();

    const renderCards = () => {
        let prods = [];
        for (let index = 0; index < products.length; index++) {
            prods.push(
                <article key={index}>
                    {productCard(products[index])}
                </article>
            )
        };
        return prods;
    };

    return (
        <main>

            <section id="hero" className="flex flex-row gap-5 m-6">
                <div className="relative flex flex-col justify-center items-center w-full text-white font-normal shadow-md shadow-slate-950">
                    <div className="flex flex-col justify-center items-center gap-2 w-full h-full p-4 backdrop-brightness-[0.3]">
                        <h1 className="text-center text-5xl font-semibold animate-smallScale">{homeTitle}</h1>
                        <h2 className="text-center mt-4 text-2xl">
                            <BlocksRenderer content={homeDesc} />
                        </h2>
                    </div>
                    <Image
                        className="absolute object-cover -z-10"
                        src={homeImage}
                        fill={true}
                        alt="Cover-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority/>
                </div>
                {categoriesHome(categories)}
            </section>

            <section id="sealsApproval">
                <ol className="grid grid-cols-3 grid-rows-1 gap-32 px-20 bg-[#e9e9e8] [&>li]:flex [&>li]:flex-col [&>li]:justify-start [&>li]:items-center [&>li]:py-10 [&>li]:px-2 [&>li>h3]:text-2xl [&>li>h3]:mt-5 [&>li>h3]:text-center [&>li>h3]:font-medium [&>li>h3]:text-slate-900 [&>li>p]:text-center [&>li>p]:leading-5 [&>li>p]:mt-2 [&>li>p]:font-normal">
                    <li className="group [&>h3]:text-slate-900 [&>p]:text-slate-900">
                        <svg className="size-24 text-slate-900 duration-150 group-hover:text-[#80a39c] group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                            <rect x="1" y="3" width="15" height="13" />
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                            <circle cx="5.5" cy="18.5" r="2.5" />
                            <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                        <h3>FAST DELIVERY</h3>
                        <p>Donec at gravida magna. Nam id tincidunt elit. Nunc at tristique magna. Suspendisse sapien ligula.</p>
                    </li>
                    <li className="group [&>h3]:text-slate-900 [&>p]:text-slate-900">
                        <svg className="size-24 text-slate-900 duration-150 group-hover:text-[#80a39c] group-hover:scale-105" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M9 12l2 2l4 -4" />
                            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                        </svg>
                        <h3>BEST QUALITY</h3>
                        <p>Morbi aliquam convallis mollis. Etiam fermentum nunc ac diam elementum, et maximus leo varius. Sed.</p>
                    </li>
                    <li className="group [&>h3]:text-slate-900 [&>p]:text-slate-900">
                        <svg className="size-24 text-slate-900 duration-150 group-hover:text-[#80a39c] group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <h3>SUPPORT 24/7</h3>
                        <p>Aenean auctor congue augue, quis ullamcorper ipsum scelerisque at. Ut sed interdum risus. Pellentesque ac.</p>
                    </li>
                </ol>
            </section>

            <section id="firstCategory" className="flex flex-col gap-5 m-6">
                <h2 className="px-10 py-2 text-6xl font-semibold text-slate-900">{categories[0].title}</h2>
                <div className="flex flex-row justify-start items-center gap-5 px-4 py-2">
                    {renderCards()}
                </div>
            </section>

        </main>
    );
};
