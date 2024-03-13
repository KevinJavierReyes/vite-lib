import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "heatmap-warehouse",
      fileName: (format) => `heatmap-warehouse.${format}.js`,
    },
  },
  server: {
    open: "/example/index.html",
  },
  resolve: {
    alias: {
      "heatmap-warehouse": resolve(__dirname, "src/main.js"),
    },
  },
});
