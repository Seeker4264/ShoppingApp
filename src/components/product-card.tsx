import Image from "next/image";
import { Product } from "@/constants/Product";

export default function productCard(product: Product) {
    if (!product) return null;

    let actualPrice = product.price;
    if(product.hasDiscount) {
        actualPrice = product.price - (product.price * (product.discountPercentage / 100));
    };

    return (
        <div className="grid grid-rows-2 grid-cols-1 rounded-xl w-fit p-4 h-[21rem] shadow-lg duration-150 hover:scale-105">
            <Image
                className="rounded-md justify-self-center object-cover max-w-[14rem] h-[10rem]"
                src={product.image}
                width={240}
                height={240}
                alt={`${product.title}-image`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                
            <div className="flex flex-row justify-between items-end p-2">
                <div className="[&>h3]:text-4xl [&>h3]:text-slate-900 [&>h3]:py-1 [&>h3]:font-medium [&>p]:font-normal">
                    <h3>{product.title}</h3>
                    <span>
                        {product.hasDiscount &&
                        <p className="line-through text-gray-400">${product.price}</p>}
                        <p className="text-lg font-medium">${actualPrice}</p>
                    </span>
                </div>
                <button className="rounded-lg px-3 py-1 text-lg text-white duration-100 bg-slate-800 hover:bg-slate-700 active:bg-slate-900">
                        Add
                </button>
            </div>
        </div>
    );
};
