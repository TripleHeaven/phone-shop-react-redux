import * as R from 'ramda';

import {FETCH_PHONE_BY_ID_FAILURE, FETCH_PHONE_BY_ID_SUCCES} from '../containers/actionTypes';
const initialState = {
  id : null,
};

export default (state = initialState, {type , payload}) => {
  switch(type) {
    case FETCH_PHONE_BY_ID_SUCCES:
      return R.merge(state, {
        id: R.prop('id', payload)
      })
    default : 
      return state;
  }
}
