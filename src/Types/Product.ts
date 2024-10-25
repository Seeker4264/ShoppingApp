export type Product = {
    title: string;
    description: any;
    image: string;
    price: number;
    hasDiscount: boolean;
    discountPercentage: number;
    categoryId: number;
    productId: number;
};

export type ProductRaw = {
    title: string;
    description: any;
    cover: {
        url: string
    };
    price: number;
    hasDiscount: boolean;
    discountPercentage: number;
    categoryId: number;
    productId: number;
};