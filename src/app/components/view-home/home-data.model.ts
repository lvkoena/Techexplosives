export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    total: number;
    category:{
        categoryId: number;
        categoryName: string;
    };
    Image: {
        imageId: string;
        imageUrl: string;
    };
}