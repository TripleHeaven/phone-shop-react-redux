import * as R from 'ramda';

import { FETCH_PHONES_SUCCES } from "../containers/actionTypes";


// here we store all the phones



const initialState = {};

export default (state = initialState , {type, payload}) => {
  switch(type) {
    case FETCH_PHONES_SUCCES: 
      const newValues = R.indexBy(R.prop('id'), payload);
      
      return R.merge(state, newValues);
    default:
      return state;
  } 
} 