import { siteSettingsQuery, categoriesQuery, categoryQuery, categoryPostsQuery, categorySlugsQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.server';

import Layout from '../components/Layout';

export default function Category({ siteSettings, categories, category, categoryPosts: {posts} }) {
  const isPostsPage = true;
  const pageTitle = category.title;

  return (
    <Layout isPostsPage={isPostsPage} pageTitle={pageTitle} siteSettings={siteSettings} categories={categories} posts={posts} />
  )
}

export async function getStaticProps({ params }) {
  const siteSettings = await sanityClient.fetch(siteSettingsQuery);
  const categories = await sanityClient.fetch(categoriesQuery);
  const category = await sanityClient.fetch(categoryQuery, {
    slug: params.category,
  });
  const categoryPosts = await sanityClient.fetch(categoryPostsQuery, {
    slug: params.category,
  });

  return {
    props: { siteSettings, categories, category, categoryPosts },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(categorySlugsQuery);
  
  return {
    paths: paths.map((category) => ({ params: { category } })),
    fallback: false,
  }
}
