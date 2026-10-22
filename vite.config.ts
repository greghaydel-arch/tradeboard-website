import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";
import fs from "node:fs";
import { publicTitles } from "./src/web/public-routes";

const publicAssets = ["favicon.ico", "brand-mark.png", "brand-mark-96.png", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "_headers", "_redirects", "404.html"];

export default defineConfig(({ mode, command }) => {
  const review = mode === "review";

  return {
    // Optional visitor analytics remain disabled pending vendor/privacy approval.
    // Source assets are available only on the loopback development server.
    // Every build uses the explicit emitted-asset allowlist below.
    publicDir: command === "serve" ? "public" : false,
    plugins: [react(), tailwind(), {
      name: "allowlisted-public-assets",
      transformIndexHtml: {
        order: "pre", handler(html) {
          html = html.replace(/\r\n?/g, "\n");
          return review ? html.replace("/src/web/main.tsx", "/src/web/review-main.tsx") : html;
        }
      },
      generateBundle() {
        const assets = review ? [...publicAssets, "logo-candlestick.png", "tradeboard_icon_final.png", "android-chrome-192x192.png", "android-chrome-512x512.png", "feature-broker.png", "feature-devices.png", "feature-psychology.png", "feature-replay.png", "hero-dashboard.png", "og-image.png"] : publicAssets;
        for(const fileName of assets) {
          const source = path.resolve(__dirname, "public", fileName);
          if(fs.lstatSync(source).isSymbolicLink() || !fs.realpathSync(source).startsWith(fs.realpathSync(path.resolve(__dirname, "public")) + path.sep)) throw new Error("Unsafe public asset");
          this.emitFile({ type: "asset", fileName, source: fs.readFileSync(source) });
        }
      },
      writeBundle(options) {
        if(review) return;
        // Physical route documents avoid a catch-all SPA rewrite exposing
        // review URLs as successful public pages or looping on index.html.
        const output = path.resolve(options.dir!);
        const html = fs.readFileSync(path.join(output, "index.html"), "utf8");
        for(const [route, title] of Object.entries(publicTitles)) {
          const destination = path.join(output, route === "/" ? "" : route.slice(1));
          fs.mkdirSync(destination, { recursive: true });
          const escaped = `TradeBoard — ${title}`.replaceAll("&", "&amp;");
          fs.writeFileSync(path.join(destination, "index.html"), html
            .replace(/<title>.*?<\/title>/, `<title>${escaped}</title>`)
            .replace(/(<meta property="og:title" content=")[^"]+/, `$1${escaped}`)
            .replaceAll('https://trade-board.net/"', `https://trade-board.net${route === "/" ? "/" : route + "/"}"`));
        }
      },
    }],
    build: {
      outDir: review ? "review-dist" : "dist",
      rollupOptions: { input: path.resolve(__dirname, "index.html") },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/web"),
      },
    },
    server: {
      host: "127.0.0.1",
      hmr: { overlay: false },
      cors: false,
    },
  };
});
