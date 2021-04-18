import { movie } from "./movie"

export interface listMovies {
    slug: String;
    title: String;
    items: item;
}

export interface item {
    page: Number;
    results: movie[];
    total_pages: Number;
    total_results: Number;
}