let activeEnv = process.env.ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`
});

module.exports = {
  siteMetadata: {
    title: `UNFINISHED BUSINESS`,
    siteUrl: process.env.SITE_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENRY_DSN_URL,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: activeEnv,
        enabled: (() => ["production", "staging"].indexOf(activeEnv) !== -1)()
      }
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: process.env.SHOPIFY_SHOP_NAME,
        // The storefront access token
        accessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
      },
    }
  ],
}
