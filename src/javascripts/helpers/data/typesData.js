import axios from 'axios';

const getTypesForEachCat = categories => new Promise((resolve, reject) => {
  axios.get('../../../../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((category) => {
        const newCategory = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        newCategory.types = matchingTypes;
        return newCategory;
      });
      resolve(categoriesWithTypes);
      // console.error('c w t', categoriesWithTypes);
    })
    .catch(err => reject(err));
});

export default { getTypesForEachCat };
