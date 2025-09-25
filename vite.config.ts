import path from 'path';
import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
  //     plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api/cv": {
  //       target: "https://script.google.com/macros/s/AKfycbyheWw0WwooFfBcutdq_iXnsRlBm73uDOlxKZPdtE5OoCTXAezqyrVfnzfcwzW9CwKt/exec",
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api\/cv/, "")
  //     }
  //   }
  // },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
