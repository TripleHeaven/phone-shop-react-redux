import phones from './mockPhones';


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