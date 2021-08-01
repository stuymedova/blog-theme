export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'category' }],
      }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'datetime',
      title: 'Date and time',
      type: 'datetime',
      description: 'Time will not be displayed, but is needed to properly order multiple posts published on the same day',
      options: {
        dateFormat: 'MM.DD.YYYY',
        timeFormat: 'hh:mm A',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required(),
    },
  ],
}
