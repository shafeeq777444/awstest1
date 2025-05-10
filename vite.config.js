import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:5177,
    allowedHosts: ['app2.bidly.store','app1.bidly.store', 'app3.bidly.store'],
  }
})
