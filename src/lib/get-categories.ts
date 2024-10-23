import { query } from "./strapi";
import { CategoryRaw } from "@/Types/Category";

const { STRAPI_HOST } = process.env

export function getCategoriesInfo() {
    return query("categories?populate=cover").then(res => {
        return res.data.map((category: CategoryRaw) => {
            const { title, cover, categoryId } = category;
            const image = `${STRAPI_HOST}${cover.url}`;
            return { title, image, categoryId };
        });
    });
};