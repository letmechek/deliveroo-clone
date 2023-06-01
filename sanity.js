import SanityClient from '@sanity/client';
import  ImageUrlBuilder  from "@sanity/image-url";


const client = SanityClient({
    projectId: "3js4nxpz",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-10-21',   
});
 
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client

// import {createClient} from '@sanity/client';

// export const client = createClient({
//     projectId: '3js4nxpz',
//     dataset: 'production',
//     useCdn: true, // set to `false` to bypass the edge cache
//     apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
//     token: 'sk3KrCrhOJ2e3Hxks1A2Au33XBG5C7Iu0cpwKDg0hVKnCdXGOQ3BQce9W13Hro69O197A3JkVo3RWJoHKgTt975UkuNJmcwl1CEYfjsG770R7ehO91BGMowsp71rX7zwNqMx1uw3RIU0G4cMaUwOkb97YeSHusX0LyEewffW8buHvjCj8p4x' // Only if you want to update content with the client
//   })

//   export async function getResteraunts() {
//     const data = await client.fetch(`*[_type == "featured"]{
//             ...,
//             resteraunt[]->{
//                 ...,
//                 dishes[]->
//                 }
//                 }`)
//     return data
//   }