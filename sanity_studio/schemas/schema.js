import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettings from './siteSettings'
import post from './post'
import blockContent from './blockContent'
import category from './category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteSettings,
    post,
    blockContent,
    category
  ]),
})
