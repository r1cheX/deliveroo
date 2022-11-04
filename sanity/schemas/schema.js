// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './category'
import restaurant from './restaurant'
import feauterd from './feauterd'
import dish from './dish'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    restaurant,
    category,
    dish,
    feauterd
  ]),
})
