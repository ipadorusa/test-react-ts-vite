import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: "/dist",
      lib: {
        name: "calendar",
        entry: resolve(__dirname, "src/app.tsx"),
        formats: ["es"],
        fileName: "app",
      },
      minify: "esbuild",
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:math";
            @import "${resolve(__dirname, "src/styles")}/abstracts/_functions.scss";
            @import "${resolve(__dirname, "src/styles")}/abstracts/_mixins.scss";
            @import "${resolve(__dirname, "src/styles")}/abstracts/_variables.scss";
          `,
        },
      },
    },
  };
});
