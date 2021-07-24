import { siteSettingsQuery, categoryQuery, categoryPostsQuery, categorySlugsQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.server';

import Layout from '../components/Layout';

export default function Category({ siteSettings, category, categoryPosts: {posts} }) {
  const isPostsPage = true;

  return (
    <Layout isPostsPage={isPostsPage} siteSettings={siteSettings} category={category} posts={posts} />
  )
}

export async function getStaticProps({ params }) {
  const siteSettings = await sanityClient.fetch(siteSettingsQuery);
  const category = await sanityClient.fetch(categoryQuery);
  const categoryPosts = await sanityClient.fetch(categoryPostsQuery, {
    slug: params.category,
  });

  return {
    props: { siteSettings, category, categoryPosts },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(categorySlugsQuery);
  
  return {
    paths: paths.map((category) => ({ params: { category } })),
    fallback: false,
  };
};