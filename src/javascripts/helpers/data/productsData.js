import axios from 'axios';

// const loadCategories = () => axios.get('../../../../db/categories.json');


const loadProducts = () => axios.get('../../../../db/products.json');
// const loadProducts = products => new Promise((resolve, reject) => {
//   axios.get('../../../../db/products.json')
//     .then((resp) => {
//       const { products } = resp.data;
//       const productsWithCategories = products.map((product) => {
//         const newProduct = product;
//         const matchingCategory = categories.filter(category => category.id === product.id);
//       });
//     })
//     .catch((err) => console.error(err));
// });

export default { loadProducts };
