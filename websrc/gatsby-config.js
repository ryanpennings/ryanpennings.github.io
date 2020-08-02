module.exports = {
  siteMetadata: {
    title: `Ryan Pennings`,
    subtitle: `Robotic Fabrication Expert`,
    description: `A minimal blog starter built with Gatsbyjs. The needed Gatsby files are included.`,
    author: `Ryan Pennings`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-google-scholar`,
      options: {
        queries: [`ryan pennings`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `markdownContent`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
