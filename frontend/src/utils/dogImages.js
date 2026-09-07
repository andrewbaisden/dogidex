/** Build a public URL for a dog image slug from the DB (e.g. "siberian_husky"). */
export const dogImageSrc = (slug) =>
	slug ? `/dogs_transparent/${slug}.png` : '';
