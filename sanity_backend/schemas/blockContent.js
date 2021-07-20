export default {
  name: 'blockContent',
  title: 'Block Content',
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
      title: 'Image',
      type: 'image',
      fields: [{
        title: 'Alternative Text',
        name: 'alt',
        type: 'string',
        options: {
          isHighlighted: true,
        },
      }],
    }
  ],
}
