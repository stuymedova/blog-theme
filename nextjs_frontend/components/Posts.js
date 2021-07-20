import Link from 'next/link';
import { parseISO, format } from 'date-fns';

import { pad } from '../utils/index';

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className='post' key={post._id}>
          <div className='post__id'>
            <p>{pad(post.postIndex || 0, 3)}</p>
          </div>

          <div className='post__body'>
            <Link as={`/posts/${post.slug}`} href='/posts/[post]'>
              <a>
                <div className='post__title'>{post.title}</div>
                <div className='post__excerpt'>{post.excerpt}</div>
              </a>
            </Link>  
          </div>

          <div className='post__date'>
            <p>{format(parseISO(post.date), 'MM.dd.yyyy')}</p>
          </div>
        </div>
      ))}
    </>
  )
}