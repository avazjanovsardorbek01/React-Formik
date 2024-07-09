import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/*" },
      { find: "@pages", replacement: "/src/pages/index.jsx" },
      { find: "@service", replacement: "/src/service/index.js" },
      { find: "@modal", replacement: "/src/components/modal" },
      { find: "@validation", replacement: "/src/components/utils/validation.jsx" },
      { find: "@global-interface", replacement: "/src/interfaces/global.ts" },
      { find: "@service", replacement: "/src/service" },
      { find: "@router", replacement: "/src/router" },
      { find: "@pages", replacement: "/src/pages" },
    ],
  },
})
