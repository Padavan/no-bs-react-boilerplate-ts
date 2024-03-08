import { context } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

async function run() {
  const buildFolder = path.resolve('www');
  if (!fs.existsSync(buildFolder)) {
    await fs.promises.mkdir(buildFolder);
  }

  fs.promises.cp(
    path.resolve('public'),
    buildFolder,
    { recursive: true }
  );

  let ctx = await context({
    bundle: true,
    logLevel: "info",
    entryPoints: ["src/index.tsx"],
    outfile: "www/app.js",
    loader: { '.wav': 'file' },
    minify: false,
    format: 'esm',
    sourcemap: true,
  })

  await ctx.watch()

  await ctx.serve({
    servedir: 'www',
  })
}

run();
