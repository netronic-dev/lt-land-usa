module.exports = {
  // assetPrefix: "/version-b",
  assetPrefix: process.env.NODE_ENV === "production" ? "/version-b" : "",
  images: {
    domains: ["i.ytimg.com", "lasertag.net"],
    deviceSizes: [
      360, 400, 411, 450, 500, 576, 640, 750, 828, 1080, 1200, 1920,
    ],
    path: `${process.env.ASSET_PREFIX || ""}/_next/image`,
  },
};
