import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

const IS_PROD = process.env.NODE_ENV === "production";
const ORIGIN_BASE = "https://static.ruguoapp.com/jk-transition-page/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: /^~/, replacement: "" },
    ],
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import React from 'react'`,
  },
  base: IS_PROD ? ORIGIN_BASE : "",
});
