import { GatsbyNode } from 'gatsby';

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[hash].[ext]', // Adjust the path as needed
              },
            },
          ],
        },
      ],
    },
  });
};

export { onCreateWebpackConfig };
