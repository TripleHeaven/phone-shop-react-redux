// redux thunk describing action in function form
// async await 
import {FETCH_PHONES_SUCCES,
FETCH_PHONES_START,
FETCH_PHONES_FAILURE , LOAD_MORE_PHONES_SUCCES, LOAD_MORE_PHONES_FAILURE, LOAD_MORE_PHONES_START} from "../actionTypes";

import {fetchPhones as fetchPhonesApi, loadMorePhones as loadMorePhonesApi} from '../../api/index';
import { getRenderedPhonesLength } from "../../selectors";

export const fetchPhones =  () => async dispatch => {
  dispatch ({
    type : FETCH_PHONES_START
  });
  try {
    const phones = await fetchPhonesApi();
    dispatch (
      {
        type: FETCH_PHONES_SUCCES,
        payload: phones,
      }
    )
  }
  catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload : err,
      error : true,
    })
  }
}

export const loadMorePhones =  () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  dispatch ({
    type : LOAD_MORE_PHONES_START
  });
  try {
    const phones = await loadMorePhonesApi({offset});
    dispatch (
      {
        type: LOAD_MORE_PHONES_SUCCES,
        payload: phones,
      }
    )
  }
  catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload : err,
      error : true,
    })
  }
}