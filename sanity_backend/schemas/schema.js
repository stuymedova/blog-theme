import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteMeta from './siteMeta'
import blockContent from './blockContent'
import post from './post'
import category from './category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteMeta,
    post,
    category,
    blockContent
  ]),
})
