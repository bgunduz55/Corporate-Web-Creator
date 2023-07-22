import { MediaType } from "./media-type";

export interface Format {
    thumbnail: MediaType;
    large:     MediaType;
    medium:    MediaType;
    small:     MediaType;
}