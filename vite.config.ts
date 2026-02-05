import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false, // This is what causes the extra css to be added in the build while using vite-plugin-webfont-dl
  },
  plugins: [react(), webfontDownload()],
});
