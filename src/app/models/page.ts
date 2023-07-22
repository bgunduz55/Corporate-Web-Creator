import { Content } from './content';
import { Footer } from './footer';
import { Image } from './image';

export interface Page {
    id: number;
    title: null | string;
    routeUrl: string;
    description: null | string;
    content: Content | null;
    background_image: Image;
    header: Footer;
    footer: Footer;
    created_at: Date;
    updated_at: Date;
    title_TR: string;
    description_TR: string;
    title_EN: string;
    description_EN: string;
}