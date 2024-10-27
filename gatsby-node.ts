import { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  loaders,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(woff|woff2)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                name: `static/fonts/[name].[hash].[ext]`, // Adjust the path as needed
              },
            },
          ],
        },
      ],
    },
  });
};
