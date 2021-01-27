import React , { useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

import {fetchPhones} from "../actions";
import {loadMorePhones} from '../actions';
import {addPhoneToBasket} from "../actions";
import {getPhones} from '../../selectors';
import {fetchCategories} from "../actions";

import * as R from 'ramda';
import {Link} from 'react-router-dom';

import Layout from '../layout';
// class Phones extends Component {
//   componentDidMount() {
//     this.props.fetchPhones();
//   }

//   render () {
//     return (
//       <div>Phones</div>
//     )
//   }
// }

export default function Phones() {
  //const count = useSelector(state => state.counter.count);
  const phones = useSelector(state => getPhones(state));
  
  //console.log (phones);
  const dispatch  = useDispatch();

  //const count = useSelector(state => state.counter.count);
 
  useEffect (() => {
    dispatch(fetchPhones());
    dispatch(fetchCategories());
  } , []);
  
  const renderPhone = (phone, index) => {
    const shortDescription = `${R.take(60, phone.description)}...`

    return (
      <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
        <div className='thumbnail'>
          <img
            className='img-thumbnail'
            src={phone.image}
            alt={phone.name}
          />
          <div className='caption'>
            <h4 className='pull-right'>${phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
            <p>{shortDescription}</p>
            <p className='itemButton'>
              <button className='btn btn-primary' onClick={() => dispatch(addPhoneToBasket(phone.id))} >
                Buy Now!
              </button>
              <Link
                to={`/phones/${phone.id}`}
                className='btn btn-default'
              >
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
    <div className='books row'>{phones.map((phone, index) => renderPhone(phone,index))}</div>
    <div className='row'>
      <div className='col-md-12'>
        <button  onClick={() => dispatch(loadMorePhones())} className='pull-right btn btn-primary'>Load More</button>
      </div>
    </div>
    </Layout>

  );
}
