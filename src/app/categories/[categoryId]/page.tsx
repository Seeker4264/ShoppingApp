import Link from "next/link";
import { getProductsInfo } from "@/lib/get-products";

import productCard from "@/components/product-card";

export default async function Category({
    params
}: {
    params: { categoryId: number }
}) {
    const products = await getProductsInfo();

    const renderCards = (category: number) => {
        let prods = [];
        for (let index = 0; index < products.length; index++) {
            if(Number(products[index].categoryId) === Number(category)) {
                prods.push(
                    <article key={index}>
                        {productCard(products[index])}
                    </article>
                );
            };
        };
        if(prods.length === 0) return (
            <article>
                <div className="group/card flex flex-col justify-center items-center border-[1px] border-slate-200 rounded-xl w-fit p-4 h-[20rem] shadow-xl bg-slate-50 duration-150 hover:scale-105 hover:translate-y-[-8px]">
                    <h3 className="text-3xl font-semibold text-center max-w-[14rem] pb-4 duration-150 text-slate-900">
                        There's no products available for this category...
                    </h3>
                    <Link className="rounded-lg px-4 py-2 text-lg font-medium text-white duration-100 bg-slate-700 hover:bg-slate-600 active:bg-slate-800" href={"/categories"}>
                        See more
                    </Link>
                </div>
            </article>
        );
        return prods;
    };

    return (
        <main className="group flex flex-col row-start-2 items-center sm:items-start">

            <h1 className="w-fit text-3xl lg:text-5xl text-slate-900 font-semibold mx-6 mt-6 mb-4 duration-100 group-hover:text-slate-500 group-hover:scale-110 lg:group-hover:translate-x-[48px] group-hover:font-bold">Products available</h1>

            <div className="rounded-full w-[12rem] lg:w-[32rem] h-1 mx-6 mb-2 bg-slate-700 duration-150 group-hover:w-[16rem] lg: lg:group-hover:w-[40rem] group-hover:bg-slate-400" />
            
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 m-6">
                {renderCards(params.categoryId)}
            </section>

        </main>
    );
};
