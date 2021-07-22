import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '../lib/sanity';
import Image from 'next/image';
import getVideoId from 'get-video-id';
import { parseISO, format } from 'date-fns';
import { pad } from '../utils/index';

export default function Post({ post }) {
  const serializers = {
    marks: {
      link: ({ mark: { href }, children }) => {
        const isInternalURL = (href) => {
          try {
            const url = new URL(href, window.location.origin);
            return url.hostname === window.location.hostname;
          } catch {
            return false;
          }
        };

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
      embedBlock: ({ node: { url } }) => {
        const videoId = getVideoId(url).id;

        // YOUTUBE
        if(url.includes('youtube')) {
          return (
            <div className='embed-wrapper'>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                allowFullScreen />
            </div>
          )
        }
        // VIMEO
        if(url.includes('vimeo')) {
          return (
            <div className='embed-wrapper'>
              <iframe
                src={`https://player.vimeo.com/video/${videoId}`} 
                title='Vimeo video player'
                allow='autoplay; fullscreen; picture-in-picture'
                allowFullScreen />
            </div>
          )
        }
        // SOUNDCLOUD
        if(url.includes('soundcloud')) {
          return (
            <div className='embed-wrapper'>
              <iframe
                src={`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
                title='SoundCloud audio player'
                scrolling='no' allow='autoplay' />
            </div>
          )
        }
        return null;
      },
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