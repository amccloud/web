require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: "amccloud.com | Andrew",
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-mdx",
    //   options: {
    //     extensions: [".md", ".mdx"],
    //     plugins: [
    //       // {
    //       //   resolve: `gatsby-remark-images`,
    //       //   options: {
    //       //     // It's important to specify the maxWidth (in pixels) of
    //       //     // the content container as this plugin uses this as the
    //       //     // base for generating different widths of each image.
    //       //     maxWidth: 590,
    //       //   },
    //       // },
    //       // {
    //       //   resolve: 'gatsby-remark-responsive-iframe',
    //       //   options: {
    //       //     wrapperStyle: 'margin-bottom: 1.0725rem',
    //       //   },
    //       // },
    //       // 'gatsby-remark-prismjs',
    //       // 'gatsby-remark-copy-linked-files',
    //       // 'gatsby-remark-smartypants',
    //     ],
    //   },
    // },
    // "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
}
