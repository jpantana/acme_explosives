import '../styles/main.scss';
// import types from './components/types/types';
import categories from './components/categories/categories';


const init = () => {
  categories.initCategories();
  // types.initTypes();
};

init();

export default { init };
