import { siteMetaQuery, postQuery, postSlugsQuery } from '../../lib/queries';
import { usePreviewSubscription } from '../../lib/sanity';
import { sanityClient, getClient } from '../../lib/sanity.server';

import Alert from '../../components/Alert';
import Layout from '../../components/Layout';

export default function Post({ siteMeta, data = {}, preview }) {
  const slug = data?.post?.slug;
  const {
    data: { post },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  const isPostsPage = false;
  const siteTitle = siteMeta[0].title;

  return (
    <>
      <Alert preview={preview} />
      <Layout isPostsPage={isPostsPage} siteTitle={siteTitle} post={post} />
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const siteMeta = await sanityClient.fetch(siteMetaQuery);
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.post,
  });

  return {
    props: { siteMeta, data: { post }, preview },
  };
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  
  return {
    paths: paths.map((post) => ({ params: { post } })),
    fallback: false,
  };
};
