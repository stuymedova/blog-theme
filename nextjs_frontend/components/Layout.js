import Link from 'next/link';

import Meta from './Meta';
import Navigation from './Navigation';
import Posts from './Posts';
import Post from './Post';

export default function Layout({ isPostsPage, siteTitle, category, posts, post }) {
  return (
    <>
      <Meta />

      <div id='content-wrapper'>
        <header>
          <Link href='/'>
            <a><h1>{siteTitle}</h1></a>
          </Link>
        </header>
        
        <Navigation isPostsPage={isPostsPage} category={category} />

        <main>
          {isPostsPage
            ? <Posts posts={posts} />
            : <Post post={post} />
          }
        </main>
      </div>
    </>
  )
}