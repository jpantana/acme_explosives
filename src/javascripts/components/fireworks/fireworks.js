import util from '../../helpers/util';

const fireworksEvent = (totalArrayToPrint) => {
  let domString = '';
  const newTotalArray = totalArrayToPrint;
  newTotalArray.forEach((item) => {
    const newType = item.types;
    newType.forEach((type) => {
      const typeProduct = Object.values(type.products);
      const fire = typeProduct.filter(p => p.type === 'type0' || p.type === 'type1' || p.type === 'type2');
      for (let i = 0; i < fire.length; i += 1) {
        domString += `
        <div class="padCard col-3 m-auto">
          <div class="card cardTarget p-2 m-auto justify-content-center">
            <div class="cardTitle">
              <h2>${fire[i].name}</h2>
              <p>${fire[i].description}</p>
              <h3>For ${type.name} use</h3>
              <p>${type.description}</p>
              <h5><span class="span">This product is: </span>${item.name}</h5>
            </div>
          </div>
        </div>`;
      }
    });
  });
  util.printToDom('productsDiv', domString);
};

export default { fireworksEvent };
