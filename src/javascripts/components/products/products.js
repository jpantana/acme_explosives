import productsData from '../../helpers/data/productsData';

let products = [];

const productsInit = () => {
  productsData.loadProducts()
    .then((resp) => {
      const prodcutsResults = resp.data.products;
      products = prodcutsResults;
      console.error(products);
    });
};

export default { productsInit };
