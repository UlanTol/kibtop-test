const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { withSuperjson } = require("next-superjson");

module.exports = withSuperjson()(nextConfig);
