module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          // Replace with your actual paths
          "@components": "src/components",
          "@styles": "src/styles",
        },
        extensions: ["js", "jsx", "ts", "tsx"], // Add any extensions you're using
      },
    },
    // other plugins...
  ],
}
