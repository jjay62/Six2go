import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

/** Absolute app dir — avoids wrong Turbopack root when parent dirs have other package-lock.json files */
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot,
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
