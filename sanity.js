import createImageUrlBuilder from '@sanity/image-url';
import {createCurrentUserHook, createClient} from 'next-sanity';

export const sanityConfig = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV !== 'production',
	apiVersion: '2021-03-25',
}

export const sanityClient = createClient(sanityConfig)

export const urlFor = (source) => createImageUrlBuilder(sanityConfig).image(source)
