import { query } from "./strapi";
import { CategoryRaw } from "@/Types/Category";

const { STRAPI_HOST } = process.env

export function getCategoryInfo(catId: number) {
    return query(`categories?populate=cover&filters[categoryId][$eq]=${catId}`).then(res => {
        return res.data.map((category: CategoryRaw) => {
            console.log(category);
            const { title, cover, categoryId } = category;
            const image = `${STRAPI_HOST}${cover.url}`;
            return { title, image, categoryId };
        });
    });
};