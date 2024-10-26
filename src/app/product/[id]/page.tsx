import Image from "next/image";
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
        <main className="flex flex-col gap-8 py-6 items-center sm:items-start">

            {
            product.length !== 0 &&
            <section id="productDetails" className="group grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-4 w-[100%] max-h-fit px-10">
                <div className="flex flex-col justify-center max-lg:items-center gap-2 max-w-[24rem] text-xl font-medium leading-6 text-slate-900">
                    <h1 className="w-fit text-3xl lg:text-5xl text-slate-900 font-semibold mx-6 mb-2 duration-100 group-hover:text-slate-500 group-hover:scale-110 lg:group-hover:translate-x-[48px] group-hover:font-bold">
                        {prod.title}
                    </h1>
                    <div className="rounded-full w-[8rem] lg:w-[12rem] h-1 mx-6 mb-2 bg-slate-700 duration-150 group-hover:w-[12rem] lg:group-hover:w-[16rem] group-hover:bg-slate-400" />
                    <div className="px-6 mb-8 text-xl font-light leading-8 text-slate-900">
                        <BlocksRenderer content={prod.description} />
                    </div>
                    <form action="/" className="flex flex-row justify-end gap-4 mx-8">
                        <input type="number" min={1} max={99} step={1} defaultValue={1} className="border-[1px] border-gray-500 rounded-lg outline-none w-[3rem] p-2 text-end" />
                        <button className="rounded-md px-4 py-2 text-2xl font-smibold text-white bg-slate-800 duration-150 hover:bg-slate-600">
                            Buy
                        </button>
                    </form>
                </div>
                <div className="relative flex flex-col justify-center items-center max-w-[97%] h-[24rem] shadow-md shadow-slate-950 duration-150 hover:scale-105">
                    <div className="flex flex-col justify-center items-center p-[4.25rem] size-full backdrop-brightness-[1.7] backdrop-contrast-[1.2] backdrop-saturate-[1.5] [&>h3]:text-2xl [&>h3]:font-medium duration-150 opacity-0 hover:opacity-100" />
                    <Image
                        className="absolute size-full object-cover contrast-[0.9] brightness-[0.4] -z-10"
                        src={prod.image}
                        width={270}
                        height={270}
                        alt="Category-image"
                        loading="lazy"/>
                </div>
            </section>
            }
            
        </main>
    );
};
