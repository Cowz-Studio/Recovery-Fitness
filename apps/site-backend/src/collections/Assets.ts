/**
 * This is required for photos to be filtered
 */
import type { CollectionConfig } from 'payload/types'

const Assets: CollectionConfig = {
  slug: 'assets',
  upload: {
    staticURL: '/assets',
    staticDir: 'assets/',
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'alt',
  },
}
export default Assets
