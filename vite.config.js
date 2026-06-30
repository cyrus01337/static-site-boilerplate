import path from "path";

import { defineConfig } from "vite";

export default defineConfig({
    clearScreen: false,
    preview: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            "~": path.resolve("./src"),
        },
    },
    server: {
        host: true,
        port: 3000,
    },
});
