/**
 * This is required for photos to be filtered
 */
import type { CollectionConfig } from 'payload/types'

const TestimonialImgs: CollectionConfig = {
  slug: 'testimonialImgs',
  upload: {
    staticURL: '/testimonialLogosImg',
    staticDir: 'assets/testimonialImgs',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  admin: {
    useAsTitle: 'alt',
  }
}
export default TestimonialImgs
