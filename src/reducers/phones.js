import * as R from 'ramda';

import { FETCH_PHONES_SUCCES ,LOAD_MORE_PHONES_SUCCES } from "../containers/actionTypes";


// here we store all the phones



const initialState = {};

export default (state = initialState , {type, payload}) => {
  switch(type) {
    case FETCH_PHONES_SUCCES: 
      const newValues = R.indexBy(R.prop('id'), payload);
      
      return R.merge(state, newValues);
    case LOAD_MORE_PHONES_SUCCES: 
    const moreValues = R.indexBy(R.prop('id'), payload);
      
      return R.merge(state, moreValues);
    default:
      return state;
  } 
} 