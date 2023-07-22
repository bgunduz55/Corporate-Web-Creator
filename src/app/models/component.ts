import { Image } from "./image";

export interface Component {
    id: number;
    title_TR?: string;
    text_TR?: string;
    title_EN?: string;
    text_EN?: string;
    rich_text_TR?: string;
    rich_text_EN?: string;
    description?: null;
    description_TR?: string;
    description_EN?: string;

    route_url?: null;
    category_TR?: null | string;
    category_EN?: null | string;
    image?: Image | null;
    tab_title_TR?: string;
    tab_title_EN?: string;
    icon?: null | string;
    name?: string;
}