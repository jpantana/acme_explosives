import categoriesData from '../../helpers/data/categoriesData';

let categories = [];

const categoriesInit = () => {
  categoriesData.loadCategories()
    .then((resp) => {
      const categoriesResults = resp.data.categories;
      categories = categoriesResults;
      console.error(categories);
    })
    .catch(err => console.error(err));
};

export default { categoriesInit };
