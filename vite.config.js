import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // PWA support
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script-defer',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Frontier Properties',
        short_name: 'Frontier',
        description: 'Exceptional Living in Mora and Pine City, Minnesota',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/icon/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/icon/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ]
      }
    }),
    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    // Target modern browsers for better performance and smaller bundles
    target: 'es2015',
    // Minify using esbuild (fast and efficient)
    minify: 'esbuild',
    // Split CSS code
    cssCodeSplit: true,
    // Rollup options for chunk splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor dependencies into a separate chunk
          if (id.includes('node_modules')) {
            // Group vue dependencies
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue-vendor';
            }
            // Other vendors
            return 'vendor';
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Generate source maps for debugging (optional, set to false for smaller build)
    sourcemap: false,
  },
  esbuild: {
    // Drop console and debugger statements in production
    drop: ['console', 'debugger'],
  },
})
