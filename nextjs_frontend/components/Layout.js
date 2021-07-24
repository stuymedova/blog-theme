import Link from 'next/link';

import Meta from './Meta';
import Navigation from './Navigation';
import Posts from './Posts';
import Post from './Post';

export default function Layout({ siteSettings, isPostsPage, category, posts, post }) {
  return (
    <>
      <Meta siteSettings={siteSettings} />

      <div id='content-wrapper'>
        <header>
          <Link href='/'>
            <a><h1>{siteSettings.title}</h1></a>
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