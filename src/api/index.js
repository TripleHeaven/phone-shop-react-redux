import phones from './mockPhones';
import * as R from 'ramda';

export const fetchPhones = async () => {
  return new Promise((resolve, reject)=> {
    resolve(phones)
    //reject ('e')
  })
}

export const loadMorePhones = async () => {
  return new Promise((resolve, reject)=> {
    resolve(phones)
    //reject ('e')
  })
}

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject)=> {
    const phone = R.find(R.propEq('id', id), phones);
    resolve(phone);
  })
}