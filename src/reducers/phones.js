import * as R from 'ramda';

import { FETCH_PHONES_SUCCES ,LOAD_MORE_PHONES_SUCCES , FETCH_PHONE_BY_ID_SUCCES} from "../containers/actionTypes";


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
    case FETCH_PHONE_BY_ID_SUCCES:
      return R.assoc(payload.id, payload, state);
    default:
      return state;
  } 
} 