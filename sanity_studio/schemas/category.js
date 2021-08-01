export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug is used to create unique URLs',
      options: { 
        source: 'title',
      },
      validation: Rule => Rule.required(),
    },
  ],
}