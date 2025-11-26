
// next-sitemap.config.js
import { getDynamicUrls } from "./scripts/generate-sitemaps.js";


export default {
  siteUrl: "https://yatratravelindia.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  exclude: ["/admin/*", "/user/*"],

  additionalPaths: async () => {
    const dynamicUrls = await getDynamicUrls();
    return dynamicUrls;
  },
};
