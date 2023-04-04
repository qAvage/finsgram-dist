import { defineConfig } from "vite"
import { ViteAliases } from 'vite-aliases'
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true }
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(), ViteAliases()],
})