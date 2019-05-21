import util from './util';

const dropDownBuilder = () => {
  let domString = '';
  domString += `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Toggle Category
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a id="fireworksOnly" class="dropdown-item" href="#">Fireworks</a>
    <a id="demoOnly" class="dropdown-item" href="#">Demolition</a>
  </div>
</div>
  `;
  util.printToDom('dropDown', domString);
};

export default { dropDownBuilder };
