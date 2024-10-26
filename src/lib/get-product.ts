import { query } from "./strapi";
import { ProductRaw } from "@/Types/Product";

const { STRAPI_HOST } = process.env

export function getProductInfo(prodId: number) {
    return query(`products?populate=cover&filters[productId][$eq]=${prodId}`).then(res => {
        return res.data.map((product: ProductRaw) => {
            const { title, description, cover, price, hasDiscount, discountPercentage, categoryId, productId } = product;
            const image = `${STRAPI_HOST}${cover.url}`;
            return { title, description, image, price, hasDiscount, discountPercentage, categoryId, productId };
        });
    });
};