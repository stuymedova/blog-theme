const postFields = `
  _id,
  name,
  title,
  date,
  "slug": slug.current,
  "postIndex": count(*[_type == "post" && !(_id in path("drafts.**")) && _createdAt > ^._createdAt]) + 1
`;


export const siteMetaQuery = `
*[_type == "siteMeta"] {
  _id,
  title
}`;

export const categoryQuery = `
*[_type == "category"] | order(date desc, _updatedAt desc) {
  _id,
  title,
  "slug": slug.current
}`;


export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields},
  excerpt
}`;

export const categoryPostsQuery = `
*[_type == "post" && category._ref in *[_type == "category" && slug.current == $slug]._id] | order(date desc, _updatedAt desc) {
  ${postFields},
  excerpt
}`;


// TODO: Why is there order in the query?
// TODO: Change to "order(date desc, _updatedAt desc)" - ?
export const postQuery = `
*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
  ${postFields},
  content
}`;


export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current`;

export const categorySlugsQuery = `
*[_type == "category" && defined(slug.current)][].slug.current`;


// used in preview, see pages/api/preview.js
export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields},
  content
}`;
