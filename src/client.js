import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const REACT_APP_SANITY_PROJECT_ID = import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID;
const REACT_APP_SANITY_TOKEN = import.meta.env.VITE_REACT_APP_SANITY_TOKEN;

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
