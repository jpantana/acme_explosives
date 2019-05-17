import '../styles/main.scss';
import products from './components/products/products';
import types from './components/types/types';
import categories from './components/categories/categories';


const init = () => {
  // console.error('works');
  types.typesInit();
  categories.categoriesInit();
  products.productsInit();
};

init();

export default { init };
