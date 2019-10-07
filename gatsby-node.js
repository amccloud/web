const Promise = require('bluebird')
const path = require('path')

// exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
//   const config = getConfig()
//
//   config.module.rules = [
//     ...config.module.rules,
//     {
//       test: /\.link$/,
//       loader: 'abstract-link-loader'
//     }
//   ]
//
//   actions.setWebpackConfig(config)
// }

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
              edges {
                node {
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allContentfulBlogPost.edges.forEach((post, index) => {
          if (post.node.slug) {
            createPage({
              path: `/${post.node.slug}/`,
              component: blogPost,
              context: { slug: post.node.slug },
            })
          }
        })
      })
    )
  })
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  switch (node.internal.type) {
    case "Mdx": {
      const contentfulField = getNode(node.parent)
      const blogPost = getNode(contentfulField.parent)

      actions.createNodeField({
        node,
        name: 'type',
        value: contentfulField.internal.type
      })

      actions.createNodeField({
        node,
        name: 'slug',
        value: blogPost.slug,
      })

      actions.createNodeField({
        node,
        name: 'publishDate',
        value: blogPost.publishDate
      })

      break
    }
    default: {
      // nothing to do!
    }
  }
}
