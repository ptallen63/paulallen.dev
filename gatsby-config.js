var proxy = require("http-proxy-middleware")
module.exports = {
  siteMetadata: {
    title: `PaulAllen.dev`,
    description: `The developer site for Paul Allen of Columbia, SC.  I am a Software Engineer that loves programing and all things tech.`,
    author: `@ptallen63`,
    siteUrl: 'https://paulallen.dev'
  },
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages/projects`,
    //     name: `projects`
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PC4L8M2"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "wordpress",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wp",
        // Url to query from
        url: "https://admin.paulallen.dev/graphql",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
