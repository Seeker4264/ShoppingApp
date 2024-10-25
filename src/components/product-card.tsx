import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

export default function productCard(product: Product) {
    if (!product) return null;

    let actualPrice = product.price;
    if(product.hasDiscount) {
        actualPrice = product.price - (product.price * (product.discountPercentage / 100));
    };

    let shortTitle = product.title;
    if(product.title.length >= 16) {
        shortTitle = product.title.slice(0, 16) + '...';
    };

    return (
        <div className="grid grid-rows-2 grid-cols-1 border-[1px] border-slate-200 rounded-xl w-fit p-4 h-[20rem] shadow-xl bg-slate-50 duration-150 hover:scale-105 hover:translate-y-[-8px]">
            <Link href={`/product/${product.productId}`}>
                <Image
                    className="rounded-md justify-self-center object-cover max-w-[14rem] h-[10rem] contrast-[0.8] brightness-[0.5] duration-150 hover:contrast-[1.1] hover:brightness-[0.9]"
                    src={product.image}
                    width={240}
                    height={240}
                    alt={`${product.title}-image`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>
                
            <div className="flex flex-row justify-between items-end p-2">
                <div className="[&>h3]:text-2xl text-md [&>h3]:text-slate-900 [&>h3]:py-1 [&>h3]:font-medium [&>p]:font-normal">
                    <h3>{shortTitle}</h3>
                    <span>
                        {product.hasDiscount &&
                        <p className="line-through text-gray-400">${product.price}</p>}
                        <p className="text-lg font-medium">${actualPrice}</p>
                    </span>
                </div>
                <button className="rounded-lg px-3 py-1 text-lg text-white duration-100 bg-slate-700 hover:bg-slate-600 active:bg-slate-800">
                        Add
                </button>
            </div>
        </div>
    );
};
