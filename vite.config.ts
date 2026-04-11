import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: 'react-devtools-standalone-hook',
      apply: 'serve',
      transformIndexHtml(html) {
        return html.replace(
          '<meta charset="UTF-8" />',
          '<meta charset="UTF-8" />\n    <script src="http://localhost:8097"></script>',
        )
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __REACT_DEVTOOLS_STANDALONE__: JSON.stringify(command === 'serve'),
  },
}))
