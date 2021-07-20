import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '../lib/sanity';
import { parseISO, format } from 'date-fns';
import { pad } from '../utils/index';

export default function Post({ post }) {
  const serializers = {
    types: {
      image: ({ node: { asset, alt } }) => (
        <picture>
          <img
            srcSet={`
              ${urlForImage(asset).width(400)} 400w,
              ${urlForImage(asset).width(600)} 800w,
              ${urlForImage(asset).width(1024)} 1024w,
              ${urlForImage(asset).width(1200)} 1200w,
              ${urlForImage(asset).width(1600)} 1600w`}
            sizes='auto'
            src={urlForImage(asset)}
            alt={alt} />
        </picture>
      ),
    }
  };

  // TODO: open external links in a new tab (target='_blank' rel='noopener noreferrer')
  
  return (
    <div className='post'>
      <div className='post__id'>
        <p>{pad(post.postIndex || 0, 3)}</p>
      </div>
      <div className='post__body'>
        <div className='post__title'>{post.title}</div>
        <BlockContent blocks={post.content} serializers={serializers} 
          className='post__content' />
      </div>
      <div className='post__date'>
        <p>{format(parseISO(post.date), 'MM.dd.yyyy')}</p>
      </div>
    </div>
  )
}