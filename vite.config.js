

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react(),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/react/index.jsx',
                'resources/js/react/app.jsx' // Ensure you're pointing to correct React files
            ],
            refresh: true,
        }),
    ],
    esbuild: {
        loader: 'jsx', 
    },
    server: {
        watch: {
            usePolling: true,
            interval: 1000,
            host: '127.0.0.1',
            port: 5173, // You can choose any open port here          
        }, proxy: {
        

            '/api': {
              target: 'http://127.0.0.1:8000/api/', // Backend server
              changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },

        },
       

    },
});

// php artisan route:clear
// php artisan route:cache
// php artisan serve --host 192.168.93.3 --port 80