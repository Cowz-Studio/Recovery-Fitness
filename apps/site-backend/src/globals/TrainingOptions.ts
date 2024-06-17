/**
 * This needs:
 * 1. Title
 * 2. Rich text description
 * 
 */
import type { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import type { GlobalConfig } from "payload/types";

const TrainingOptions: GlobalConfig = {
  slug: 'trainingOptions',
  label: 'Training Options',
  
  fields: [
    {
      name: 'trainingOption',
      type: 'array',
      fields:[
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'richText',
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

export default TrainingOptions