import Categories from "@/app/categories/page";
import { query } from "./strapi";

const { STRAPI_HOST } = process.env

type Category = {
    title: string;
    cover: {
        url: string
    };
};

export function getCategoriesInfo() {
    return query("categories?populate=cover").then(res => {
        return res.data.map((category: Category) => {
            const { title, cover } = category;
            const image = `${STRAPI_HOST}${cover.url}`;
            return { title, image };
        });
    });
};