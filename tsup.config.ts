import { defineConfig } from "tsup";
import type { Options } from "tsup";

export default defineConfig((options) => {
  const common: Options = {
    minify: !options.watch, // 除了dev都压缩
    splitting: false,
    sourcemap: true,
    bundle: true,
    clean: false,
    format: ["esm"],
    legacyOutput: false,
    external: [],
    noExternal: [],
    platform: "node",
    dts: true,
  };

  return [
    { ...common, entry: ["./src/index.ts"], outDir: "./dist" },
  ];
});
