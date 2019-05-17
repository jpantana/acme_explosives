import typesData from '../../helpers/data/typesData';

let types = [];

const typesInit = () => {
  typesData.loadTypes()
    .then((resp) => {
      const typesResults = resp.data.types;
      types = typesResults;
      console.error(types);
      // console.error(typesResults);
    })
    .catch(err => console.error(err));
};

export default { typesInit };
