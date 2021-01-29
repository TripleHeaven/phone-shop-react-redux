import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);



export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps);
  console.log ('ownProps', ownProps);
  console.log("activeCategoryID", "  ", activeCategoryId);
  console.log ("state.phonesPage.ids", state.phonesPage.ids);
  const applySearch = item => R.contains(state.phonesPage.search,
    R.prop('name', item));
  const applyCategory = item => 
  activeCategoryId ?  R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  ) : true;

  
  const phones = R.compose(
    R.filter(applyCategory),
    R.filter(applySearch),
    R.map(id => getPhoneById(state,id))
  )(state.phonesPage.ids);
  
  return phones; 
}


export const getRenderedPhonesLength = state => R.length(state.phonesPage.ind);

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getPhoneById(state, id))
  )(state.basket);

  return totalPrice;
}

export const getCategories = state => R.values(state.categories);

export const getActiveCategoryId = props => R.path(['match', 'params', 'id'], props);