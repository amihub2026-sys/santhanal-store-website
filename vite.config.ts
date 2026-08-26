import vinext from "vinext";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import { sites } from "./build/sites-vite-plugin";

const isCodexSeatbeltSandbox =
  process.env.CODEX_SANDBOX === "seatbelt";

const isProduction =
  process.env.NODE_ENV === "production";

export default defineConfig({
  server: {
    host: "0.0.0.0",

    allowedHosts: ["terminal.local"],

    ...(isCodexSeatbeltSandbox
      ? {
          watch: {
            useFsEvents: false,
            usePolling: true,
          },
        }
      : {}),
  },

  plugins: [
    tailwindcss(),

    vinext(),

    sites(),

    ...(isProduction
      ? [
          nitro({
            preset: "vercel",
          }),
        ]
      : []),
  ],
});