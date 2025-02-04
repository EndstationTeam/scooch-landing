// gatsby-node.js
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify"),
      },
    },
  })
}
