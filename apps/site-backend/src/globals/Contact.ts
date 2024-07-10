/**
 * This needs:
 * 1. Club name
 * 2. Club location
 * 3. Image (usually a map) OR some sort of interactive map component,
 *    noting that an interactive map component is overkill and doesn't
 *    bring much (if any) value. 
 * 4. Contact email, noting that we may need to use https://www.albionresearch.com/tools/obfuscator
 *    Read discussion: https://www.reddit.com/r/webdev/comments/120masy/contact_details_on_my_portfolio_website/
 * 5. Contact phone number
 * TODO: make required??
 */
import type { GlobalConfig } from "payload/types";

const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact Content',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'clubName',
      type: 'text',
    },
    {
      name: 'clubLocation',
      type: 'text',
    },
    {
      name: 'contactEmail',
      type: 'email',
    },
    {
      name: 'contactPhone',
      type: 'number', // This is bad, but payload does not have a phonenumber type. GG.
    }
  ]
}

export default Contact