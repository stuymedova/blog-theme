import BlockContent from '@sanity/block-content-to-react';
import { parseISO, format } from 'date-fns';
import { pad } from '../utils/index';

export default function Post({ post }) {
  return (
    <div className='post'>
      <div className='post__id'>
        <p>{pad(post.postIndex || 0, 3)}</p>
      </div>
      <div className='post__body'>
        <div className='post__title'>{post.title}</div>
        <BlockContent blocks={post.content} />
      </div>
      <div className='post__date'>
        <p>{format(parseISO(post.date), 'MM.dd.yyyy')}</p>
      </div>
    </div>
  )
}