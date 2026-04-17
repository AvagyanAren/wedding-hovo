/** @type {import('next').NextConfig} */
const rawBase = process.env.BASE_PATH ?? "";
const basePath =
  rawBase === ""
    ? ""
    : rawBase.startsWith("/")
      ? rawBase
      : `/${rawBase}`;

const nextConfig = {
  reactStrictMode: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  ...(process.env.STATIC_EXPORT === "true"
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
