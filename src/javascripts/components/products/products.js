import productsData from '../../helpers/data/productsData';

const productsInit = () => {
  productsData.loadProducts()
    .then((resp) => {
      console.error(resp);
      // const prodcutsResults = resp.data.products[0];
      // products = prodcutsResults;
    })
    .catch(err => console.error(err));
};

export default { productsInit };
