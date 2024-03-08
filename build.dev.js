import { context } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

/***
 * @type {import("esbuild").BuildOptions}
 **/
const BUILD_OPTIONS = {
  bundle: true,
  logLevel: "info",
  entryPoints: ["src/index.tsx"],
  outfile: "www/app.js",
  minify: false,
  format: 'esm',
  sourcemap: true,
  loader: {
    '.wav': 'file',
    '.woff': 'dataurl',
    '.svg': 'dataurl',
  },
  logLevel: "info"
};

/***
 * @type {import("esbuild").ServeOptions}
 **/
const SERVICE_OPTIONS = {
  servedir: 'www',
  fallback: 'www/index.html',
  host: "127.0.0.1",
  port: "3000",
}

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

  let ctx = await context(BUILD_OPTIONS)
  await ctx.watch()
  await ctx.serve(SERVICE_OPTIONS)
}

run();
