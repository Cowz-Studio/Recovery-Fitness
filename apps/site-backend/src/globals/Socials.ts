import type { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import type { GlobalConfig } from "payload/types";

const Socials: GlobalConfig = {
  slug: 'socials',
  label: 'Socials',
  access: {
    read: () => true,
    update: () => true,
  },
  fields:[
    {
      name: 'socials',
      type: 'array',
      fields:[
        {
          name: 'title',
          type: 'text',
          required: true
        },
        {
          name: 'url',
          type: 'text',
          required: true
        },
        {
          name: 'show',
          type: 'checkbox',
          defaultValue: false
        }
      ],
      admin:{
        components:{
          RowLabel: ({data, index}: RowLabelArgs) =>{
            return data.title
          }
        },
      },
    },
  ]
}
export default Socials