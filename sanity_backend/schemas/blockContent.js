export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      marks: {
        decorators: [],
        annotations: [{
          title: 'URL',
          name: 'link',
          type: 'object',
          fields: [{
            title: 'URL',
            name: 'href',
            type: 'url',
          }],
        }],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
