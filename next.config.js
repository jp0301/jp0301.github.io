/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV === "production";
const repository = "https://jp0301.github.io";

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: debug ? repository : "/",
  },
  assetPrefix: debug ? repository : "",
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'data'],
  },

});