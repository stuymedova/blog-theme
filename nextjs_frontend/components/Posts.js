import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { pad } from '../utils/index';

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => {
        const { _id, index, slug, title, excerpt, datetime } = post;

        return (
          <div className='post' key={_id}>
            <div className='post__id'>
              <p>{pad(index, 3)}</p>
            </div>

            <div className='post__body'>
              <Link as={`/posts/${slug}`} href='/posts/[post]'>
                <a>
                  <h2 className='post__title'>{title}</h2>
                  <p className='post__excerpt'>{excerpt}</p>
                </a>
              </Link>
            </div>

            <div className='post__date'>
              <p>{format(parseISO(datetime), 'MM.dd.yyyy')}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}