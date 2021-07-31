import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { pad } from '../lib/utils';
import { useTrail, animated } from '@react-spring/web';
import { cubicOut } from 'eases-jsnext';

export default function Posts({ posts }) {

  const trail = useTrail(posts.length, { 
    from: { y: 30, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 600, easing: cubicOut },
  });

  return (
    <>
      {trail.map((styles, i) => {
        const { _id, index, slug, title, excerpt, datetime } = posts[i];

        return (
          <animated.div className='post-wrapper' key={_id} style={styles}>
            <Link href={`/posts/${slug}`}>
              <a className='post'>
                <div className='post__id'>
                  <p>{pad(index, 3)}</p>
                </div>

                <div className='post__date'>
                  <p>{format(parseISO(datetime), 'MM.dd.yyyy')}</p>
                </div>

                <div div className='post__body'>
                  <h2 className='post__title'>{title}</h2>
                  <p className='post__excerpt'>{excerpt}</p>
                </div>
              </a>
            </Link>
          </animated.div>
        )
      })}
    </>
  );
};