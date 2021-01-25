import * as R from 'ramda';

import {FETCH_PHONES_SUCCES, LOAD_MORE_PHONES_SUCCES} from "../containers/actionTypes";

const initialState = {
  ids : []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCES:
    // get ids from array object  
      return R.merge(state, {ids : R.pluck('id', payload)});
    case LOAD_MORE_PHONES_SUCCES:
    const ids = R.pluck('id', payload);  
    return R.merge(state, {ids : R.concat(state.ids, ids)});
    
    default: 
    return state;
  }
}