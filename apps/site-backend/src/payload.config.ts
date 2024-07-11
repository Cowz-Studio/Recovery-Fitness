// biome-ignore lint/style/useNodejsImportProtocol: Biome is crying
import path from 'path'

import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Assets from './collections/Assets'
import Users from './collections/Users'
import About from './globals/About'
import Contact from './globals/Contact'
import Homepage from './globals/Homepage'
import Socials from './globals/Socials'
import Testimonials from './globals/Testimonials'
import TrainingOptions from './globals/TrainingOptions'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Assets],
  globals: [About, Contact, TrainingOptions, Testimonials, Homepage, Socials],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  csrf:[
    'http://localhost:4321/',
  ]
})
