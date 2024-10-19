import { query } from "./strapi";

export function getHomeInfo() {
    return query("home").then(res => res.data);
};