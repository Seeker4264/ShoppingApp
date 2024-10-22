import { query } from "./strapi";
import { ProductRaw } from "@/constants/Product";

const { STRAPI_HOST } = process.env

export function getProductsInfo() {
    return query("products?populate=cover").then(res => {
        return res.data.map((product: ProductRaw) => {
            const { title, description, cover, price, hasDiscount, discountPercentage } = product;
            const image = `${STRAPI_HOST}${cover.url}`;
            return { title, description, image, price, hasDiscount, discountPercentage };
        });
    });
};