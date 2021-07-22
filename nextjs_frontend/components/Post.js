import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '../lib/sanity';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import { parseISO, format } from 'date-fns';
import { isInternalURL, pad } from '../utils/index';

export default function Post({ post }) {
  const serializers = {
    marks: {
      link: ({ mark: { href }, children }) => {
        return isInternalURL(href)
          ? <a href={href}>{children}</a>
          : <a href={href} target='_blank' rel='noopener noreferrer'>{children}</a>
      },
    },
    types: {
      imageBlock: ({ node: { asset, alt } }) => (
        <div className='image-wrapper'>
          <Image
            src={urlForImage(asset).url()}
            width={asset.metadata.dimensions.width}
            height={asset.metadata.dimensions.height}
            layout='responsive' sizes='auto' quality='100'
            alt={alt} />
        </div>
      ),
      embedBlock: ({ node: { url } }) => (
        <div className='embed-wrapper'>
          <ReactPlayer 
            width='100%' height='0'
            url={url}
            controls playsinline pip stopOnUnmount={false} />
        </div>
      ),
    },
  }
  
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