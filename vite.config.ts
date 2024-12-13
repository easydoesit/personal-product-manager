import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig(({mode}) => { 
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.ENV': JSON.stringify(env.ENV),
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    }
  }
})
