import categoriesData from '../../helpers/data/categoriesData';
import util from '../../helpers/util';
import typesData from '../../helpers/data/typesData';

const writeCategories = (categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += '<div class="card">';
    domString += `    <h1>${category.name}</h1>`;
    category.types.forEach((type) => {
      domString += `    <h5>${Object.values(type.name).join('')}</h5>`;
      domString += `    <h6>${Object.values(type.description).join('')}</h6>`;
    });
    domString += '</div>';
  });
  util.printToDom('productsDiv', domString);
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.getTypesForEachCat(resp.data.categories))
    .then((categoriesWithTypes) => {
      writeCategories(categoriesWithTypes);
    })
    .catch(err => console.error('error from initCategories requests', err));
};

export default { initCategories, writeCategories };
