import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['pkgs/main/src/main.ts'],
  platform: 'node',
  bundle: true,
  external: ['electron', '@nekosu/maa-node'],
  outdir: './dist/main',
  minify: true,
  sourcemap: true
})
