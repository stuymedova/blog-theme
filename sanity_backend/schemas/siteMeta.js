export default {
  name: 'siteMeta',
  type: 'document',
  title: 'Site Meta',
  fields: [{
    name: 'title',
    title: 'Site Title',
    type: 'string',
    validation: Rule => Rule.required(),
  }],
}
