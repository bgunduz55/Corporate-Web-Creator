import { Image } from "./image";

export interface Product {
    id: number;
    title: string;
    commercial_form: string;
    created_at: Date;
    updated_at: Date;
    active_substances: number;
    group: number;
    image: Image;
}