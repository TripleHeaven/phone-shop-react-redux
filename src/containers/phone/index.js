import React , {Component, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoneById } from '../actions';
import {connect} from 'react-redux';

export default function Phones(props) {
  //const phone = useSelector(state => getPH)
  const dispatch  = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPhoneById(props.match.params.id));
    // dispatchEvent(fetchPhoneById());
  }, []) ;
  return (
    <div>Phone</div>
  )
}