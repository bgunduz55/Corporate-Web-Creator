import { PageContent } from './page-content';
import { Component } from './component';
import { Image } from './image';

export interface Content {
    id: number;
    created_at: Date;
    updated_at: Date;
    page: number;
    page_contents: PageContent[];

    __component: string;
    components?: Component[];
    title_TR?: string;
    title_EN?: string;
    subtitle_TR?: string;
    subtitle_EN?: string;
    button_text_TR?: string;
    button_text_EN?: string;
    button_URL?: null;
    rich_text_TR?: string;
    rich_text_EN?: string;
    background_img?: Image;
    video_url?: string;
}