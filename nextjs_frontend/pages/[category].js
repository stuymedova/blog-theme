import { siteMetaQuery, categoryQuery, categoryPostsQuery, categorySlugsQuery } from '../lib/queries';
import { sanityClient, getClient } from '../lib/sanity.server';

import Layout from '../components/Layout';

export default function Category({ siteMeta, category, posts }) {
  const isPostsPage = true;
  const siteTitle = siteMeta[0].title;

  return (
    <Layout isPostsPage={isPostsPage} siteTitle={siteTitle} category={category} posts={posts} />
  )
}

export async function getStaticProps({ params }) {
  const siteMeta = await getClient().fetch(siteMetaQuery);
  const category = await getClient().fetch(categoryQuery);
  const posts = await getClient().fetch(categoryPostsQuery, {
    slug: params.category,
  });

  return {
    props: { siteMeta, category, posts },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(categorySlugsQuery);
  
  return {
    paths: paths.map((category) => ({ params: { category } })),
    fallback: false,
  };
};


// TODO: Why is getClient() used on a homepage instead of sanityClient?