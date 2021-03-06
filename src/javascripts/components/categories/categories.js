import categoriesData from '../../helpers/data/categoriesData';
import util from '../../helpers/util';
import typesData from '../../helpers/data/typesData';
import productsData from '../../helpers/data/productsData';
import fireworks from '../fireworks/fireworks';
import demolition from '../demolition/demolition';
import $ from '../../../../node_modules/jquery';
import './categories.scss';

const writeCatTypeProductCards = (categories) => {
  let domString = '';
  for (let i = 0; i < categories.length; i += 1) {
    for (let j = 0; j < categories[i].types.length; j += 1) {
      for (let n = 0; n < categories[i].types[j].products.length; n += 1) {
        domString += '  <div class="padCard col-3 m-auto">';
        domString += '    <div class="card cardTarget p-2 m-auto justify-content-center">';
        domString += '    <div class="cardTitle">';
        domString += `      <h2>${categories[i].types[j].products[n].name}</h2>`; // PRODUCT NAME
        domString += '    </div>';
        domString += `      <p>${categories[i].types[j].products[n].description}</p>`; // PRODUCT Description
        domString += `      <h3>For ${categories[i].types[j].name} use</h3>`; // TYPE NAME
        domString += `      <p>${categories[i].types[j].description}</p>`; // TYPE DESCRIP
        domString += `      <h5><span class="span">This product is: </span>${categories[i].name}</h5>`; // CATEGORY NAME
        domString += '    </div>';
        domString += '  </div>';
      }
      domString += '  </div>';
    }
    domString += '  </div>';
  }
  domString += '</div>';
  util.printToDom('productsDiv', domString);
};

const toggleEventListeners = (totalArrayToPrint) => {
  writeCatTypeProductCards(totalArrayToPrint);
  $('#fireworksOnly').click((e) => {
    e.preventDefault();
    fireworks.fireworksEvent(totalArrayToPrint);
  });
  $('#demoOnly').click((e) => {
    e.preventDefault();
    demolition.demoEvent(totalArrayToPrint);
  });
  $('#showAll').click((e) => {
    e.preventDefault();
    writeCatTypeProductCards(totalArrayToPrint);
  });
};

const initCategories = () => {
  categoriesData.loadCategories()
    .then(resp => typesData.getTypesForEachCat(resp.data.categories))
    .then((x) => {
      productsData.getProductsForEachType(x)
        .then((totalArrayToPrint) => {
          writeCatTypeProductCards(totalArrayToPrint);
          toggleEventListeners(totalArrayToPrint);
        });
    })
    .catch(err => console.error('error from initCategories requests', err));
};

export default { initCategories, writeCatTypeProductCards };
