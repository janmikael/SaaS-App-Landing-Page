import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/SaaS-App-Landing-Page/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@images": "/images", // Create an alias for the images folder
    },
  },
});
