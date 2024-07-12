/**
 * This needs:
 * 1. An optional description
 * 2. Image
 * 3. Testimonials, ordered
 */

/**
 * This needs information for connecting Sam's socials. 
 * Integration unknown so will need to come back for this one.
 *    An initial cursory look suggests we could use Instagram Basic Display API
 * At the minimum, Sam will need to be able to switch instagram 
 * accounts/handles should he want to change accounts/rebrand.
 * Could probably have handles and add/remove socials like FB, IG.
 * For now we will:
 * 1. Let him hardcode in socials - a handle and an image
 *    Then, we will see how we can integrate that with a 'preview' experience
 */

import type { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import type { GlobalConfig } from "payload/types";
import Assets from "../collections/Assets";

const Testimonials: GlobalConfig = {
  slug: 'testimonials',
  label: 'Testimonials',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'richText',
      label: 'The description for the testimonial section of the home page'
    },
    {
      name: 'testimony',
      type: 'array',
      fields: [
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          required: true,
          relationTo: Assets.slug,
        }
      ],
      admin:{
        components:{
          RowLabel: ({data, index}: RowLabelArgs) =>{
            return `Testimonial ${index}`
          }
        },
      },
    },
  ]
}

export default Testimonials