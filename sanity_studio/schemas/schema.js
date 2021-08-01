import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettings from './siteSettings'
import blockContent from './blockContent'
import post from './post'
import category from './category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteSettings,
    post,
    category,
    blockContent
  ]),
})
