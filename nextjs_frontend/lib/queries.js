const postFields = `
  _id,
  name,
  title,
  datetime,
  "slug": slug.current,
  "index": count(*[_type == "post" && !(_id in path("drafts.**")) && datetime > ^.datetime]) + 1
`;

// Site Settings
export const siteSettingsQuery = `
*[_type == "siteSettings"][0] {
  _id,
  title,
  url,
  description,
  "favicon": favicon.asset->,
  "image": image.asset->,
  twitterUsername,
  googleAnalyticsId
}`;

// Categor(-ies/-y)
export const categoriesQuery = `
*[_type == "category"] | order(_createdAt asc) {
  _id,
  title,
  "slug": slug.current
}`;

export const categoryQuery = `
*[_type == "category" && slug.current == $slug][0] {
  title
}`

// Posts
export const postsQuery = `
*[_type == "post"] | order(datetime desc) {
  ${postFields},
  excerpt
}`;

export const categoryPostsQuery = `
*[_type == "category" && slug.current == $slug][0] {
  "posts": *[_type == "post" && references(^._id)] | order(datetime desc) {
    ${postFields},
    excerpt
  }
}`

// A single post
export const postQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields},
  "category": category[]->,
  content[]{..., "asset": asset->}
}`;

// Slugs
export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current`;

export const categorySlugsQuery = `
*[_type == "category" && defined(slug.current)][].slug.current`;

// Post preview, see pages/api/preview.js
export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields},
  content
}`;
