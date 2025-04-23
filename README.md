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
- Installed and configured Shadcn UI using npx shadcn@latest init
- Cleaned out boilerplate example files from T3 Stack
- Created the `/editor` page

### 🗓️ Day 2

- Created and configured the EditorPage using the Tldraw component
- Changed the button to update the shape from the Tldraw documentation
- Connected the UI to the Tldraw canvas (positioned button with TailwindCSS)
- Implemented the getDocument API endpoint with tRPC to retrieve the stored snapshot

### 🗓️ Day 3

- Implemented error and loading state handling for the EditorPage using isLoading and isError
- Added conditional rendering to show a loading screen or error message when the API request is pending or fails
- Ensured user feedback during snapshot retrieval with friendly UI messages

### 🗓️ Day 4

- Added updateDocument API mutation using tRPC to persist snapshots from the editor
- Created a debounce mechanism using a custom useDebounce hook to reduce mutation spam
- Implemented hashing (via JSON.stringify) to prevent unnecessary mutations when no real changes occurred
- Ensured shapes reappear on page refresh via snapshot loading from API or localStorage
- Finalized basic structure and ensured everything works with a clear setup
