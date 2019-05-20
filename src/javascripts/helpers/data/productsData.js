import axios from 'axios';
import $ from '../../../../node_modules/jquery';

const fireworksEvent = (totalArrayToPrint) => {
  const newTotalArray = totalArrayToPrint;
  newTotalArray.forEach((item) => {
    const newType = item.types;
    newType.forEach((type) => {
      const typeProduct = Object.values(type.products);
      const catId = type.category;
      console.error('catId', catId);
      // probably forEach over the products here, and then see if/else within if/else
      const productMap = typeProduct.map(m => m);
      console.error('product map', productMap);
      // const newFilter = productMap.filter(x => x.type === type.id);

      // const newerFilter = newFilter.filter(y => y)
      // console.error('newfilter', newFilter);
      /* if types.id === products.type && type.category === categories.id */
    });
  });
};

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
          const isolateProducts = products[0];
          const justProduct = Object.values(isolateProducts);
          const matchingProducts = justProduct.filter(product => product.type === newType.id);
          newType.products = matchingProducts;
          return newType;
        });
      });
      resolve(totalArrayToPrint);
      $('#fireworksOnly').click((e) => {
        e.preventDefault();
        fireworksEvent(totalArrayToPrint);
      });
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType, fireworksEvent };
