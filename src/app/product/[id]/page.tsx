import Image from "next/image";
import Link from "next/link";
import { getProductInfo } from "@/lib/get-product";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function Product({
    params
}: {
    params: { id: number }
}) {
    const product = await getProductInfo(params.id);

    let prod = null;
    if(product.length === 0) {
        prod = {
            title: 'Product not found',
            description: null
        };
    } else {
        prod = product[0];
    };

    return (
        <main className="group flex flex-col gap-8 row-start-2 items-center sm:items-start">
            
            <section id="productTitle" className="m-6">
                <h1 className="w-fit text-5xl text-slate-900 font-semibold mx-6 mt-6 mb-4 duration-100 group-hover:text-slate-500 group-hover:scale-110 group-hover:translate-x-[48px] group-hover:font-bold">
                    {prod.title}
                </h1>
                <div className="rounded-full w-[16rem] h-1 mx-6 mb-2 bg-slate-700 duration-150 group-hover:w-[24rem] group-hover:bg-slate-400" />
            </section>

            {
            product.length !== 0 &&
            <section id="productDetails" className="grid grid-cols-[60%_40%] gap-12 w-[100%] max-h-[24rem] px-10">
                <div className="relative max-w-[100%] h-[24rem] shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.7] backdrop-contrast-[1.4] backdrop-saturate-[1.8] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100" />
                    <Image
                        className="absolute object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={prod.image}
                        fill={true}
                        alt="Category-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"/>
                </div>
                <div className="flex flex-col justify-center gap-8 max-w-[24rem] text-xl font-medium leading-6 text-slate-900">
                    <BlocksRenderer content={prod.description} />
                </div>
            </section>
            }
            <section id="more">

            </section>
            
        </main>
    );
};
