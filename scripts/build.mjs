import esbuild from 'esbuild'
import { build } from 'vite'

await esbuild.build({
  entryPoints: ['pkgs/main/src/main.ts'],
  platform: 'node',
  bundle: true,
  external: ['electron', '@nekosu/maa-node'],
  outdir: './dist/main',
  minify: true,
  sourcemap: true
})
await build({ configFile: 'pkgs/preload/vite.config.ts' })
await build({ configFile: 'pkgs/render/vite.config.ts' })
