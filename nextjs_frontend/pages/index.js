import { siteMetaQuery, categoryQuery, indexQuery } from '../lib/queries';
import { getClient } from '../lib/sanity.server';

import Layout from '../components/Layout';

export default function Index({ siteMeta, category, posts }) {
  const isPostsPage = true;
  const siteTitle = siteMeta[0].title;

  return (
    <Layout isPostsPage={isPostsPage} siteTitle={siteTitle} category={category} posts={posts} />
  )
}

export async function getStaticProps() {
  const siteMeta = await getClient().fetch(siteMetaQuery);
  const category = await getClient().fetch(categoryQuery);
  const posts = await getClient().fetch(indexQuery);

  return {
    props: { siteMeta, category, posts },
  }
}