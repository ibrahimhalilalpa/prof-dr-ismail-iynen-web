import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// src/lib/sanity.ts
export const client = createClient({
    projectId: "yzsls6vd", // Terminaldeki ID
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
    return builder.image(source);
}