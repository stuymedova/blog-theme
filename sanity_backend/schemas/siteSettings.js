export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fieldsets: [{
    name: 'socialMedia', 
    title: 'Social Media',
  }],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: Rule => Rule.required().uri(),
    }, // TODO: Makes sense to add more rigorous validation rules (RegEx)
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'file',
      description: 'Recommended favicon size: 32 x 32 pixels',
      options: {
        accept: 'image/*',
      },
    },
    {
      name: 'image',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Recommended image size: 1200 x 628 pixels',
      fieldset: 'socialMedia',
    },
    {
      name: 'twitterUsername',
      title: 'Twitter Username',
      type: 'string',
      fieldset: 'socialMedia',
    },
  ],
}
