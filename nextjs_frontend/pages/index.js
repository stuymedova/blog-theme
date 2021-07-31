import { siteSettingsQuery, categoriesQuery, postsQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.server';

import Layout from '../components/Layout';

export default function Index({ siteSettings, categories, posts }) {
  const isPostsPage = true;

  return (
    <Layout isPostsPage={isPostsPage} siteSettings={siteSettings} categories={categories} posts={posts} />
  )
}

export async function getStaticProps() {
  const siteSettings = await sanityClient.fetch(siteSettingsQuery);
  const categories = await sanityClient.fetch(categoriesQuery);
  const posts = await sanityClient.fetch(postsQuery);

  return {
    props: { siteSettings, categories, posts },
  }
}
