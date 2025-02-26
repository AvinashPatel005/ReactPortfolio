import { defineConfig } from 'vite';

import { VitePWA } from 'vite-plugin-pwa'; 

import react from '@vitejs/plugin-react'

export default defineConfig({

    plugins: [VitePWA(
     {
      manifest:{
        "short_name": "Portfolio",
        "name": "Avinash' Portfolio",
        "description":"Check out my portfolio!",
        "icons": [
          {
            "src": "logo.png",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "logo.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "logo.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#000000"
      ,
    },
    registerType: 'autoUpdate',
    includeAssets: ['**/*'],
      
     }
    ),react()], 

});
