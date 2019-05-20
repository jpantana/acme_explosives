import util from './util';
// import $ from '../../../node_modules/jquery';
// import productsData from './data/productsData';

const dropDownBuilder = () => {
  let domString = '';
  domString += `
  <div>
    <button id="fireworksOnly">Fireworks</button>
    <button id="demoOnly">Demolition</button>
  </div>
  `;
  util.printToDom('dropDown', domString);
};

export default { dropDownBuilder };

//   <div id="dropDownPlacement" class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
//  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown button
//   </button>
// </div>
// <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">Action</a>
//     <a class="dropdown-item" href="#">Another action</a>
//     <a class="dropdown-item" href="#">Something else here</a>
//   </div>
