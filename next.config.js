/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "scontent-lcy1-2.xx.fbcdn.net",
      "lh3.googleusercontent.com",
      "picsum.photos",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
