import '../styles/main.scss';
import categories from './components/categories/categories';
import dropDown from './helpers/dropDown';


const init = () => {
  categories.initCategories();
  dropDown.dropDownBuilder();
};

init();

export default { init };
