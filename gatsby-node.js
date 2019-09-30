const Promise = require("bluebird")
const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve("./src/templates/blog-post.js")
//     resolve(
//       graphql(
//         `
//           {
//             allMdx {
//               edges {
//                 node {
//                   fields {
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         result.data.allMdx.edges.forEach((post, index) => {
//           if (!post.node.fields.slug) return

//           createPage({
//             path: `/${post.node.fields.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.fields.slug,
//             },
//           })
//         })
//       })
//     )
//   })
// }

// exports.onCreateNode = async ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "Mdx") {
//     const parent = getNode(node.parent)

//     let slug, title, date
//     if (parent.internal.type === "File") {
//       // from file node
//       slug = createFilePath({ node, getNode })
//       title = node.frontmatter.title
//       date = node.frontmatter.date
//     } else {
//       // from contentful node
//       const contentfulNode = getNode(parent.parent)
//       slug = contentfulNode.slug
//       title = contentfulNode.title
//       date = contentfulNode.createdAt
//     }

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })

//     createNodeField({
//       node,
//       name: "title",
//       value: title,
//     })

//     createNodeField({
//       node,
//       name: "date",
//       value: date,
//     })
//   }
// }
