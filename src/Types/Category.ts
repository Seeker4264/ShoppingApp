export type Category = {
    title: string;
    image: string;
    categoryId: number;
};

export type CategoryRaw = {
    title: string;
    cover: {
        url: string
    };
    categoryId: number;
};