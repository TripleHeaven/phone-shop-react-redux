import phones from './mockPhones';
import * as R from 'ramda';
import categories from "./mockCategories";
import request from 'superagent';


export const fetchPhones = async () => {
  const {body} = await request.get(
    "https://run.mocky.io/v3/735a60a1-7d2b-4bfe-b54f-df29651c30f2"
  );
  return body.phones
  // return new Promise((resolve, reject)=> {
  //   resolve(phones)
  //   //reject ('e')
  // })
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

export const fetchCategories = async () => {
  return new Promise ((resolve, reject) => {
    resolve (categories);
  })
}