# Getting started
Make sure to install mongodb locally or connect to it. 
You will need to create an .env file in apps/site-backend, following the .env.example.
Note that you should be able to find your URI when you install and run your local mongodb instance.
Your PAYLOAD_SECRET is your password. It can be anything you'd like it to be.
You will need pnpm installed, and turbo installed.
Make sure to do pnpm i to install the required dependencies.
# 
To run, simply type into terminal: turbo run dev
In some cases, where you intend on using custom packages (which are defined in /packages folder), you'll need to do turbo run build first then turbo run dev, as this compiles the TS files in JS for use, after you 
make changes to any packages.
Could use mise en place to manage environmental variables

Note that we should use SEO things such as plugins, etc