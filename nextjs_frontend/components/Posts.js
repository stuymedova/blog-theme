import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { pad } from '../lib/utils';

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => {
        const { _id, index, slug, title, excerpt, datetime } = post;

        return (
          <Link href={`/posts/${slug}`} key={_id}><a className='post-wrapper'>
            <div className='post'>
              <div className='post__id'>
                <p>{pad(index, 3)}</p>
              </div>

              <div className='post__date'>
                <p>{format(parseISO(datetime), 'MM.dd.yyyy')}</p>
              </div>

              <div className='post__body'>
                <h2 className='post__title'>{title}</h2>
                <p className='post__excerpt'>{excerpt}</p>
              </div>
            </div>
          </a></Link>
        )
      })}
    </>
  )
}