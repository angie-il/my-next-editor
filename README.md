# MY NEXT EDITOR

A simple web-based drawing editor built with Tldraw (https://tldraw.dev), powered by Next.js, TailwindCSS, Shadcn UI, and tRPC. Users can create and modify shapes on a canvas, and all changes are automatically saved via API using snapshot syncing.

###  Stack
- T3 Stack
  - Next.js (App Router)
  - TailwindCSS
  - tRPC
  - TypeScript
-  Tldraw
- 🎨 Shadcn UI


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

- Bootstrapped the project using the **T3 Stack**
- Removed Prisma and NextAuth since they weren’t needed
- Installed and configured Shadcn UI using npx shadcn@latest init
- Cleaned out boilerplate example files from T3 Stack
- Created the `/editor` page

### 🗓️ Day 2

- Created and configured the EditorPage using the Tldraw component
- Added the button to modify the shape of the Tldraw canvas
- Implemented the getDocument API endpoint with tRPC to retrieve the stored snapshot

### 🗓️ Day 3

- Implemented error and loading state handling for the EditorPage using isLoading and isError
- Added conditional rendering to show a loading screen or error message when the API request is pending or fails

### 🗓️ Day 4

- Added updateDocument API mutation using tRPC to persist snapshots from the editor
- Created a debounce mechanism using a custom useDebounce hook to reduce mutation spam
- Implemented hashing (via JSON.stringify) to prevent unnecessary mutations when no real changes occurred
- Ensured shapes reappear on page refresh via snapshot loading from API or localStorage
- Finalized basic structure and ensured everything works with a clear setup

### 🗓️ Day 5

- ✅ NEW Added "Clear All" button

  - Allows users to instantly remove all shapes from the canvas
  - Helpful for resetting the board before starting a new drawing
- Added tailwind css for a better mobile experience
- Deployed in Vercel https://my-next-editor.vercel.app/
 
### 🚀 Setup Instructions

1. Clone the repo
```
git clone https://github.com/angie-il/my-next-editor.git
cd my-next-editor
```

2. Install dependencies
```
npm install
```

3. Run the app locally
```
npm run dev
```

Visit http://localhost:3000/ and start drawing!

### How to Test API Calls
  This project uses tRPC. Here's how to see the API in action:
  - Snapshot saving happens automatically when the editor updates.
  - API requests can be logged in the terminal (look for console logs like "Saving snapshot to memory store").

* Example
  ```
  [TRPC] document.updateDocument took 400ms to execute
   POST /api/trpc/document.updateDocument?batch=1 200 in 426ms
  Saving snapshot to memory store: {
    document: {
      store: {
        'page:page': [Object],
        'document:document': [Object],
        'shape:8e-vYcznmDCysGJKTUBBm': [Object]
      },
      schema: { schemaVersion: 2, sequences: [Object] }
    },
    session: {
      version: 0,
      currentPageId: 'page:page',
      exportBackground: true,
      isFocusMode: false,
      isDebugMode: false,
      isToolLocked: false,
      isGridMode: false,
      pageStates: [ [Object] ]
    }
  }


### 📚 Resosurces Used
This project was built using knowledge and examples from the following sources:

- Tldraw Documentation
- Shadcn UI Documentation
- TailwindCSS Documentation
- tRPC Documentation
- Next.js Documentation
- Stack Overflow
- MDN Web Docs
- W3Schools
- MiduDev courses
- ChatGPT for testing, debugging and generating examples.
