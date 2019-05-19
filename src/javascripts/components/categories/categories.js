import categoriesData from '../../helpers/data/categoriesData';
import util from '../../helpers/util';
import typesData from '../../helpers/data/typesData';
import productsData from '../../helpers/data/productsData';

const writeCategories = (categories) => {
  console.error(categories.length);
  let domString = '';
  for (let i = 0; i < categories.length; i += 1) {
    domString += '<div class="card">';
    domString += `    <h1>${categories[i].name}</h1>`;
    // console.error('first one', categories[i].types.length);
    for (let j = 0; j < categories[i].types.length; j += 1) {
      console.error(categories[i].types[j].name);
      domString += `    <h5>${categories[i].types[j].name}</h5>`;
      for (let k = 0; k < categories[i].types[j].products.length; k += 1) {
        console.error(categories[i].types[j].products);
        domString += `    <h5>${categories[i].types[j].name}</h5>`;
      }
    }
  }
  domString += '</div>';


  // categories.forEach((category) => {
  //   domString += '<div class="card">';
  //   domString += `    <h1>${category.name}</h1>`;
  //   category.types.forEach((type) => {
  //     domString += `    <h5>${type.name}</h5>`;
  //     domString += `    <h6>${type.description}</h6>`;
  //     category.types.products.forEach((product) => {
  //       domString += `    <h5>${product.name}</h5>`;
  //     });
  //   });
  // });
  util.printToDom('productsDiv', domString);
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.getTypesForEachCat(resp.data.categories))
    .then((x) => {
      productsData.getProductsForEachType(x)
        .then((totalArrayToPrint) => {
          console.error(totalArrayToPrint[0].types[0].products);
          writeCategories(totalArrayToPrint);
        });
    })
    .catch(err => console.error('error from initCategories requests', err));
};

export default { initCategories, writeCategories };
