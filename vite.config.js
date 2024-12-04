import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: './',
    build: {
        rollupOptions: {
            input: './src/index.jsx', // Adjust this to match your entry file
        },
    },
    server: {

        proxy: {
            '/api': {
                target: 'http://admin.queensecglobal.com',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
