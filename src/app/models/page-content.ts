import { Component } from "./component";
import { Product } from './product';

export interface PageContent {
    __component: string;
    id: number;
    components?: Component[];
    products?: Product[];
    rich_text_TR?: string;
    rich_text_EN?: string;
}