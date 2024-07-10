import type { GlobalConfig } from "payload/types";

const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage Content',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'upload',
      relationTo: 'assets',
      required: true,
      label: 'Hero Asset',
    },
    {
      name: 'heroText',
      type: 'text',
      required: true,
      label: 'Hero Text',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Trainer Name',
    },
    {
      name:'trainerPhoto',
      type: 'upload',
      relationTo: 'assets',
      required: true,
      label: 'Trainer Photo',
    }
  ],
}

export default Homepage