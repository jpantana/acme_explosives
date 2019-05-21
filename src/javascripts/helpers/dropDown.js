import util from './util';
import '../../styles/main.scss';

const dropDownBuilder = () => {
  let domString = '';
  domString += `
  <div class="topBar">
    <h1 class="headerBrand">Fireworks & Demolition</h1>
    <div class="dropdown">
      <button class="btn btn-secondary main-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Toggle Category
      </button>
      <div id="dropdown" class="main-btn-2 dropdown-menu-2 dropDown" aria-labelledby="dropdownMenuButton">
        <a id="fireworksOnly" class="dropdown-item" href="#">Fireworks</a>
        <a id="demoOnly" class="dropdown-item" href="#">Demolition</a>
        <a id="showAll" class="dropdown-item" href="#">Show All</a>
      </div>
    </div>
  </div>
  `;
  util.printToDom('dropDown', domString);
  const dropEvent = document.getElementById('dropdownMenuButton');
  dropEvent.addEventListener('click', () => {
    const dropDown = document.getElementById('dropdown');
    dropDown.classList.toggle('dropDown');
  });
};

export default { dropDownBuilder };
