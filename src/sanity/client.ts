import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: "gi8tc5qx",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export default client

const builder = imageUrlBuilder(client);
export function urlFor(source: string) {
    return builder.image(source);
}