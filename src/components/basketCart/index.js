import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from "react-redux";

import {getTotalBasketCount, getTotalBasketPrice} from '../../selectors';

const BasketCart= ({children}) => {

  const totalBasketCount = useSelector(state => getTotalBasketCount(state));
  const totalPrice = useSelector(state => getTotalBasketPrice(state));
  return (
  <div className='cart'>
    <div className='dropdown'>
      <Link
       to='/basket'
       id='dLabel'
       className='btn btn-inverse btn-block btn-lg'
      ><i className="fa fa-fa-shopping-cart"></i><span>{totalBasketCount} item(s) - ${totalPrice}</span></Link>
    </div>
  </div>
)}

export default BasketCart;