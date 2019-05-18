import axios from 'axios';

// const loadTypes = () => axios.get('../../../../db/types.json');

const loadTypesForCard = categoryId => new Promise((resolve, reject) => {
  axios.get('../../../../db/types.json')
    .then((resp) => {
      const allTypes = resp.data.types;
      const matchingCategories = allTypes.filter(type => type.categoryId === categoryId);
      resolve(matchingCategories);
    })
    .catch(err => reject(err));
});

const getTypesForEachCat = categories => new Promise((resolve, reject) => {
  axios.get('../../../../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = categories.map((category) => {
        const newCategory = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        newCategory.types = matchingTypes;
        console.error(newCategory);
        return newCategory;
      });
      resolve(categoriesWithTypes);
    })
    .catch(err => reject(err));
});

export default { loadTypesForCard, getTypesForEachCat };
