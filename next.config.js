/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "techoutwebsitebkt.s3.amazonaws.com", "previews.customer.envatousercontent.com","skedbooks.com", "cdn.prod.website-files.com", "encrypted-tbn0.gstatic.com", "example.com", "repository-images.githubusercontent.com" , "strapi.dhiwise.com", "flowbite.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
