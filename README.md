# Create T3 App

# MY NEXT EDITOR

A simple web-based drawing editor built with Tldraw (https://tldraw.dev), powered by Next.js, TailwindCSS, Shadcn UI, and tRPC. Users can create and modify shapes on a canvas, and all changes are automatically saved via API using snapshot syncing. Built as a technical test to demonstrate frontend architecture, performance optimization, and type-safe fullstack development.

### 🗓️ Day 1

- Played around with tldraw (https://tldraw.dev) to get familiar with it
- Installed Tldraw as a React component:

  ```tsx
  import { Tldraw } from "tldraw";
  import "tldraw/tldraw.css";

  export function App() {
    return <Tldraw />;
  }
  ```

- Bootstrapped the project using the **T3 Stack** for a clean setup with:
  - Next.js (App Router)
  - TailwindCSS
  - tRPC
  - TypeScript
- Removed Prisma and NextAuth since they weren’t needed
- Installed and configured Shadcn UI
- Cleaned out boilerplate example files from T3 Stack
- Created the `/editor` page
