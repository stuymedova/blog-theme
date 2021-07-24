export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [{
          name: 'link',
          title: 'URL',
          type: 'object',
          fields: [{
            name: 'href',
            title: 'URL',
            type: 'url',
            validation: Rule => Rule.required().uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
          }],
        }],
      },
    },
    {
      name: 'imageBlock',
      title: 'Image',
      type: 'image',
      fields: [{
        name: 'alt',
        title: 'Alternative text',
        type: 'string',
        description: 'Important for SEO and accessibility',
        options: {
          isHighlighted: true,
        },
      }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'embedBlock',
      title: 'Embed',
      type: 'object',
      fields: [{
        name: 'url',
        title: 'URL',
        type: 'url',
        description: 'Supported platforms: YouTube, Vimeo, SoundCloud',
        validation: Rule => Rule.required().uri(),
      }],
    },
    {
      name: 'videoBlock',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'audioBlock',
      title: 'Audio',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'fileBlock',
      title: 'Other',
      type: 'file',
      validation: Rule => Rule.required(),
    },
  ],
}
