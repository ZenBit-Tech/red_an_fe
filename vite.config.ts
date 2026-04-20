import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyTarget =
    env.VITE_DEV_PROXY_TARGET?.trim() || env.VITE_API_URL?.trim() || "";

  const proxy = proxyTarget
    ? {
        "/de-identification": {
          target: proxyTarget,
          changeOrigin: true,
        },
        "/api": {
          target: proxyTarget,
          changeOrigin: true,
        },
        "/api-json": {
          target: proxyTarget,
          changeOrigin: true,
        },
      }
    : undefined;

  return {
    plugins: [react()],
    server: {
      proxy,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
