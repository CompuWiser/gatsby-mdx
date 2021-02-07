const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug
      }
    });
  });

  data.categories.distinct.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category
      }
    });
  });
};
