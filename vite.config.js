import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/SaaS-App-Landing-Page/" : "/",
  build: {
    assetsDir: "", // Ensures images are directly in /dist
  },
  plugins: [react()],
});
