import axios from 'axios';

const getProductsForEachType = categoriesWithTypes => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const totalArrayToPrint = [];
      const { products } = resp.data;
      categoriesWithTypes.forEach((category) => {
        const newCategory = category;
        totalArrayToPrint.push(newCategory);
        newCategory.types = category.types.map((t) => {
          const newType = t;
          newType.categoryname = category.name;
          const matchingProducts = products.filter(product => product.type === newType.id);
          newType.products = matchingProducts;
          return newType;
        });
      });
      resolve(totalArrayToPrint);
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType };
