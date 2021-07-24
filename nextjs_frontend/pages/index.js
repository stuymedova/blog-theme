import { siteSettingsQuery, categoryQuery, postsQuery } from '../lib/queries';
import { sanityClient } from '../lib/sanity.server';

import Layout from '../components/Layout';

export default function Index({ siteSettings, category, posts }) {
  const isPostsPage = true;

  return (
    <Layout isPostsPage={isPostsPage} siteSettings={siteSettings} category={category} posts={posts} />
  )
}

export async function getStaticProps() {
  const siteSettings = await sanityClient.fetch(siteSettingsQuery);
  const category = await sanityClient.fetch(categoryQuery);
  const posts = await sanityClient.fetch(postsQuery);

  return {
    props: { siteSettings, category, posts },
  }
}