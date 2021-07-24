import S from '@sanity/desk-tool/structure-builder';

export default () => 
  S.list()
    .title('Content')
    .showIcons(false)
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Posts')
        .child(
          S.documentList()
            .title('Posts')
            .showIcons(false)
            .filter('_type == "post"')
            .defaultOrdering([
              { field: 'datetime', direction: 'desc' }
            ])
        ),
      S.listItem()
        .title('Categories')
        .child(
          S.documentList()
            .title('Category')
            .showIcons(false)
            .filter('_type == "category"')
            .defaultOrdering([
              { field: '_createdAt', direction: 'asc' } // TODO: check, currently displayed in descending order, may be a caching issue
            ])
        ),
      ...S.documentTypeListItems().filter(
        listItem => !['siteSettings', 'post', 'category'].includes(listItem.getId()))
    ])