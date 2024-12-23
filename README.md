## Project: Santa's Workshop with Feature Flags

I've created a Christmas-themed Next.js v15 app using the App Router, showcasing a creative way to use feature flags with DevCycle SDK. Integrations with Clerk for authentication, Neon DB for database ops, and style it with Tailwind CSS and shadcn/ui components. The app will be a "Santa's Workshop" where elves can toggle different Christmas preparations based on feature flags.

## Getting Started

This setup creates a Christmas-themed "Santa's Workshop" application that uses feature flags to control various Christmas preparations. Here's a breakdown of the key features:

1. Authentication is handled by Clerk.
2. The main workshop interface uses DevCycle for feature flags. The `isChristmasEve` flag, when true, disables all controls, simulating the rush of Christmas Eve.
3. The workshop activities (toy making, gift wrapping, sleigh maintenance) are stored in a Neon DB and can be toggled on/off by the elves.
4. The UI is styled with Tailwind CSS and shadcn/ui components, with a Christmas color scheme (green and red gradient background).
5. A festive snowfall effect is added to enhance the Christmas theme.

First, set up db schema and create env vars:
Add .gitignore and MIT Lic.

### environment vars setup

```bash
# .env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

DEVCYCLE_SERVER_SDK_KEY=your_devcycle_server_key
NEXT_PUBLIC_DEVCYCLE_CLIENT_KEY=your_devcycle_client_key
```

Set up prisma schema for storing model:

```
fields: activity and enabled

clone repo and run npm i, then npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

## Bugfixes and future features

ALready working on v.02, fixing some bugs and potentially adding a conversational feature.

## Coffee Donations & Contributions

Feel free to get in contact if would like to contribute to the project. Thanks!

## Deploy on Vercel
